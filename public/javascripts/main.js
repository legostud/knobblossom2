( function(window, document, $, undefined) {
    'use strict';
    var KB = ( function(KB) {

		//wait for DOM ready
		$(function(){
			//Add Flowers to the logo 
			//check if flowers will render (border-radius).
			if($('html').hasClass('borderradius') ) {
				var flowerTemplate = $('#flower-template').html();
				$('.flower').each(function(){
					$(this).html(flowerTemplate);
				});
			}
			//Shrink the logo if the browser width becomes less than 960px
			$(window).resize(function() {
				var domWidth = $(document).width();
				if( domWidth <= 960 ) {
					//reduce the font-size to 10% of the browser width
					$('#logo-wrapper').css('font-size', domWidth/12 + 'px')
				}
			});
		});
			
		return KB;
	
	}(window.KB || {}));
	
	//update the Global STAPLES name space with new functionality and variables
	window.KB = KB;
	
	// Run as soon as this file loads
	//KB.Gallery.init();

}(window, document, jQuery));
