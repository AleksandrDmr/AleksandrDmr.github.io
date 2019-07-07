$(function() {
	
/**************************************************** форма поиска ****************************************************/
	var searchInput = $('.search input');
	if (  $("body").innerWidth() > 500 ) {
		
		$('.search button').on('click', function(event) {
			if ( !searchInput.hasClass('input-active') ) {
				event.preventDefault();
				searchInput.addClass('input-active').focus();
			} 
		});

		searchInput.focusout(function(event) {
			if ( $(this).val() == "" ) {
				searchInput.removeClass('input-active');
			}
		});

	}

/**************************************************** Мобильное меню ****************************************************/
	var mobMenu = $('.nav-mob'),
		menuItem = $('.nav-mob').find('.dropdown');

		menuItem.on('click', function(event) {
			event.preventDefault();
			$(this).find('ul').toggleClass('slide-down');
		});		

	$('.menu-toggle').on('click', function(event) {
		event.preventDefault();
		mobMenu.toggleClass('nav-mob_visible');
	});

	$(window).resize(function(event) {
		mobMenu.removeClass('nav-mob_visible');
	});
	
/**************************************************** Слайдер услуг на главной ****************************************************/
	$('.p-carusel').slick({
		slidesToShow: 3,
		nextArrow: '<button class="arrow arrow_next"><i class="fas fa-angle-right"></i></button>',
		prevArrow: '<button class="arrow arrow_prev"><i class="fas fa-angle-left"></i></button>',
		appendArrows: $('.js-recommended-btn'),
		/*autoplay: true,*/
		responsive: [
	    	{
		       breakpoint: 1200,
		       settings: {
		     	   slidesToShow: 2		        
	       		}
	    	},
	    	{
	       		breakpoint: 700,
	       		settings: {
	     	    	slidesToShow: 1		        
       		 	}
	     	},
	   ]
	});

	/**************************************************** Слайдер постов ****************************************************/
	$('.blog-carusel').slick({
		slidesToShow: 2,
		nextArrow: '<button class="arrow arrow_next"><i class="fas fa-angle-right"></i></button>',
		prevArrow: '<button class="arrow arrow_prev"><i class="fas fa-angle-left"></i></button>',
		appendArrows: $('.js-blog-btn'),
		/*autoplay: true,*/
		responsive: [
	    	{
	       		breakpoint: 700,
	       		settings: {
	     	    	slidesToShow: 1		        
       		 	}
	     	},
	   ]
	});

	/**************************************************** Табы на главной ****************************************************/
	if ( $('.tabs-nav__item').length ) {

		var triggers =  $('.tabs-nav__item'),
		 	tabs = $('.js-tab'); 

		triggers.on('click', function(event) {
			var context = $(this),
				index = context.index(),
				tabIndex = tabs.eq(index);
			triggers.not(context).removeClass('tabs-nav__item_current');
			context.addClass('tabs-nav__item_current');
			tabs.removeClass('js-tab_visible');
			tabIndex.addClass('js-tab_visible');

			
		});

	}
	
	/**************************************************** Прокрутка страницы вверх ****************************************************/		
	$('.arrow-up').on('click',  function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/**************************************************** Кастомизация селектов ****************************************************/	
	if ( $('select').length ) {
		$('select').styler({});
	}

	/**************************************************** Кастомные чекбоксы ****************************************************/	
	if ( $('.custom-checkbox').length ) {
		$('.custom-checkbox').change( function(event) {
			$(this).toggleClass('custom-checkbox_active');
		});		

	}

	/**************************************************** Аккордион ****************************************************/	
	if ( $('.accordion').length ) {
		$('.accordion__title').on('click', function(event) {
			$(this).toggleClass('accordion__title_open');
			$(this).parent('.accordion').toggleClass('accordion_open');
		});	

	}

	/**************************************************** Сайдбар ****************************************************/	
	if ( $('.sidebar-toggle').length ) {
		$('.sidebar-toggle').on('click', function(event) {
			$('.sidebar').toggleClass('sidebar_open');
			$(this).toggleClass('sidebar-toggle_open');
		});	

	}

    /**************************************************** Слайдер статьи ****************************************************/
	if ( $('.article-slider').length ) { 
		$('.article-slider').slick({
			slidesToShow: 1,
			 fade: true,
			nextArrow: '<button class="arrow article-slider__arrow_next"><i class="fas fa-angle-right"></i></button>',
			prevArrow: '<button class="arrow article-slider__arrow_prev"><i class="fas fa-angle-left"></i></button>',
			/*autoplay: true,*/
			responsive: [
		    	{
		       		breakpoint: 700,
		       		settings: {
		     	    	slidesToShow: 1		        
	       		 	}
		     	},
		   ]
		});
	}
	/**************************************************** Слайдер сайдбара ****************************************************/
	if ( $('.aside-slider').length ) { 
		$('.aside-slider__wrap').slick({
			slidesToShow: 3,
			vertical: true,
			nextArrow: '<button class="arrow aside-slider__arrow_next"><i class="fas fa-angle-down"></i></button>',
			prevArrow: '<button class="arrow aside-slider__arrow_prev"><i class="fas fa-angle-up"></i></button>',
			appendArrows: $('.aside-slider__title'),
			/*autoplay: true,*/
			responsive: [
		    	{
		       		breakpoint: 700,
		       		settings: {
		     	    	slidesToShow: 1		        
	       		 	}
		     	},
		   ]
		});
	}
	/**************************************************** Попап галереи ****************************************************/
	if ( $('.gallery__item').length ) {
		$('.gallery__item').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				closeBtnInside: false,
				fixedContentPos: true,
				image: {
					verticalFit: true
				},
				zoom: {
					enabled: true,
					duration: 300 
				}
			});
	}
});

