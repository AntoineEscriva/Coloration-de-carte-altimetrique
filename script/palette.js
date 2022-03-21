	$(".full").spectrum({		//Pour ces options, se référer à la documentatione en ligne de spectrum
		color: "#fff",
		showInput: true,
		className: "full-spectrum",
		showInitial: true,
		showPalette: true,
		showSelectionPalette: true,
		maxPaletteSize: 10,
		preferredFormat: "hex",
		localStorageKey: "spectrum.demo",
		
		move: function (color) {
			envoi(); //Fonction pour générer l'apercu avec la couleur venant d'etre modifiée
		},
		show: function () {
			envoi();
		},
		beforeShow: function () {

		},
		hide: function () {
		
		},
		change: function() {
			envoi();		
		},
		//La palette ci-dessous est réglée avec des couleurs susceptibles d'être utilisée pour colorer la carte 
		palette: [
			["rgb(0,0,0)","rgb(67,67,67)","rgb(102,102,102)","rgb(132,132,132)","rgb(187,174,152)","rgb(204,204,204)",], 
			["rgb(193,191,177)","rgb(186,186,186)","rgb(217,217,217)","rgb(239,239,239)","rgb(255,255,255)"],
			["rgb(143,89,34)","rgb(88,41,0)","rgb(70,46,1)","rgb(136,66,29)","rgb(204,85,0)","rgb(126,51,0)"],
			["rgb(239,155,15)","rgb(243,214,23)","rgb(218,179,10)","rgb(240,195,0)","rgb(252,220,18)","rgb(254,227,71)"],
			["rgb(88,111,45)","rgb(58,137,35)","rgb(20,148,20)","rgb(52,201,36)", "rgb(121,137,51)","rgb(127,221,76)"]
			]
	});












