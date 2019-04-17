$(function() {


	var $navMob =  $('.header-nav_mob');

	$('.menu-toggle').on('click',  function(event) {
		event.preventDefault();
		$(this).toggleClass('menu-toggle_active');
		$navMob.toggleClass('header-nav_active');
	});

	$navMob.find('.drop-down').on('click', function(event) {
		event.preventDefault();
		$(this).find('.sub-menu').toggleClass('sub-menu_active');
	
	});

	$('select').styler();
	
	if ($('.document__img').length) {

		$('.document__img').magnificPopup({
			 type: 'image',
			 zoom: {
			     enabled: true,
			     duration: 300 
			 }
		 });
	}


	if ( $('.btn-sidebar') ) {

		$('.btn-sidebar').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('btn-sidebar_active');
			$('.sidebar').toggleClass('sidebar_active');
		});
	}

	$('.btn-close').on('click', function(event) {
		event.preventDefault();
		$('.modal-form').removeClass('modal-form_active');
		$('.overlay').removeClass('overlay_active');
		
	});
	
});


