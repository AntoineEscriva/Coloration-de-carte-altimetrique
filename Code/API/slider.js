$( function() {
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 1500,
		step:50,
		values: [ 0, 100 ],
		slide: function( event, ui ) {
			$( "#amount" ).val(  ui.values[ 0 ]+"m - " + ui.values[ 1 ]+"m" );
			$( "#amount1" ).val(  ui.values[ 1 ]+"m")
			$( "#slider-range-1" ).slider( "option", "min", ui.values[ 1 ])
		}
	});

	$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 )+"m" +
		" - " + $( "#slider-range" ).slider( "values", 1 ) +"m");
			
	$( "#slider-range-1" ).slider({
		range: true,
		min: 0,
		max: 1500,
		step:50,
		values: [ 0, 100 ],
		slide: function( event, ui ) {
			$( "#amount1" ).val( + ui.values[ 0 ] +"m - " + ui.values[ 1 ]+"m");
			$( "#amount2" ).val(  ui.values[ 1 ]+"m")
			$( "#slider-range-2" ).slider( "option", "min", ui.values[ 1 ])
			$( "#slider-range" ).slider( "option", "max", ui.values[ 0 ])
		}
	});
	$( "#amount1" ).val( $( "#slider-range-1" ).slider( "values", 0 )+ "m" +
		" - " + $( "#slider-range-1" ).slider( "values", 1 ) +"m");
			
	$( "#slider-range-2" ).slider({
		range: true,
		min: 0,
		max: 1500,
		step:50,
		values: [ 0, 100 ],
		slide: function( event, ui ) {
			$( "#amount2" ).val( "$" + ui.values[ 0 ] + "m - " + ui.values[ 1 ]+"m");
			$( "#amount3" ).val(  ui.values[ 1 ]+"m")
			$( "#slider-range-3" ).slider( "option", "min", ui.values[ 1 ])
			$( "#slider-range-1" ).slider( "option", "max", ui.values[ 0 ])
		}
	});
	$( "#amount2" ).val( $( "#slider-range-2" ).slider( "values", 0 ) + "m" +
		" - " + $( "#slider-range-2" ).slider( "values", 1 ) +"m" );
		
	$( "#slider-range-3" ).slider({
		range: true,
		min: 0,
		max: 1500,
		step:50,
		values: [ 0, 100 ],
		slide: function( event, ui ) {
			$( "#amount3" ).val( "$" + ui.values[ 0 ] + "m - " + ui.values[ 1 ]+"m" );
			$( "#amount4" ).val(  ui.values[ 1 ]+"m")
			$( "#slider-range-4" ).slider( "option", "min", ui.values[ 1 ])
			$( "#slider-range-2" ).slider( "option", "max", ui.values[ 0 ])
		}
	});
	$( "#amount3" ).val( $( "#slider-range" ).slider( "values", 0 ) +"m"+
		" - " + $( "#slider-range-3" ).slider( "values", 1 )+"m" );
		
	$( "#slider-range-4" ).slider({
		range: true,
		min: 0,
		max: 1500,
		step:50,
		values: [ 0, 100 ],
		slide: function( event, ui ) {
			$( "#amount4" ).val( "$" + ui.values[ 0 ] + "m - " + ui.values[ 1 ]+"m" );
			$( "#slider-range-3" ).slider( "option", "max", ui.values[ 0 ])				
		}
	});
	$( "#amount4" ).val( $( "#slider-range-4" ).slider( "values", 0 ) +"m"+
		" - " + $( "#slider-range-4" ).slider( "values", 1 )+"m" );				
	
});


