$(function() {
	$('.slider-wrap').slick({
		 dots: true,
		 appendDots: $('.wrapper-dots'),
		 /*autoplay: true,*/
		 nextArrow: '<button class="slider-btn slider-btn_next" type="button"><i class="fas fa-angle-right"></i></button>',
		 prevArrow: '<button class="slider-btn slider-btn_prev" type="button"><i class="fas fa-angle-left"></i></button>'
	});
/*Mobile menu*/
	$('.navbar-toggle').on('click', function() {
		$('.nav_mobile').toggleClass('nav_mobile_active');
		$('.nav_mobile .drop-menu-container').slideUp();
		$('.overlay').toggleClass('overlay_visible');
	});
	$('.nav_mobile .drop-down').on('click', function() {
		$('.nav_mobile  .drop-menu-container').stop().slideToggle();
	});

	var width = $(window).width();
	$(window).resize(function(){
	  if($(window).width() != width){
	    $('.nav_mobile').removeClass('nav_mobile_active');
		if($('.sidebar').length) {
			$('.sidebar').removeClass('sidebar_active');
		}
		$('.overlay').removeClass('overlay_visible');
	    width = $(window).width();
	  }
	});

/*Category tabs*/
	$('.tabs-links a').on('click', function(event) {
		event.preventDefault();
		$('.tabs-links a').removeClass('active_tab');
		$(this).addClass('active_tab');
		var idTab = $(this).attr('href');
		$('.tab-container').not(idTab).stop().hide('slow');
		$(idTab).show('slow');
		
	});

/*Toggle aside list*/
	$('.sidebar-block__list').on('click', function(event) {
		$(this).toggleClass('sidebar-block__list_active');
		$(this).children('ul').slideToggle();
		
	});

/*Toggle color*/
	$('.color-list li').on('click',  function(event) {
		event.preventDefault();
		$(this).children('a').toggleClass('current');
	});	

	$('.btn-sidebar_reset').on('click', function(event) {
		event.preventDefault();
		$('.color-list li a').removeClass('current');
	});

	/* Open sidebar*/

	$('.btn-sidebar_open').on('click',  function(event) {
		event.preventDefault();
		$('.sidebar').toggleClass('sidebar_active');
		$('.overlay').toggleClass('overlay_visible');
	});

	/*Overlay*/
	$('.overlay').on('click',  function(event) {
		event.preventDefault();
		if($('.sidebar').length) {
			$('.sidebar').removeClass('sidebar_active');
		}
		$('.overlay').removeClass('overlay_visible');
		$('.nav_mobile').removeClass('nav_mobile_active');
	});
	/*Product sliders*/

	$('.product-pic').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-nav'
	});

	$('.product-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		verticalSwiping: true,
		asNavFor: '.product-pic',
		focusOnSelect: true,
		vertical: true,
		centerPadding: '0',
		useTransform: false,
		centerMode: true

	});



/*Options select*/
	$('.custom-select').styler();


/*Product-page tabs*/

	$('.tabs-list a').on('click', function(event) {
		event.preventDefault();
		$('.tabs-list li').removeClass('tabs-list__active-tab');
		$(this).parent('li').addClass('tabs-list__active-tab');	
		var idTab = $(this).attr('href');
		$('.product-tab').not(idTab).stop().hide('slow');
		$(idTab).show('slow');

		
	});

});	
