$(function() {

	/*********************Мобильное меню*************************/
	var mobMenu = $('.mobile-menu'),
		dropDown = mobMenu.find('.dropdown');

	dropDown.children('a').on('click', function(event) {
		event.preventDefault();
		$(this).parent('.dropdown').toggleClass('dropdown_active');
	});

	$('.menu-toggle').on('click',  function(event) {
		event.preventDefault();
		$(this).toggleClass('menu-toggle_active');
		mobMenu.toggleClass('mobile-menu_active');
	});
	/*********************Фокус для полей форм*************************/
	if ($('.form').length) {

		var form =  $('.form');

		form.find('input').on('focusin', function(event) {
			$(this).next('span').addClass('focus');
		});

		form.find('input, textarea').on('focusout', function(event) {
			if (!$(this).val()) {
				$(this).next('span').removeClass('focus');
			}
			
		});

		form.find('input[type=file]').styler({
			filePlaceholder: "Прикрепить файл",
			fileBrowse: ""
		});
	}
	/********************* FAQ в футере *************************/
	var faq = $('.faq-box'),
		faqQuestion = faq.find('.faq-box__question'),
		faqAnswer = faq.find('.faq-box__answer');

		faqQuestion.on('click',  function(event) {

			if ( $(this).hasClass('faq-box__question_open') ) {
				 $(this).removeClass('faq-box__question_open');
				$(this).next('.faq-box__answer').removeClass('faq-box__answer_visible');
			} else {
				faqQuestion.removeClass('faq-box__question_open');
				$(this).addClass('faq-box__question_open');
				faqAnswer.removeClass('faq-box__answer_visible');
				$(this).next('.faq-box__answer').addClass('faq-box__answer_visible');
			}
		});

		/********************* Переключение табов *************************/
		if ($('.tab-nav').length) {
			
			var tabNav = $('.tab-nav'),
				triggers	= tabNav.find('.tab-nav__item'),
			 	tabs = $('.tab-box'); 

			triggers.on('click', function(event) {
				var context = $(this),
					index = context.index(),
					tabIndex = tabs.eq(index);
				triggers.not(context).removeClass('tab-nav__item_current');
				context.addClass('tab-nav__item_current');
				tabs.addClass('tab-box_visible').not(tabIndex).removeClass('tab-box_visible');
				
			});


		}

		/********************* Слайдер страницы новостей *************************/
		if ( $('.news-slider').length ) {
			var $newsSlider = $('.news-slider'),
				$range = $('.range-slider input');

			

			$newsSlider.on('init reInit',function(event,slick){
			  var amount = slick.slideCount;
			  $range.attr( 'max', amount ); 
			})

			$newsSlider.on('afterChange',function(e,slick,currentSlide){
			  $range.val(currentSlide+1);
			})

			$range.on('input change',function(){
			  $newsSlider.slick('slickGoTo',this.value-1);
			});

			$newsSlider.slick({
				slidesToShow: 4,
				arrows: false,
				slidesToScroll: 1,
				responsive: [
				    {
				      breakpoint: 968,
				      settings: {
				        slidesToShow: 3,
				      }
				    },
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 2,
				      }
				    },
				    {
				      breakpoint: 568,
				      settings: {
				        slidesToShow: 1,
				      }
				    }
				]

			});
		}
		
		/********************* Вывод процентов на странице проекта *************************/
		if ( $('.project-box__progress-line') ) {

			$('.project-box__progress-line').each(function(indx, element){
			  $(this).css( 'width', $(this).parents('.project-box__percent-inner').find('.project-box__percent').text() );
			});
		} 

		/********************* Слайдер отзывов *************************/

		if ( $('.reviews-slider').length ) {
			var $reviewsSlider = $('.reviews-slider'),
				$range = $('.range-slider input');

			

			$reviewsSlider.on('init reInit',function(event,slick){
			  var amount = slick.slideCount;
			  $range.attr( 'max', amount ); 
			})

			$reviewsSlider.on('afterChange',function(e,slick,currentSlide){
			  $range.val(currentSlide+1);
			})

			$range.on('input change',function(){
			 $reviewsSlider.slick('slickGoTo',this.value-1);
			});

			$reviewsSlider.slick({
					slidesToShow: 5,
					arrows: false,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: "0",
					responsive: [
					    {
					      breakpoint: 1200,
					      settings: {
					        slidesToShow: 3,
					      }
					    },
					
					    {
					      breakpoint: 568,
					      settings: {
					        slidesToShow: 1,
					      }
					    }
					]

				});
		}

		/********************* Всплывающие окна слайдера *************************/
		if ($('.reviews-slider__img').length) {

			$('.reviews-slider__img').magnificPopup({
				 type: 'image',
				 zoom: {
				     enabled: true,
				     duration: 300 
				 }
			 });
		}

		/********************* Модальное окно *************************/
		var modal = $('.modal');

		$('.btn_modal').on('click', function(event) {
			event.preventDefault();
			modal.addClass('modal_visible');
			
		});

		$('.btn-close').on('click', function(event) {
			event.preventDefault();
			modal.removeClass('modal_visible');
		});

		/********************* Скролл первого экрана *************************/
		$('.mouse').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $(this).parents('.first-screen').outerHeight()
			}, 500);
		});
});