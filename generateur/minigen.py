#!/usr/bin/python
# -*- coding: utf-8 -*-
import math 
import os
import time
import numpy
import PIL
from PIL import Image
from PIL import ImageOps
import time
import sys
import base64
from io import BytesIO

def deciHexa(s):										#Fonction qui convertie la chaine de caractère de RGB en CMJN tableau de int
	if s=="":											#Si la couleur n'a pas été définie, on la met par défaut à blanc
		return [255,255,255]
	else:
		s = "".join(str(x) for x in s)						#Conversion en chaine de caractères
		s = s.replace("#","")								#Supprime le symbole #
		return [int(s[0]+s[1],16),int(s[2]+s[3],16),int(s[4]+s[5],16)]	#Retourne le tableau des valeurs en decimal
	
	
def tiffEnCouleurs(fichier):
	image = Image.open("./carte/"+fichier)				#Ouvre l'image
	image = image.resize((400,400),Image.ANTIALIAS)		#Redimensionne l'image
	w,h = image.size									#w et h valent la taille de l'image d'origine
	tab = numpy.array(image)							#Insertion dans le tableau tab
	data = numpy.zeros((h, w, 3), dtype=numpy.uint8)	#Crée une matrice de la taille de l'image
	
	c = []												#tableau deux dimensions des couleurs
	t = []

	if(len(sys.argv)>10):								#Rentre dans la fonction SSI l'utilisateur a bien entré les données
		for i in range(2,len(sys.argv)):				#Insère toutes les données dans des tableaux
			if( i % 2!=0):								#Les couleurs se situent à un indice pair (lors de l'envoi Ajax)
				c.append(deciHexa(sys.argv[i]))			#Ajoute au tableau de l'hexa RVB convertit en CMJN
			else:
				t.append(int(sys.argv[i]))				#Les disances se situent à un indice impair
	else:
		c.append([255,255,255])
		t.append(5000)

	mer=[49,140,231]									#La couleur de la mer
	
	co=0												#Simple compteur
	while t.count(0)!=0:								#Tant que des distances valent 0, on les saute
		if t[co]==0:									#Si a cet index du tableau, la distance est de 0
			del t[co]									#On la supprime
			del c[co]									#Ainsi que sa couleur associée
		else:
			co=co+1										#Sinon, au incrémente le compteur
	
	taille = (len(t))					#Taille correspondant au nombre d'arguments divisé par 2 (car 2 tableaux)
	for i in range(taille):
		if i==0:										#Si i = 0 alors on définit le minimum à 0
			d = numpy.where((tab < t[i]) & (tab > tab.min()))
		elif(i == taille-1):							#Si i est la derniere case du tableau, alors on ne definit pas de max 
			d = numpy.where(tab > t[i-1])
		else:											#Cas Ordinaire
			d = numpy.where((tab < t[i]) & (tab >= t[i-1]))
			
		data[ d[0] , d[1] ] = [c[i][0],c[i][1],c[i][2]]	#Affectation des valeurs
	
	d = numpy.where(tab <=0)							#Pour colorer la mer
	data[ d[0] , d[1] ] = [mer[0],mer[1],mer[2]]		#Affectation des valeurs R, G et B de la mer

	
	img = Image.fromarray(data, 'RGB')					#Crée une image à partir de la matrice
	buffer = BytesIO()
	img.save(buffer,format="JPEG")					#Enregistre l'image	dans le buffer
	myimage = buffer.getvalue()						
	print ("data:image/jpeg;base64," + base64.b64encode(myimage).decode('utf-8'))
	img.close()

fichier = sys.argv[1]
tiffEnCouleurs(fichier)									#Fonction créant l'image .tiff colorée












