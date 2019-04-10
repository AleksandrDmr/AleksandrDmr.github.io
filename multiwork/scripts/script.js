$(function() {

	// mobile menu toggle
	$('.nav-open').click(function(event) {
		$('.nav-mobile').addClass('nav-mobile_open');
	});

	$('.nav-close').click(function(event) {
		$('.nav-mobile').removeClass('nav-mobile_open');
	});

	// dynamic text 

	var typed = new Typed('#dynamic', {
	    strings: ["диплом?", "курсовую?", "контрольную?", "реферат?"],
  		typeSpeed: 120,
  		backSpeed: 80,
  		backDelay: 2000, 
  		loop: true

	 });


	// quiz


	function Quiz( elem ) {

		var el = $(elem),
			$item = $(this).find('.quiz-form__item'),
			$otherLabels = el.find('.quiz-form__other label'),
			$otherLabels = el.find('.quiz-form__other label'),
			$quizItems = el.find('.quiz-form__item'),
			i = 0,
			$quizStep = el.find('.quiz-step'),
			$quizPrev = el.find('.quiz-prev'),
			$progressField = el.find('.quiz__progress-field .quiz__progress-line'),
			$btnQuiz = el.find('.btn_quiz');



		this.activeItem = function() {
			if( !$(this).hasClass('quiz-form__other') ) {
				$quizItems.removeClass('quiz-form__item_active');
				$(this).addClass('quiz-form__item_active');
				$(this).find('input[type="radio"]').attr('checked', 'true');
				$otherLabels.removeClass('active');	
			}
		};

		this.otherActive = function() {
			$quizItems.removeClass('quiz-form__item_active');
			$(this).parents('.quiz-form__other').addClass('quiz-form__item_active');
			$otherLabels.removeClass('active');
			$(this).addClass('active');
		};


		this.nexStep = function(event) {
			event.preventDefault();
			if ( i >= 0 && i <= $quizStep.length - 1) {
				i++;
				$quizStep.removeClass('quiz-step_current')
				$quizStep.eq(i).addClass('quiz-step_current');
				$progressField.eq(i).addClass('active-field');
				if(el.hasClass('quiz_mob')){
					el.find('.quiz__progress-text span').text(i + 1);
				}

				if (i == 9) {
					if( $('.quiz__text').length ) {

						$('.quiz__text').addClass('quiz__text_disable');
						$('.quiz-form__btn-wrap').addClass('quiz-form__btn-wrap_disable');

						setTimeout(function() {
							i++;
							$quizStep.removeClass('quiz-step_current');
							$quizStep.eq(i).addClass('quiz-step_current');
						}, 1000);
					}
					
					
				}
			}

			if(i == 0) {
				$quizPrev.removeClass('quiz-prev_active');
				
			} else {
				$quizPrev.addClass('quiz-prev_active');
			}
		}

		this.prevStep = function(event) {
			event.preventDefault();
			if ( i > 0 && i < $quizStep.length) {
				$progressField.eq(i).removeClass('active-field');
				i--;
				$quizStep.removeClass('quiz-step_current')
				$quizStep.eq(i).addClass('quiz-step_current');
				if(el.hasClass('quiz_mob')){
					el.find('.quiz__progress-text span').text(i + 1);
				}

				
			}
		} 



		$(this).on('keyup keypress', function(e) {
		  var keyCode = e.keyCode || e.which;
		  if (keyCode === 13) { 
		    e.preventDefault();
		    return false;
		 }
		});


		$quizItems.click( this.activeItem );
		$otherLabels.click( this.otherActive );
		$btnQuiz.click(this.nexStep);
		$quizPrev.click(this.prevStep);
	}

	var quizMob = new Quiz( '.quiz_mob' );
	var quizPc = new Quiz( '.quiz_pc' );

		/*$('.quiz form').on('keyup keypress', function(e) {
		  var keyCode = e.keyCode || e.which;
		  if (keyCode === 13) { 
		    e.preventDefault();
		    return false;
		 }
		});*/


	/*var $otherLabels = $('.quiz-form__other label'),
		$quizItems = $('.quiz-form__item');


	$quizItems.click(function(event) {
		if( !$(this).hasClass('quiz-form__other') ) {
			$quizItems.removeClass('quiz-form__item_active');
			$(this).addClass('quiz-form__item_active');
			$(this).find('input[type="radio"]').attr('checked', 'true');
			$otherLabels.removeClass('active');	
		}
			
	});*/

/*	$otherLabels.click(function(event) {
		$quizItems.removeClass('quiz-form__item_active');
		$(this).parents('.quiz-form__other').addClass('quiz-form__item_active');
		$otherLabels.removeClass('active');
		$(this).addClass('active')
	});*/

/*
	var i = 0,
		$quizStep = $('.quiz-step'),
		$quizPrev = $('.quiz-prev'),
		$progressField = $('.quiz__progress-field span');

	$('.btn_quiz').click(function(event) {
		event.preventDefault();
		if ( i >= 0 && i <= $quizStep.length - 1) {
			i++;
			$quizStep.removeClass('quiz-step_current')
			$quizStep.eq(i).addClass('quiz-step_current');
			$progressField.eq(i).addClass('active-field');

			if (i == 9) {
				$('.quiz__text').addClass('quiz__text_disable');
				$('.quiz-form__btn-wrap').addClass('quiz-form__btn-wrap_disable');

				setTimeout(function() {
					i++;
					$quizStep.removeClass('quiz-step_current');
					$quizStep.eq(i).addClass('quiz-step_current');
				}, 1000);
			}
		}

		if(i == 0) {
			$quizPrev.removeClass('quiz-prev_active');
			
		} else {
			$quizPrev.addClass('quiz-prev_active');
		}

	});
*/
	/*$quizPrev.click(function(event) {
		event.preventDefault();
		if ( i > 0 && i < $quizStep.length) {
			$progressField.eq(i).removeClass('active-field');
			i--;
			$quizStep.removeClass('quiz-step_current')
			$quizStep.eq(i).addClass('quiz-step_current');

			
		}
		
	});
*/
/*	$.datepicker.regional['ru'] = {
	            closeText: 'Закрыть',
	            prevText: '&#x3c;Пред',
	            nextText: 'След&#x3e;',
	            currentText: 'Сегодня',
	            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
	            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	            monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
	            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
	            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
	            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	            weekHeader: 'Нед',
	            dateFormat: 'dd.mm.yy',
	            firstDay: 1,
	            isRTL: false,
	            showMonthAfterYear: false,
	            yearSuffix: ''
	        };
	$.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

	

	$(".quiz-form__date input").datepicker({
      showOn: "button",
      buttonImage: "../img/calendar.svg",
      buttonImageOnly: true,
	  showAnim: "slideDown"   
	});*/

/*	$(".quiz-form__date input").datepicker("setDate", '+7');*/






/*$( ".quiz-form__select select" ).selectmenu({
	position: {
		at:"left-15 bottom+2"
	},
});*/
	


	// Advantages slider

	$('.advan-slider').slick({
		slidesToShow: 5,
		 arrows: false,
		 centerPadding: '40px',
		 responsive: [
	    {
	      breakpoint: 968,
	      settings: {
	      	autoPlay: true,
		 	autoplaySpeed: 3000,
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	       
	      }
	    },
	    {
	      breakpoint: 568,
	      settings: {
	        slidesToShow: 1,
	        centerMode: true,
	      }
	    },


	  ]
	});



	//Best authors navigation slider
if ($('.tabs-best-authors').length) {

	$('.tabs-nav-best-authors').slick({
		slidesToShow: 5,
		 nextArrow: '<button class="nav-tab-btn nav-tab-btn__next"</button>',
		 prevArrow: '<button class="nav-tab-btn nav-tab-btn__prev"></button>',
		 asNavFor: '.best-authors__slider',
		 focusOnSelect: true,
		 responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        infinite: true,
		       
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
		    },

	  ]
	});

	$('.best-authors').slick({
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		       
		      }
		    },
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 1,
		      }
		    },

	  ]
	}); 

	$('.best-authors__slider').slick({
		slidesToShow: 1,
		arrows: false,
		swipe: false,
		fade: true
	
	}); 




	}

	//custom scroll
	var Scrollbar = window.Scrollbar,
		scrollBlock = document.querySelectorAll('.best-authors__reviews');

		for (var k = 0; k<= scrollBlock.length -1 ; k++) {
			 Scrollbar.init(scrollBlock[k], {
			 	alwaysShowTracks:true
			 });
		}

	 
	 $('select').styler();
	 $('form input[type="checkbox"]').styler();

	 // Price hover
	 var $priceNav = $('.price-nav li'),
	 	 $priceList = $('.price-block__list'),
	 	 $priceListItem = $priceList.find('li');

	$priceNav.hover(function() {
		var num = $(this).index();
		$(this).addClass('hover');
		$priceList.each(function(index, el) {
			$(this).find('li').eq(num).css('background-color', '#f2f7f7');
		});

	}, function() {
		$priceNav.removeClass('hover');
		$priceList.find('li').css('background-color', 'transparent');

	});



	$priceListItem.hover(function() {
		var num = $(this).index();
		$priceNav.eq(num).addClass('hover');
		$priceList.each(function(index, el) {
			$(this).find('li').eq(num).css('background-color', '#f2f7f7');
		});

	}, function() {
		$priceNav.removeClass('hover');
		$priceList.find('li').css('background-color', 'transparent');
	});



	$('.price-slider').slick({
		slidesToShow: 5,
		arrows: false,
		infinite: false,
		centerPadding: '40px',
		responsive: [
		    {
		      breakpoint: 968,
		      settings: {
		        slidesToShow: 3,
		       
		      }
		    },
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 1,
		        infinite: true,
		        centerMode: true
		      }
		    },

	  ]
	});

	$('.tabs-nav-reviews').slick({
		slidesToShow: 10,
		 nextArrow: '<button class="nav-tab-btn nav-tab-btn__next"</button>',
		 prevArrow: '<button class="nav-tab-btn nav-tab-btn__prev"></button>',
		 asNavFor: '.reviews-tabs',
		 focusOnSelect: true,
		 responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 5,
		        infinite: true,
		       
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		       
		      }
		    },
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 1,

		       
		      }
		    },

	  ]
	});

	$('.reviews-tabs').slick({
		slidesToShow: 1,
		arrows: false,
		swipe: false,
		fade: true
	
	}); 


	$('.reviews-tab').slick({
		slidesToShow: 4,
		dots: true,
		infinite: false,
		nextArrow: '.tab-dots .nav-tab-btn_next',
		prevArrow: '.tab-dots .nav-tab-btn_prev',
		centerPadding: '40px',
		appendDots: '.tab-dots',

		responsive: [
		    {
		      breakpoint: 968,
		      settings: {
		        slidesToShow: 3,
		       
		      }
		    },
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 1,
		        infinite: true,
		        centerMode: true
		      }
		    },

	  ]
	});

	$('.btn_quiz-popup').click(function(event) {	
		event.preventDefault();

		$('.quiz_mob').css({
			'opacity': '1',
			'z-index': '1'
		});
	});



	// modals

	$('.modal-close').click(function(event) {
		$('.overlay').removeClass('overlay_active');
		$('.modal').removeClass('modal_active');
	});


	$('.modal__radio-btn input').change(function(event) {
			if( $(this).attr('id') == 'choose') {
				$('.modal__time input').removeAttr('disabled');
				$('.modal__time-radio input:first').attr('checked', 'true');

			} else {
				$('.modal__time input').attr('disabled', 'true');
				$('.modal__time-radio input').removeAttr('checked');
			}

	});




	$('input[type="file"]').styler({
		filePlaceholder: 'Прикрепить файл',
		fileBrowse: ""
	});
		
	new WOW().init();

});



