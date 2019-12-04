/*
	Radius by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			$header.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');

				button.click(function(e) {

					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});

			});

		// Footer.
			$footer.each( function() {

				var t 		= jQuery(this),
					inner 	= t.find('.inner'),
					button 	= t.find('.info');

				button.click(function(e) {
					t.toggleClass('show');
					e.preventDefault();
				});

			});			
	});

	$(document).ready(function(){

		$(document).keydown(function (e){ 					
			if(e.keyCode == 37) // left arrow
			{
				if ($('a.nav.previous').length > 0) {
					$(".spinner").show();
					$(".body-wrap").fadeOut(100, function(){
						var target = $('a.nav.previous').attr('href');
						window.location = target;
					});					
				}										
			}
			else if(e.keyCode == 39) // right arrow
			{ 
				if ($('a.nav.next').length > 0) {
					$(".spinner").show();
					$(".body-wrap").fadeOut(100, function(){
						var target = $('a.nav.next').attr('href');
						window.location = target;
					});					
				}					
			}							
		});

		$("div.image.fit a, a.nav.previous, a.nav.next").on("click", function(e){	
			var elem = e.currentTarget;		
			var target = $(elem).attr("target");
			if (target !== "_blank") {
				$(".spinner").show();
				$(".body-wrap").fadeOut(100, function(){
					var target = $(elem).attr('href');
					window.location = target;
				});
				e.preventDefault();
			}
		});
			
		$(".body-wrap").fadeIn(100);
	
	});

})(jQuery);

