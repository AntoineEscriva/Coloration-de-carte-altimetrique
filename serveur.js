var express = require("express");
var app = express();
var bodyParser = require('body-parser'); 		
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var pyshell = require('python-shell');
var base64img = require('base64-img');
const { spawn } = require('child_process');

app.use(express.static('public'));							//Pour avoir accès aux dossier
app.use(express.static(__dirname));


app.use(function(req, res, next) {     						//Pour autoriser le cross domaine
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.options('./*', function (request, response, next) {		//Pour autoriser le cross domaine
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    response.send();
})



app.get('/index',function(req,res){				//Accueil
	console.log("Accueil :\n");
	res.sendFile('index.html', { root:__dirname,});					//Envoi la page vers le navigateur
})


app.post('/index/gen/',urlencodedParser, function (req,res){					//Génération de la miniature
	
	console.log("Génération du JPG :\n");
	if(req.body.telecharger=="telecharger"){						//On vérifie si le bouton télécharge a été clické
		res.download("./images/carte.tiff",'carte.tif');
	}
	else{
		var tv = req.body;
		var options = {			//Encapsulation des données à envoyer
		  mode: 'JSON',
		  pythonOptions: ['-u'],
		  scriptPath: './generateur',				//ligne du dessous c'est les valeurs saisies par l'utilisateur
		  args: [tv['nom'],tv['s1'],tv['c1'],tv['s2'],tv['c2'],tv['s3'],tv['c3'],tv['s4'],tv['c4'],tv['s5'],tv['c5']]
		};

		console.log([tv['nom'],tv['s1'],tv['c1'],tv['s2'],tv['c2'],tv['s3'],tv['c3'],tv['s4'],tv['c4'],tv['s5'],tv['c5']]);
		var ls = spawn('python3',['./generateur/minigen.py',tv['nom'],tv['s1'],tv['c1'],tv['s2'],tv['c2'],tv['s3'],tv['c3'],tv['s4'],tv['c4'],tv['s5'],tv['c5']]);
		var donnees = '';
		ls.stdout.on('data', (data) => {
				console.log(data.toString());
				donnees+=data.toString();
		});	
		ls.stderr.on('datas', (datas) => {
			console.log("Erreur"+`stderr: ${datas}`);
		});

		//Génère la carte.tiff pour un futur téléchargement
		
		pyshell.PythonShell.run('generation.py', options, function (err, results) {	
			if (err) throw err;
			res.send(donnees);
		});
	}
})


.use(function(req, res, next){					//Ici on redirige l'utilisateur vers la page d'accueil , si l'url saisie est inexistante

	console.log("Redirection vers /index\n");	
	res.redirect('/index.html');							//Fonction qui redirige	
})

app.listen(3000);								//Choix du port, pour ouvrir dans le navigateur, ici, c'est 3000

console.log("Running at Port 3000 :\n");








