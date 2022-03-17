var express = require("express");
var app = express();
var bodyParser = require('body-parser'); 		
var pythonShell = require('python-shell');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static(__dirname));

app.get('/',function(req,res){
	var options = {
			mode: 'binary',
			pythonOptions: ['-u'],			
			args: ['0', '0', '0','0']
			};   
	pythonShell.run('./generateur/minigen.py',options, function (err)  	//Pour avoir l'aperçu de base
	{
        if (err) throw err; 	
		res.sendFile('index.html', { root: __dirname });
    });
})

app.post('/', urlencodedParser, function (req,res){					//Génération de la miniature	
		var options = {
		mode: 'binary',										
		pythonOptions: ['-u'],
		args: []		//Valeur des curseurs
		};  
		
		if(req.body.submit=="Tester")
		{								//Vérifie quel bouton du formulaire a été utilisé
			console.log("Script de création de la miniature");
			pythonShell.run('./generateur/minigen.py',options,function (err,results) { 
    		   if (err) throw err; 
    			   console.log(results);
					res.sendFile('index.html', { root: __dirname });

       		});
		}		
		else if(req.body.submit=="Telecharger"){						//Vérifie quel bouton du formulaire a été utilisé
			console.log("Script de génération et téléchargement de la carte");
    		pythonShell.run('./generateur/generation.py',options,function (err,results)
    		{ 
		        if (err) throw err; 
        			console.log(results);
        			res.download('./images/test.tiff', 'carte.tiff');				//Envoie le téléchargement
       				console.log("Télechargement effectué");
    		});
    	}
	    else
	    {
    		console.log("Propriété du bouton indéfinie, extinction du serveur");
    		res.end();
    	}	 	
})

.use(function(req, res, next){					//Ici on redirige l'utilisateur vers la page d'accueil , si l'url est inexistante
	res.redirect('/index.html');
})



app.listen(3000);

console.log("Running at Port 3000");
