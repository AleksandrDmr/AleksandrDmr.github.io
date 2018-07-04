$(function(){



	$('.slider').slick({
		 dots: false,
		 infinite: true,
		 speed: 500,
		 fade: false,
		 autoplay: true,
		 autoplaySpeed: 3000,
		 cssEase: 'linear',
		 nextArrow: '<button class="slider-btn slider-btn_prev" type="button"><img src="img/next.png" alt="Назад"></button>',
		 prevArrow: '<button class="slider-btn slider-btn_next" type="button"><img src="img/prev.png" alt="Вперед"></button>'
	});

	$('.slider-menu').slick({
		 slidesToShow: 3,
		 infinite: false,
		 arrows: false,
		 dots: false,
		 fade: false,
		 cssEase: 'linear',
		 responsive: [
		     {
		       breakpoint: 780,
		       settings: {
		        slidesToShow: 2.6,




		       }
		     }
		]
	});

	$('.recommended-slider').slick({
		 slidesToShow: 5,
		 infinite: false,
		 dots: false,
		 fade: false,
		 arrows: false,
		 cssEase: 'linear',
		 responsive: [
		     {
		       breakpoint: 1300,
		       settings: {
		         slidesToShow: 3,
		         arrows: true,
		         nextArrow: '<button class="slider-btn slider-btn_prev slider-btn_product" type="button"><img src="img/next-product.png" alt="Назад"></button>',
		 		 prevArrow: '<button class="slider-btn slider-btn_next slider-btn_product" type="button"><img src="img/prev-product.png" alt="Вперед"></button>'
		       }
		     },
		     {
		       breakpoint: 960,
		       settings: {
		         slidesToShow: 2,
		         arrows: true,
		         nextArrow: '<button class="slider-btn slider-btn_prev slider-btn_product" type="button"><img src="img/next-product.png" alt="Назад"></button>',
		 		 prevArrow: '<button class="slider-btn slider-btn_next slider-btn_product" type="button"><img src="img/prev-product.png" alt="Вперед"></button>'
		       }   
		    },
		     {
		       breakpoint: 560,
		       settings: {
		         slidesToShow: 2, 
		         arrows: true,
		         nextArrow: '<button class="slider-btn slider-btn_prev slider-btn_product" type="button"><img src="img/next-product.png" alt="Назад"></button>',
		 		 prevArrow: '<button class="slider-btn slider-btn_next slider-btn_product" type="button"><img src="img/prev-product.png" alt="Вперед"></button>'
		       }   
		    }

		]
	});

	$('.products-slider').slick({
		infinite:true,
		autoplay: true,
		 slidesToShow: 5,
		 dots: false,
		 fade: false,
		 arrows: false,
		 cssEase: 'linear',
		 responsive: [
		     {
		       breakpoint: 1300,
		       settings: {
		       	arrows: true,
		         slidesToShow: 3,
		         nextArrow: '<button class="slider-btn slider-btn_prev slider-btn_product" type="button"><img src="img/next-product.png" alt="Назад"></button>',
		 		 prevArrow: '<button class="slider-btn slider-btn_next slider-btn_product" type="button"><img src="img/prev-product.png" alt="Вперед"></button>'
		       }
		     },
		     {
		       breakpoint: 960,
		       settings: {
		         slidesToShow: 2,
		         arrows: true,
		         nextArrow: '<button class="slider-btn slider-btn_prev slider-btn_product" type="button"><img src="img/next-product.png" alt="Назад"></button>',
		 		 prevArrow: '<button class="slider-btn slider-btn_next slider-btn_product" type="button"><img src="img/prev-product.png" alt="Вперед"></button>'
		       }   
		    },
		     {
		       breakpoint: 560,
		       settings: {
		       	 arrows: true,
		         slidesToShow: 2, 
		         nextArrow: '<button class="slider-btn slider-btn_prev slider-btn_product" type="button"><img src="img/next-product.png" alt="Назад"></button>',
		 		 prevArrow: '<button class="slider-btn slider-btn_next slider-btn_product" type="button"><img src="img/prev-product.png" alt="Вперед"></button>'
		       }   
		    }

		]
	});


	
	function MenuDisplay(obj, obj1) {
		this.display = function() {
			$(obj).on('click', function(){
				$(obj1).slideToggle();
			});

			$(window).resize(function() {
				if($(window).width() < 980) {
			    	$(obj1).slideUp();
			    	console.log($(window).width());
				}
			});
		}
	}	

	var mobileMenu = new MenuDisplay('.menu-btn-mobile', '.menu-mobile');
	mobileMenu.display();
	var regionShow = new MenuDisplay('.region', '.region__list');
	regionShow.display();





});




