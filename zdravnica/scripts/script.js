$(document).ready(function() {

/************************************* Мобильное меню **********************************/
	$('.menu-toggle').on('click', function(event) {
		$(this).toggleClass('menu-toggle_active');
		$('.mob-menu').toggleClass('mob-menu_active');
	});





/************************************* Меняющийся фон **********************************/

	$('.main-bg').slick({
		fade: true,
		autoplay: true,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		swipe: false,
		speed: 1000,
		autoplaySpeed: 5000 
	});





	/************************************* Слайдер на главной **********************************/

	if ( $('.top-s-carusel').length ) {
		$('.top-s-carusel').slick({
			 slidesToShow: 3,
			 nextArrow: '<button class="arrow arrow_carusel arrow_next"><img src="img/angle-right.svg" alt="" /></button>',
			 prevArrow: '<button class="arrow arrow_carusel arrow_prev"><img src="img/angle-left.svg" alt="" /></button>',
			 	 responsive: [
			     {
			       breakpoint: 1200,
			       settings: {
		         	   slidesToShow: 2		        
			       }
			     },
			      {
			       breakpoint: 768,
			       settings: {
		         	   slidesToShow: 1		        
			       }
			     },
			   ]
		});
	}





	/************************************* Табы *************************************/

	if ( $('.tabs-nav') ) {
		
		var tabNav = $('.tabs-nav'),
			triggers	= tabNav.find('.tabs-nav__item'),
		 	tabs = $('.tab'); 

		triggers.on('click', function(event) {
			var context = $(this),
				index = context.index(),
				tabIndex = tabs.eq(index);
			triggers.not(context).removeClass('tabs-nav__item_current');
			context.addClass('tabs-nav__item_current');
			tabs.removeClass('tab_visible');
			tabIndex.addClass('tab_visible');

			
		});
	}





/************************************* Прокрутка вверх страницы *************************************/

	$('.arrow_up').on('click',  function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});




/************************************* Сайдбар *************************************/

	if ( $('.cat-box').length ) {
		
		$('.cat-box__title').on('click',  function(event) {
			var self = $(this);

			self.next('.cat-box__list').toggleClass('cat-box__list_open');
			self.children('i').toggleClass('open');
		});

	}



	/************************************* Демонстрация фото товара **********************************/

	if ( $('.p-about') ) {
		$('.p-about__show').slick({
			asNavFor: '.p-about__nav',
			arrows: false,
			
		});
		$('.p-about__nav').slick({
			asNavFor: '.p-about__show',
			arrows: false,
			slidesToShow: 3,
			focusOnSelect: true
		
		});
	}




/************************************* Верхний фильтр *************************************/

	if ( $('.top-f__item_ch').length ) {
		$('.top-f__item_ch').on('click', function(event) {
			$(this).toggleClass('top-f__item_check');
		});
	}

	

	if ( $('.top-f__item_tab').length ) {

		var prodTriggers =  $('.top-f__item_tab'),
			prodTabs = $('.product-tab');


		prodTriggers.on('click',  function(event) {
			
				var context = $(this),
					index = context.index(),
					tabIndex = prodTabs.eq(index);

				prodTriggers.removeClass('top-f__item_check');
				context.addClass('top-f__item_check');
				prodTabs.removeClass('is-visible');
				tabIndex.addClass('is-visible');
				$('.p-about__show').slick('refresh');
				$('.p-about__nav').slick('refresh');

		});
	}




/************************************* Сайдбар категории *************************************/

	if ( $('.sidebar') ) {
		$('.btn-cat').on('click',  function(event) {
			event.preventDefault();
			$(this).toggleClass('btn-cat_active');
			$('.sidebar').toggleClass('sidebar_visible');
		});
	}





/************************************* Слайдер страницы одной записи **********************************/
	
	if ( $('.posts-carusel').length ) {
		$('.posts-carusel').slick({
			 slidesToShow: 3,
			 nextArrow: '<button class="arrow arrow_carusel arrow_next"><img src="img/angle-right.svg" alt="" /></button>',
			 prevArrow: '<button class="arrow arrow_carusel arrow_prev"><img src="img/angle-left.svg" alt="" /></button>',
			 	 responsive: [
			     {
			       breakpoint: 1200,
			       settings: {
		         	   slidesToShow: 2		        
			       }
			     },
			      {
			       breakpoint: 768,
			       settings: {
		         	   slidesToShow: 1		        
			       }
			     },
			   ]
		});
	}





	/************************************* Кастомная обложка **********************************/

	if ( $('.cover_custom').length && $('.cover_custom').attr('style') == "") {
		$('.cover_custom').removeClass('cover_overlay');
			$('.cover__load').addClass('is-visible');
			$('.cover__btn-wrap').addClass('is-hidden');
	}





	/************************************* Навигация по категориям **********************************/

	if ( $('.p-nav-btn').length ) {

		$('.p-nav-btn').on('click',  function(event) {
			event.preventDefault();
			$(this).toggleClass('p-nav-btn_active');
			$('.products-nav').toggleClass('products-nav_visible');
		});


		var menuNav = $('.products-nav'),
			triggersNav	= menuNav.find('.products-nav__cat-item'),
		 	menuBox = menuNav.find('.products-nav__box'),
		 	btnReturn = menuNav.find('.products-nav__return'); 

		btnReturn.on('click',  function(event) {
			$(this).parents('.products-nav__box').removeClass('products-nav__box_visible');
		});

		triggersNav.mouseenter(function(event) {
			var context = $(this),
				index = context.index(),
				menuIndex = menuBox.eq(index);

			triggersNav.not(context).removeClass('current');
			context.addClass('current');
			menuBox.removeClass('products-nav__box_visible');
			menuIndex.addClass('products-nav__box_visible');
		});
		
	}




	/************************************* Карусель товаров **********************************/

	if ( $('.products-carusel').length ) {
		$('.products-carusel').slick({
			 slidesToShow: 4,
			 nextArrow: '<button class="arrow arrow_carusel arrow_next"><img src="img/angle-right.svg" alt="" /></button>',
			 prevArrow: '<button class="arrow arrow_carusel arrow_prev"><img src="img/angle-left.svg" alt="" /></button>',
			 	 responsive: [
			     {
			       breakpoint: 1200,
			       settings: {
		         	   slidesToShow: 3		        
			       }
			     },
			      {
			       breakpoint: 768,
			       settings: {
		         	   slidesToShow: 2		        
			       }
			     },
			      {
			       breakpoint: 568,
			       settings: {
		         	   slidesToShow: 1		        
			       }
			     }
			   ]
		});
	}





	/************************************* Чекбоксы фильтр товаров **********************************/
	if ( $(".filter-box__label").length ) {

		$('.filter-box__label_chb').change( function(event) {
			$(this).toggleClass('filter-box__label_checked');
		});

		$('.filter-box__label_rad').change( function(event) {
			$(this).parents('.filter-box__ch-list').find('.filter-box__label_rad').removeClass('filter-box__label_checked');
			$(this).addClass('filter-box__label_checked');
		});
			

	}




	/************************************* Кастомизация полей форм **********************************/
	
	if ( $('.sorting__select').length ) {
		$('.sorting__select').styler(); 
	}
	if ( $('.file').length ) {
		$('.file').styler({
			fileBrowse: "",
			filePlaceholder: 'Прикрепить файл'
		});
	} 




	/************************************* Переключение вида карточек товаров **********************************/

	if ( $('.t-grid__item').length ) {
		$('.t-grid__item').on('click',  function(event) {
			$('.t-grid__item').removeClass('t-grid__item_current');
			$(this).addClass('t-grid__item_current');

			if ( $(this).hasClass('t-grid__item_fluid') ) {
				$('.p-card-js').addClass('p-card_fluid');
			} else {
				$('.p-card-js').removeClass('p-card_fluid');
			}
		});
	}
		$(window).resize(function(event) {
			if (  $("body").innerWidth() < 768 ) {
				$('.p-card').removeClass('p-card_fluid');
			}
		});




	/************************************* этапы корзины **********************************/

	if ( $('.sect-basket').length ) {

		$('.order-form__send').on('click',  function(event) {
			$('.modal-thank').addClass('modal_visible');
			$('.overlay').addClass('overlay_visible');
		});

	}

	if ( $('.btn-close').length ) {
		$('.btn-close').on('click',  function(event) {
			event.preventDefault();
			$('.modal').removeClass('modal_visible');
			$('.overlay').removeClass('overlay_visible')
		});
	}

	if  ( $('.overlay').length ) {
			$('.overlay').on('click', function(event) {
				$('.modal').removeClass('modal_visible');
				$(this).removeClass('overlay_visible')
			});
	}

	if ( $('.btn-order').length ) {
		$('.btn-order').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$('.step_one').removeClass('is-visible');
			$('.step_two').addClass('is-visible');
		});
	}

	$('.order-form__prev').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.step_two').removeClass('is-visible');
		$('.step_one').addClass('is-visible');
	});




	/************************************* Модальное окно выбор города **********************************/

	if ( $('.city-select').length ) {
		$('.city-select').on('click', function(event) {
			event.preventDefault();
			$('.modal-city').addClass('modal_visible');
			$('.overlay').addClass('overlay_visible')
			
		});
	}




	/************************************* Модальное окно авторизации **********************************/

	$('.personal-box__user-accaunt').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.modal-cabinet').addClass('modal_visible');
		$('.overlay').addClass('overlay_visible');
	});

	$('.modal-cabinet__item').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var context = $(this),
			index = context.index(),
			tabIndex = $('.modal-cabinet__form').eq(index);
		$('.modal-cabinet__item').removeClass('modal-cabinet__item_current');	
		$(this).addClass('modal-cabinet__item_current');
		$('.modal-cabinet__form').removeClass('is-visible');
		tabIndex.addClass('is-visible');

	});





	/************************************* Счетчик количества товара в корзине **********************************/

	$('.count__input').bind("change keyup input click", function() {
		if ( this.value.match(/[^0-9]/g) ) {
			 this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	$('.count__control').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var count = $(this).parent('.count').find('.count__input'),
			countNum = count.val();

		if ( $(this).hasClass('count__control_minus') && countNum > 1) {
	
			countNum--;

		} else if( $(this).hasClass('count__control_plus')  && countNum < 9999) {
	
			countNum++;

		}
		count.val(countNum);

	});



	
});	