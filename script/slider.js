


$( function() {
	$( "#slider-range" ).slider({
		range:"max",	/* le type du slider ici juste un curseur avec une valeur max */
		min: 0,			/* borne du slider */
		max: 4500,
		value:  0,		/* valeur initiale du silder*/
		step:50,		/* pas ici l'altitude augmente de 50 mètre à chaque fois que le curseur se déplace */ 
				
		slide: function( event, ui ) {			/* fonction qui s'active lorsque le curseur se déplace */
			
			$( "#amount" ).val( "0m - " + ui.value+"m" ); /* amount est la variable correspondante à chaque curseur */
			$( "#slider-range-1" ).slider( "option", "min", ui.value) /*la valeur max de ce curseur deviendra la min du suivant*/
			$( "#amount1" ).val(ui.value+"m-")  /* affiche aussi la valeur sur le slider suivant */
			
		}
	});
	
	$( "#amount" ).val( $( "#slider-range" ).slider( "value")+"m - " + $( "#slider-range" ).slider( "value") +"m"); /*affichage des valeur initiale*/
		
	$( "#slider-range-1" ).slider({
		range:"max",
		min: 0,
		max: 4500,
		value: 0,
		step:50,
		slide: function( event, ui ) {
			$( "#amount1" ).val( $( "#slider-range" ).slider( "option", "value")+"m - " + ui.value+"m");
			$( "#amount2" ).val(ui.value+"m")
			$( "#slider-range-2" ).slider( "option", "min", ui.value)
		}
	});
	$( "#amount1" ).val( $( "#slider-range-1" ).slider( "value")+ "m - " + $( "#slider-range-1" ).slider( "value" ) +"m");
			
	$( "#slider-range-2" ).slider({
		range:"max",
		min: 0,
		max: 4500,
		value: 0,
		step:50,
		slide: function( event, ui ) {
			$( "#amount2" ).val($( "#slider-range-1" ).slider( "option", "value")+ "m - " + ui.value+"m");
			$( "#amount3" ).val(  ui.value+"m")
			$( "#slider-range-3" ).slider( "option", "min", ui.value)
		}
	});
	$( "#amount2" ).val( $( "#slider-range-2" ).slider( "value" ) + "m" +
		" - " + $( "#slider-range-2" ).slider( "value" ) +"m" );
		
	$( "#slider-range-3" ).slider({
		range:"max",
		min: 0,
		max: 4500,
		value: 0,
		step:50,
		slide: function( event, ui ) {
			$( "#amount3" ).val( $( "#slider-range-2" ).slider( "option", "value") + "m - " + ui.value+"m" );
			$( "#amount4" ).val(  ui.value+"m")
			$( "#slider-range-4" ).slider( "option", "min", ui.value)
		}
	});
	$( "#amount3" ).val( $( "#slider-range-3" ).slider( "value") +"m"+
		" - " + $( "#slider-range-3" ).slider( "value")+"m" );
		
	$( "#slider-range-4" ).slider({
		range:"max",
		min: 0,
		max: 4500,
		value: 0,
		step:50,
		slide: function( event, ui ) {
			$( "#amount4" ).val( $( "#slider-range-3" ).slider( "option", "value")+ "m - " + ui.value+"m" );
							
		}
	});
	$( "#amount4" ).val( $( "#slider-range-4" ).slider( "value") +"m"+
		" - " + $( "#slider-range-4" ).slider( "value")+"m" );				
	
});


