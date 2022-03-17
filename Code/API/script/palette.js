var clic=false; 
//Cette variable nous indique si l'utilisateur clique sur la barre.
 
var clic2=false;
//Cette variable nous indique si l'utilisateur clique sur le carré.
 
var r=255,g=0,b=0;
//Variables qui stockeront la couleur en rgb.
 
var r_1=255,g_1=0,b_1=0;
// Variables secondaires rgb.
 
var blanc=0,noir=1;
// Le pourcentage de noir et de blanc entre 0 et 1 appliqué à la couleur (ici pour le noir 1 signifie qu'il n'y en aura pas et 0 totalement : c'est l'inverse)
 
var x=360,y=20;
//position initiale de curseur2 (dans le carré).

function clique(objet)
{
 
	if(objet=="barre") // si l'utilisateur clique sur la barre ...
	{ 
	clic=true; // ...alors on met true (vrai) à clic
	}
	else // sinon l'utilisateur clique sur le carr� ...
	{ 
	clic2=true; // ...alors on met true (vrai) � clic2
	}
 
} 

function position(axe,event)
{
// event contient les �v�nements de la page (on s'en sert pour la position du curseur)
 
var e = event || window.event; 
// on copie les �v�nements dans e : il y a des mani�res diff�rentes de r�cuperer les �venements selon le navigateur
 
	if(axe=="x") //si on demande x
	{
	var rep=e.clientX; // position x de la souris.
	}
	else // sinon y 
	{
	var rep=e.clientY; // position y de la souris.
	}

return rep;
// on renvoie la valeur de rep.

}

document.onmousemove=calcul; 
// lorsque la souris bouge n'importe o� dans le document on appelle la fonction calcul.

document.onmousedown=calcul; 
// lorsque la souris clique n'importe o� dans le document on appelle la fonction calcul.
 
document.onmouseup=function() { clic=false;clic2=false; }
// si l'utilisateur rel�che le bouton de la souris alors les variables clic et clic2 redeviennent fausses (false).
 
 
 function calcul(event) // event contient les �v�nements de la page (on s'en sert pour la position du curseur).
{
 
	if(clic && position('y',event)<=320 && position('y',event)>=20) // on appelle position() pour connaitre la position de la souris.
	{
	document.getElementById("curseur1").style.top=position('y',event)-7;
//on change la position du curseur (top) en m�me temps que la souris.


// c'est � partir d'ici qu'on regarde sur qu'elle sixi�me la souris se trouve.

if((position('y',event)-20)<=50) // 1/6 (50px)
{

r=255;
g=0;
b=Math.round((position('y',event)-20)*255/50);
 
}
else if((position('y',event)-20)<=100) // 2/6 (100px)
{

r=Math.round(255-((position('y',event)-70)*255/50));
g=0;
b=255;

}
else if((position('y',event)-20)<=150) // 3/6 (150px)
{

r=0;
g=Math.round((position('y',event)-120)*255/50);
b=255;

}
else if((position('y',event)-20)<=200) // 4/6 (200px)
{

r=0;
g=255;
b=Math.round(255-((position('y',event)-170)*255/50));

}
else if((position('y',event)-20)<=250) // 5/6 (250px)
{

r=Math.round((position('y',event)-220)*255/50);
g=255;
b=0;

}
else if((position('y',event)-20)<=300) // 6/6 (300px)
{

r=255;
g=Math.round(255-((position('y',event)-270)*255/50));
b=0;

}

document.getElementById("carre").style.backgroundColor="rgb("+r+","+g+","+b+")";
// On change la couleur du carr�. On voit apr�s (gr�ce � degrade n-b.png) le d�grad� de la couleur vers le blanc et le noir.

	afficher(); // fonction qui permet d'afficher la couleur courante dans le 	rectangle (input text) 'resultat'.
	}

	if(clic2) // si l'utilisateur clique sur le carr� ...
	{
	
		if(position('y',event)>20 && position('y',event)<320)
		{ 
		document.getElementById("curseur2").style.top=position('y',event)-10;
// on d�place curseur2 et on lui retire son milieu (comme pour curseur 1)
 
y=position('y',event);
		}

		if(position('x',event)>60 && position('x',event)<360)
		{
		document.getElementById("curseur2").style.left=position('x',event)-10;
// on d�place curseur2 et on lui retire son milieu (comme pour curseur 1)
 
x=position('x',event);
		}

	afficher(); // fonction qui permet d'afficher la couleur courante dans le 	rectangle (input text) 'resultat'.
	}

}



function afficher()  // ici on g�re l'affichage de la couleur
{ 
noir=Math.round( (x-60)*100/300)/100; 
// on calcul le pourcentage de noir appliqu� � la couleur en divisant encore la position dans le carr� par sa largeur(-60 car le carr� commence � left:60px)

blanc=Math.round((y-20)*100/300)/100; 

r_1=Math.round((255-r)*blanc)+r;
g_1=Math.round((255-g)*blanc)+g;
b_1=Math.round((255-b)*blanc)+b;
 
// on applique le noir aux 3 couleurs
r_1=Math.round(r_1*noir);
g_1=Math.round(g_1*noir);
b_1=Math.round(b_1*noir);
 
r_hexa = hexadecimal( Math.floor(r_1 /16) ) + hexadecimal( r_1 % 16 );
g_hexa = hexadecimal( Math.floor(g_1 /16) ) + hexadecimal( g_1 % 16 );
b_hexa = hexadecimal( Math.floor(b_1 /16) ) + hexadecimal( b_1 % 16 );
 
document.forms[0].resultat.value = "#" + r_hexa + g_hexa + b_hexa;
 
//on applique la couleur rgb au champ resultat
document.getElementById('resultat').style.backgroundColor="rgb("+r_1+","+g_1+","+b_1+")";
}

function valider()
{

//on fait appel � une fonction dans la page principale pour transmettre le contenu de resultat.
window.opener.valid_couleur(document.forms[0].resultat.value);
 
window.close();
//on ferme la palette
}

function hexadecimal(nombre)
{

if(nombre < 10)
{
return nombre.toString(); // le nombre en chaine de caract�res.
}
else
{
	switch (nombre)
	{
	case 10:
	return "A";
	break;
	case 11:
	return "B";
	break;
	case 12:
	return "C";
	break;
	case 13:
	return "D";
	break;
	case 14:
	return "E";
	break;
	case 15:
	return "F";
	break;
	}
}

}




 function chargement_termine(){
 document.getElementById("barre").style.visibility="visible";
  document.getElementById("curseur1").style.visibility="visible";
   document.getElementById("curseur2").style.visibility="visible";
    document.getElementById("carre").style.visibility="visible";
	document.forms[0].resultat.value="#FF0000";
	 document.getElementById("bouton_valid").removeAttribute("disabled");
	
 }