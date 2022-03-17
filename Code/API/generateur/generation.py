#!/usr/bin/python
# -*- coding: utf-8 -*-
import math 
import os
import time
import numpy
import PIL
import Image
import ImageOps
import time

import StringIO

	
def tiffEnCouleurs(fichier):
	tps = time.time()
	image = Image.open("./carte/"+fichier)				#Ouvre l'image
	tab = numpy.array(image)							#Insertion dans le tableau tab
	w,h = image.size									#w et h valent la taille de l'image d'origine
	data = numpy.zeros((h, w, 4), dtype=numpy.uint8)	#Crée une matrice de la taille de l'image
	
	x=0
	
	tps_ec = tps
	max = int(round(tab.max()))
	
	plage = int(round(max/5))

	c1 = numpy.where(tab>= max - plage)
	data[c1[0],c1[1]] = [190, 0, 185,165]
	
	c2 = numpy.where((tab<plage*4) & (tab>=plage*3))
	data[c2[0],c2[1]] = [160, 0, 155,135]
	
	c2 = numpy.where((tab<plage*3) & (tab>=plage*2))
	data[c2[0],c2[1]] = [120, 0, 105,105]
	
	c3 = numpy.where((tab<plage*2) & (tab>=plage))
	data[c3[0],c3[1]] = [140,21, 114,50]

	c4 = numpy.where((tab< plage) & (tab>plage/2))
	data[c4[0],c4[1]] = [0, 50, 160,40]
	
	c5 = numpy.where((tab< plage/2) & (tab>0))
	data[c5[0],c5[1]] = [0,21, 114,5]
	
	c6 = numpy.where(tab<=0)
	data[c6[0],c6[1]] = [255, 0, 0,145]	

	img = Image.fromarray(data, 'CMYK')					#Crée une image à partir de la matrice
	img.save('test.tiff')								#Enregistre l'image
	print time.time()-tps
	img.show();
	img.close() 									# on ferme le fichier



fichier="27-38.tif"
tiffEnCouleurs(fichier)							#Fonction créant l'image .tiff colorée














