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

	var j = 0;

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
			$radio = el.find('input[type="radio"]'),
			$inputOther = el.find('.quiz-form__other');

		this.datePicker = function() {

			if ( $(this).attr('type') == 'text') {
				$(this).parents('.quiz-step').find('input[type="radio"]').prop('checked', false);
				j = 0;
							
			} else {
				$(this).parents('.quiz-step').find('input[type="text"]').val('');
				j = 1;

			}
		}


		this.otherTooltipToggle = function() {
			$(this).parent('.quiz-form__other').find('.quiz-form__tooltip').toggleClass('quiz-form__tooltip_active');
			$(this).toggleClass('rotate');
		}

		this.otherChange = function() {
				$(this).parents('.quiz-form__tooltip').removeClass('quiz-form__tooltip_active');
				$inputOther.find('.rotate').removeClass('rotate');
				$btnQuiz.removeClass('btn_quiz_tooltip');

		}

		this.activeItem = function() {
			if( !$(this).hasClass('quiz-form__other') ) {
				$btnQuiz.removeClass('btn_quiz_tooltip');
				$quizItems.removeClass('quiz-form__item_active');
				$(this).addClass('quiz-form__item_active');
				$otherLabels.removeClass('active');	
				$inputOther.find('.quiz-form__tooltip').removeClass('quiz-form__tooltip_active');


				
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
				
				if ( $quizStep.eq(i).find('input[type="radio"]').length  && !$quizStep.eq(i).find('input[type="radio"]').is(':checked') && i != 3)  {

						$btnQuiz.addClass('btn_quiz_tooltip');
						return false;
				}

				if ( i == 3 && j == 0 ) {

					$btnQuiz.addClass('btn_quiz_tooltip');
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
			if ( i == 0 && el.hasClass('quiz_mob') ) {
				el.removeClass('quiz_mob_active');
				return false;
			}
			if ( i > 0 && i < $quizStep.length) {
				$btnQuiz.removeClass('btn_quiz_tooltip');
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
			$('.overlay_thank').addClass('overlay_active')
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
	$inputOther.find('.quiz-form__other-toggle').click(this.otherTooltipToggle);
	$inputOther.find('.quiz-form__tooltip input[type="radio"]').change(this.otherChange);
	$quizStep.eq(3).find('input').click(this.datePicker);
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
				nextArrow: $context.find('.tab-dots-wrapper .tab-dots .btn-slider-wrap.next'),
				prevArrow: $context.find('.tab-dots-wrapper .tab-dots .btn-slider-wrap.prev'),
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
		$('.quiz_mob').removeClass('quiz_mob_active');
		$('body').removeClass('open-modal');
	});


	$('.modal__radio-btn input').change(function(event) {
			if( $(this).attr('id') == 'choose') {
				$('.modal__time input').removeAttr('disabled');
				$('.modal__time-radio input:first').attr('checked', 'true');

			} else {
				$('.modal__time input').attr('disabled', 'true');
				$('.modal__time-radio input').each(function(index, el) {
					$(el).prop('checked', false);
				});
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
				$(modal).addClass('overlay_active');
				$(modal).find('.modal').addClass('modal_active');
				$('body').addClass('open-modal');


			});

		} else {

			$btn.on('click', function(event) {
				event.preventDefault();
				$(modal).addClass('quiz_mob_active');
				
			});
		}

		

	}

	var  modalAuthorsActive = new OpenModal ('.btn__authors', '.overlay_author'),
		 modalAuthorsPrice = new OpenModal ('.best-authors__id-link a', '.overlay_price'),
		 modalDeadlines = new OpenModal ('.btn_deadline', '.overlay_deadlines'),
		 modalManager = new OpenModal ('.info-phone__modal', '.overlay_form-manager'),
		 modalFormCalc = new OpenModal ('.btn_order-work', '.overlay_form-calc'),
		 modalQuiz = new OpenModal ('.btn_quiz-popup', '.quiz_mob');


		/* $('.datepicker-here').datepicker({
		 	autoClose: true,
		 	onSelect : function() {
		 		j = 1;
		 	}
		 })*/


        $('#modal-time').mask('99:99',{
                placeholder: "13:00",
                onComplete: function(){
                    var val = $('#modal-time').val().split(':');
                    if ( +val[0] > 23) val[0] = '23';
                    if ( +val[1] > 59) val[1] = '59';
                    $('#modal-time').val( val.join(':') );
                }
            }
        );

     $(".datepicker-here").datepicker({
     	autoClose: true,
     	onSelect : function() {
     		j = 1;
     	}

	}).click( function () {
			var	 body = $('body');
			if ( $(this).parents(".overlay_form-calc").length && !$(this).parents(".overlay_form-calc").children("#datepickers-container").length ) {

				var	container = $(this).parents(".overlay_form-calc");
					
		  		$("#datepickers-container").appendTo(container);
		  		
		  	} else if ( !body.children("#datepickers-container").length ) {
		  		
		  		$("#datepickers-container").appendTo(body);

		  	}
		  	
		});


});



