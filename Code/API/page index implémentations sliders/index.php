<!DOCTYPE html>

<html>

    <head>
        <!-- En-tête de la page-->
        <meta charset="utf-8" />
		<link rel="stylesheet" media="screen" title="super style" href="feuille.css" />

        <title>Génération</title>

    </head>


    <body>
    
	<img src="images/map.jpg" class="superbg" />
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="/resources/demos/style.css">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


	<body>
	
	<div id="main">

	<header>
	  <div id="titre">  
		<h1>Génération de carte COULEUR</h1>
	  </div>
	</header>

	<div id="formulaire">
	
	<form oninput="level.value = flying.valueAsNumber" action="http://localhost:3000/" method="post" id="couleur">
	<?php require "sliders.html";?>
				<br>  
		<input type="submit" value="Tester" name="submit" class="bouton"/>
		
		<div id="telecharger">
		<p>
		Cliquez sur le bouton ci-dessous afin de télécharger la carte au format .tiff.
		<br>Attention, la génération peut durer jusqu'à deux minutes. Le téléchargement démarrera automatiquement
		</p>
		<input type='submit' value='Telecharger' name="submit" class="bouton" />
		</div>
		
	</form>
	</div>

	<div id="image">
		<img src="images/miniature.jpg"/>
	</div>	
	

	<footer>
		Copyright CLEBS 2017, tous droits réservés.
	</footer>
	</div>
	</body>
	
</html>

