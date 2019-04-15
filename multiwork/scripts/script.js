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


	// quiz steps
	function Quiz( elem ) {

		var el = $(elem),
			$item = $(this).find('.quiz-form__item'),
			$otherLabels = el.find('.quiz-form__other label'),
			$quizItems = el.find('.quiz-form__item'),
			i = 0,
			$quizStep = el.find('.quiz-step'),
			$quizPrev = el.find('.quiz-prev'),
			$progressField = el.find('.quiz__progress-field .quiz__progress-line'),
			$btnQuiz = el.find('.btn_quiz'),
			$quizSend = el.find('.btn__quiz-sending'),
			$radio = el.find('input[type="radio"]');



		this.activeItem = function() {
			if( !$(this).hasClass('quiz-form__other') ) {
				$quizItems.removeClass('quiz-form__item_active');
				$(this).addClass('quiz-form__item_active');
				$otherLabels.removeClass('active');	

				
			}
		};

		this.otherActive = function() {
			$quizItems.removeClass('quiz-form__item_active');
			$(this).parents('.quiz-form__other').addClass('quiz-form__item_active');
			$otherLabels.removeClass('active');
			$(this).addClass('active');
			var text = $(this).text(),
				$parent = $(this).parents('.quiz-form__other');
			$parent.find('span').text(text);
		};


		this.nexStep = function(event) {
			event.preventDefault();
			if ( i >= 0 && i <= $quizStep.length - 1 && $quizStep.eq(i).find()) {
				
				if ( $quizStep.eq(i).find('input[type="radio"]').length  && !$quizStep.eq(i).find('input[type="radio"]').is(':checked') && i != 3 )  {
						return false;
				} 

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

		this.quizSend = function(event) {
			event.preventDefault();
			i = 0;
			$quizStep.removeClass('quiz-step_current');
			$quizStep.eq(i).addClass('quiz-step_current');
			$item.removeClass('quiz-form__item_active');
			$radio.each(function(index, el) {
				$(el).prop('checked', false);
			});
			$('.quiz__text').removeClass('quiz__text_disable');
			$('.quiz-form__btn-wrap').removeClass('quiz-form__btn-wrap_disable');
			$progressField.removeClass('active-field');
			$progressField.eq(i).addClass('active-field');
			
			if(el.hasClass('quiz_mob')){
				el.removeClass('quiz_mob_active');
			}
			$('.overlay').addClass('overlay_active')
			$('.modal_thank').addClass('modal_active')
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
	$quizSend.click(this.quizSend);
}

var quizMob = new Quiz( '.quiz_mob' );
var quizPc = new Quiz( '.quiz_pc' );


	
	// Advantages slider

	$('.advan-slider').slick({
		slidesToShow: 5,
		 arrows: false,
		centerPadding: '0',
		 responsive: [
	    {
	      breakpoint: 968,
	      settings: {
	      	autoPlay: true,
		 	autoplaySpeed: 3000,
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	         centerMode: true
	       
	      }
	    },
	    {
	      breakpoint: 568,
	      settings: { 
	      	centerPadding: '40px',
	        slidesToShow: 1,
	        centerMode: true
	       
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
		      breakpoint: 768,
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

	// chat inamation
	var $chat = $('.manager-chat__message-wrap'),
		$message = $chat.find('.manager-chat__message')
		i = 0,
		h = 0,
		hMessage = 0;

		setInterval(function(){
			if (i <= $message.length - 1) {

				$message.eq(i).addClass('manager-chat__message_visible');

				h += $message.eq(i).outerHeight(true);

				if(h > $chat.innerHeight()) {
					hMessage += $message.eq(i).outerHeight(true);
					$chat.animate({

			   		 scrollTop: hMessage

		  			}, 400);
				}
				i++;
			} else {
				h = 0;
				hMessage = 0;
				i = 0;
				$chat.animate({
					 scrollTop: 0
				}, 400);
				$message.removeClass('manager-chat__message_visible');
			}


		},3000);
		
		$chat.bind('mousewheel DOMMouseScroll', function (e) { return false; });



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


	$('.rewiews-tab-wrap').each(function (idx, item) {
	 var $context =  $(this);

			$context.find('.reviews-tab').slick({
				slidesToShow: 4,
				dots: true,
				infinite: false,
				nextArrow: $context.find('.tab-dots-wrapper .tab-dots .nav-tab-btn_next'),
				prevArrow: $context.find('.tab-dots-wrapper .tab-dots .nav-tab-btn_prev'),
				centerPadding: '40px',
				appendDots: $context.find('.tab-dots-wrapper .tab-dots'),

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


	});



	// modal forms
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





	function OpenModal (btn, modal) {

		var $btn = $(btn);

		if( !$btn.hasClass('btn_quiz-popup') ) {
			$(btn).on('click', function(event) {
				event.preventDefault();
				$(modal).addClass('modal_active');
				$('.overlay').addClass('overlay_active');


			});

		} else {

			$btn.on('click', function(event) {
				event.preventDefault();
				$(modal).addClass('quiz_mob_active');
				
			});
		}

		

	}

	var  modalAuthorsActive = new OpenModal ('.btn__authors', '.modal_author'),
		 modalAuthorsPrice = new OpenModal ('.best-authors__id-link a', '.modal_price'),
		 modalDeadlines = new OpenModal ('.btn_deadline', '.modal_deadlines'),
		 modalManager = new OpenModal ('.info-phone__modal', '.modal_form-manager'),
		 modalFormCalc = new OpenModal ('.btn_order-work', '.modal_form-calc'),
		 modalQuiz = new OpenModal ('.btn_quiz-popup', '.quiz_mob');




});



