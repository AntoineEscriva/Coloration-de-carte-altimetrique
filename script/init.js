//C'est la fonction qui envoie les valeurs saisie par l'utilisateur depuis la page index, à Node JS server

function init(){
	var data = {
		"nom":$('#menu_liste').val(),
		"s1": 5000, 'c1': $( "input[name='c1']" ).val(), 
		"s2": 0, 'c2': $( "input[name='c2']" ).val(),
		"s3": 0, 'c3': $( "input[name='c3']" ).val(),
		"s4": 0, 'c4': $( "input[name='c4']" ).val(),
		"s5": 0, 'c5': $( "input[name='c5']" ).val() 
	};
	$.ajax({
		type: 'POST',
		url: '/index/gen',
		data: data,
		//Quand NodeJS renvoi le callback, on actualise l'image en rechargeant sa source
		success : function(j){
			console.log("success");
			console.log(j);
			//On obtient la division image
			var img = document.getElementById('image');	
			//La source de l'image est maintenant la Base64 de l'image renvoyée par NodeJS	
			img.src = j;						
		}
	});       
}
