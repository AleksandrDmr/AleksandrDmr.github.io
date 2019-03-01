$(function() {


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

		$('a[href="#functional"]').on('click', function(event) {
			event.preventDefault();
			btn = $('#functional');
			tabIndex = $('.tab:eq(0)');
			$('.list-control__item').not(btn).removeClass('list-control__item_active');
			btn.addClass('list-control__item_active');
			$('.tab').not(tabIndex).removeClass('tab_active');
			tabIndex.addClass('tab_active');

		});

		$('a[href="#benefit"]').on('click', function(event) {
			event.preventDefault();
			btn = $('#benefit');
			tabIndex = $('.tab:eq(1)');
			$('.list-control__item').not(btn).removeClass('list-control__item_active');
			btn.addClass('list-control__item_active');
			$('.tab').not(tabIndex).removeClass('tab_active');
			tabIndex.addClass('tab_active');

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

		$('.btn-popup-contacts').on('click', function(event) {
			event.preventDefault();
			$('.nav-menu_mobile').removeClass('nav-menu_active');
			$('.menu-toggle').removeClass('menu-toggle_active').addClass('menu-toggle_z-index');;
			$('.contacts-popup_info').addClass('contacts-popup_active');
			$('.overlay').addClass('overlay_active');
		});

		$('.btn-popup-form').on('click', function(event) {
			event.preventDefault();
			$('.nav-menu_mobile').removeClass('nav-menu_active');
			$('.menu-toggle').removeClass('menu-toggle_active').addClass('menu-toggle_z-index');;
			$('.contacts-popup_form').addClass('contacts-popup_active');
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

		$('.nav-menu li a').on('click', function (e) {
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
	
	
});
