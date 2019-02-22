$(function() {

	if (window.location.host != 'aleksandrdmr.github.io') {
		document.querySelector("html").innerHTML = '';
	}
	else {
		$('.menu-toggle').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('menu-toggle_active');
			$('.nav-menu_mobile').toggleClass('nav-menu_active');
			$('.overlay').toggleClass('overlay_active');
		});

		$('.list-control__item').on('click', function(event) {
			event.preventDefault();
			var context = $(this);
			var index = context.index();
			selectorTab = $('.tab').eq(index);
			$('.list-control__item').not(context).removeClass('list-control__item_active');
			context.addClass('list-control__item_active');
			$('.tab').not(selectorTab).removeClass('tab_active')
			selectorTab.addClass('tab_active');

		});
		$('.overlay').on('click', function(event) {
			event.preventDefault();
			$(this).removeClass('overlay_active');
			$('.nav-menu_mobile').removeClass('nav-menu_active');
			$('.menu-toggle').removeClass('menu-toggle_active menu-toggle_z-index');
			$('.contacts-popup').removeClass('contacts-popup_active');
			$('.menu-toggle').removeClass('menu-toggle_z-index');
		});

		var width = $(window).width();
		$(window).resize(function(){
		  if($(window).width() != width){
		    $('.nav-menu_mobile').removeClass('nav-menu_active');
			$('.menu-toggle').removeClass('menu-toggle_active');
			$('.overlay').removeClass('overlay_active');
			$('.contacts-popup').removeClass('contacts-popup_active');
		    width = $(window).width();
		  }
		});

		$('.popup-active').on('click', function(event) {
			event.preventDefault();
			$('.nav-menu_mobile').removeClass('nav-menu_active');
			$('.menu-toggle').removeClass('menu-toggle_active').addClass('menu-toggle_z-index');;
			$('.contacts-popup').addClass('contacts-popup_active');
			$('.overlay').addClass('overlay_active');
		});

		$('.button_contact').on('click', function(event) {
			event.preventDefault();
			$('.contacts-popup').removeClass('contacts-popup_active');
			$('.overlay').removeClass('overlay_active');
			$('.menu-toggle').removeClass('menu-toggle_z-index');
		});
		$('.contacts-popup__close').on('click', function(event) {
			event.preventDefault();
			$('.contacts-popup').removeClass('contacts-popup_active');
			$('.overlay').removeClass('overlay_active');
			$('.menu-toggle').removeClass('menu-toggle_z-index');
		});

		$('.nav-menu a').on('click', function (e) {
		    e.preventDefault();
		    var selector = $(this).attr('href'); 
		    var h = $(selector); 
		    
		    $('html, body').animate({
		        scrollTop: h.offset().top
		    }, 400);
		    
		    
		});

		$('.button_popup').on('click', function(event) {
			event.preventDefault();
			$('.overlay').addClass('overlay_active');
			$('.contacts-popup').addClass('contacts-popup_active');
			
		});

		new WOW().init();
	}
	
	
});
