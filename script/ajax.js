//C'est la fonction qui envoie les valeurs saisie par l'utilisateur depuis la page index, à Node JS server

function envoi(){
			var data = {	"nom":$('#menu_liste').val(),
							"s1": $('#slider-range').slider("value"), 'c1': $( "input[name='c1']" ).val(), 
							"s2": $('#slider-range-1').slider("value"), 'c2': $( "input[name='c2']" ).val(),
							"s3": $('#slider-range-2').slider("value"), 'c3': $( "input[name='c3']" ).val(),
							"s4": $('#slider-range-3').slider("value"), 'c4': $( "input[name='c4']" ).val(),
					 		"s5": $('#slider-range-4').slider("value"), 'c5': $( "input[name='c5']" ).val() };
			$.ajax({
            type: 'POST',
            //contentType: "text/plain",
            //dataType : "text",
            url: 'index/gen/',
            data: data,
            success : function(j){			//Quand NodeJS renvoi le callback, on actualise l'image en rechargeant sa source

				var img = document.getElementById('image');		//On obtient la division image
				img.src = j;						//La source de l'image est maintenant la Base64 de l'image renvoyée par NodeJS
	      	},
	      	complete : function(){
	      		},
    	    });       
		}
