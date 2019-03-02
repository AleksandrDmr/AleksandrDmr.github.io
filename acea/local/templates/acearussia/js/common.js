$(function () {

	setTimeout(go, 1000);

	function go() {
		$("#request-form-phone").mask("+7 (999) 999-99-99");
		$("#contacts-form__phone").mask("+7 (999) 999-99-99");

		$(".search-btn").on("click", function () {
			$(this).siblings(".search-form").toggleClass("open")
		});
		$(document).mouseup(function (e) {
			e.preventDefault();
			var div = $(".search-field-input, .search-submit");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				$(".search-form").removeClass('open');
			}
		});

		// Header menu
		if ($(window).width() < 768) {
			$(".mobile-menu").on("click", function () {
				$(this).next().slideToggle();
			});
			$(document).mouseup(function (e) {
				e.preventDefault();
				var div = $(".top-menu");
				if (!div.is(e.target) && div.has(e.target).length === 0) {
					$(".top-menu").find(".top-menu-list").slideUp();
				}
			});
		}
		// Scroll
		if ($(window).width() > 767) {
			var el = $(".header-wrapper");
			var sectionsTop = el.offset().top;
			var sectionsHeight = el.height();
			var sectionsTotal = sectionsTop + sectionsHeight;
			if (sectionsTotal <= $(window).scrollTop()) {
				$(".header-wrapper-scroll").fadeIn();
			}
			$(window).scroll(function () {
				if ($(this).scrollTop() >= sectionsTotal) {
					$(".header-wrapper-scroll").fadeIn();
				} else {
					$(".header-wrapper-scroll").fadeOut();
				}
			});
		}
		// Modal form
		$('.mrequest-link').fancybox({
			transitionEffect: "fade",
			touch: false,
			animationDuration: 700,
			autoFocus: false,
			closeBtn: false,
			smallBtn: true,
			closeExisting: true
		});

		$('.main-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			fade: true,
			prevArrow: ".main-slider-wrapper .arrow-prev",
			nextArrow: ".main-slider-wrapper .arrow-next",
		});

		$('.company-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			fade: true,
			prevArrow: ".slider-company-navigation .arrow-prev",
			nextArrow: ".slider-company-navigation .arrow-next",
		});
		if ($(window).width() < 1200) {
			$('.news-main-list').slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				appendDots: ".news-main-wrapper",
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}

		if ($('input:checkbox').length) {
			$('input:checkbox').styler();
		}

		$('.contacts-form__ckeck-all input').on('click', function(event) {
			if ($('.contacts-form__ckeck-all input').prop('checked') == true) {
				
				$('.contacts-form__ckeck .contacts-form__ckeck-item input:checkbox').attr('checked', false);
				$('.contacts-form__ckeck .contacts-form__ckeck-item').removeClass('contacts-form__ckeck-item_active');
				$('.contacts-form__ckeck .jq-checkbox').removeClass('checked');

			}

			else {
				$('.contacts-form__ckeck .contacts-form__ckeck-item input:checkbox').attr('checked', true);
				$('.contacts-form__ckeck .contacts-form__ckeck-item').addClass('contacts-form__ckeck-item_active');
				$('.contacts-form__ckeck .jq-checkbox').addClass('checked');
			}

		


		});


		$('.contacts-form__ckeck-item').on('click',  function(event) {
			if($(this).hasClass('contacts-form__ckeck-item_active')) {
				$(this).removeClass('contacts-form__ckeck-item_active');
				$(this).find('input:checkbox').attr('checked', false);
				$(this).find('.jq-checkbox ').removeClass('checked');
			}
			else {
				$(this).addClass('contacts-form__ckeck-item_active');
				$(this).find('input:checkbox').attr('checked', true);
				$(this).find('.jq-checkbox ').addClass('checked');
			}
				
			
		});

		if ($('.product-pic').length) {
			$('.product-pic').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				asNavFor: '.product-nav',
				nextArrow: '<button class="slider-btn slider-btn_next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
				prevArrow: '<button class="slider-btn slider-btn_prev" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
				
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

		}

		if ($('.category-list').length) {

			$('.category-list').slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				appendDots: $('.category-nav'),
				responsive: [
				    {
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3
				        

				      }
				    },
				    {
				      breakpoint: 576,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    }
				]
				
			});


		}

		if ($('.product-wrap').length) {

			$('.product-wrap').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				nextArrow: '<button class="slider-btn slider-btn_next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
				prevArrow: '<button class="slider-btn slider-btn_prev" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',

				responsive: [
				    {
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3,

				        

				      }
				    },
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 576,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				]
				
			});


		}

		if ($('.product-tabs-list').length) {

			$('.product-tabs-list li').on('click', function(event) {
				event.preventDefault();
				var classBtn=$('.'+$(this).attr('class').split(' ').join('.'));
				var selectorTab = $(this).children('a').attr('href');
				$('.product-tabs-list li').not(classBtn).removeClass('current');
				$(classBtn).addClass('current');						
				$('.tab').not($(selectorTab)).removeClass('tab_active');
				$(selectorTab).addClass('tab_active');
			});
		}


		if($('.news-slider').length) {

			$('.news-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: ".slider-company-navigation .arrow-prev",
				nextArrow: ".slider-company-navigation .arrow-next",
				
			});

			
		}

		if ($('.photo-gallery__slider').length) {

			$('.photo-gallery__slider').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: ".slider-company-navigation .arrow-prev",
				nextArrow: ".slider-company-navigation .arrow-next",
				centerPadding: '0',
				asNavFor: '.gallery-show',
				centerMode: true,
				focusOnSelect: true,



				responsive: [
				    {
				      breakpoint: 1200,
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
				   /* {
				      breakpoint: 576,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }*/
				]
				
			});

			
			var $slider = $('.gallery-show');

			if ($slider.length) {
			  var currentSlide;
			  var slidesCount;
			  var sliderCounter = $('.gallery-show__descr span')
			  
			  var updateSliderCounter = function(slick, currentIndex) {
			    currentSlide = slick.slickCurrentSlide() + 1;
			    slidesCount = slick.slideCount;
			    $(sliderCounter).text(currentSlide + '/' + slidesCount)
			  };

			  $slider.on('init', function(event, slick) {
			    updateSliderCounter(slick);
			  });

			  $slider.on('afterChange', function(event, slick, currentSlide) {
			    updateSliderCounter(slick, currentSlide);
			  });

			  $slider.slick({
			  	slidesToShow: 1,
			  	slidesToScroll: 1,
			  	arrows: true,
			  	prevArrow: ".slider-gallery-navigation .arrow-prev",
			  	nextArrow: ".slider-gallery-navigation .arrow-next",
			  	asNavFor: '.photo-gallery__slider'
			  	
			  });
			}

				$('.photo-gallery .slick-slide').on('click', function(event) {
					$('.gallery-show-wrap').addClass('gallery-show-wrap_active');
					$('.gallery-overlay').addClass('gallery-overlay_active');
				});
			

			$('.gallery-overlay').on('click', function(event) {
					$('.gallery-show-wrap').removeClass('gallery-show-wrap_active');
					$('.gallery-overlay').removeClass('gallery-overlay_active');

				});

		}
	}



	$('.contacts-form__ckeck i').on('click', function(event) {
		$('.contacts-form__ckeck').toggleClass('contacts-form__ckeck-active');
	});


	$('.review-block a').fancybox({
		transitionEffect: "fade",
		touch: false,
		animationDuration: 700,
		autoFocus: false,
		closeBtn: false,
		smallBtn: true,
		closeExisting: true
	});


});
	




