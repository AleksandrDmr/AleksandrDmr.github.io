$(function() {
	if (window.location.href = 'https://github.com/AleksandrDmr/AleksandrDmr.github.io/tree/master/cyberzone/') {


		$('.wrapper-dots li').on('click', function(event) {
			event.preventDefault();
			var context = $(this);
			var index = context.index();
			selectorVideo = $('.video-player').eq(index);
			$('.wrapper-dots li').not(context).removeClass('active-dot');
			context.addClass('active-dot');
			$('.video-player').not(selectorVideo).removeClass('video-player_active')
			selectorVideo.addClass('video-player_active');


		});

		$('.nav-menu a').on('click', function (e) {
		    e.preventDefault();
		    
		    $('.menu a').removeClass('active').filter(this).addClass('active');
		    
		    var selector = $(this).attr('href'); 
		    var h = $(selector); 
		    
		    $('html, body').animate({
		        scrollTop: h.offset().top
		    }, 400);
		    
		    
		});


		$('.business-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			nextArrow: '<button class="slider-btn slider-btn_next" type="button"><img src="../img/arrow-next.png" alt="Вперед"/></button>',
			 prevArrow: '<button class="slider-btn slider-btn_prev" type="button"><img src="../img/arrow-prev.png" alt="Назад"/></button>',
			 responsive: [
			     {
			       breakpoint: 1200,
			       settings: {
			         slidesToShow: 2,
			         slidesToScroll: 2
			       }
			     },
			     {
			       breakpoint: 600,
			       settings: {
			         slidesToShow: 1,
			         slidesToScroll: 1
			       }
			     }
			 ]

		});

		$('.menu-toggle').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('menu-toggle_active');
			$('.nav-menu').toggleClass('nav-menu_active');
			$('.overlay').toggleClass('overlay_active');
		});

			$('.overlay').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('overlay_active');
			$('.nav-menu').toggleClass('nav-menu_active');
			$('.menu-toggle').toggleClass('menu-toggle_active');
		});

			var width = $(window).width();
			$(window).resize(function(){
			  if($(window).width() != width){
			    $('.menu-toggle').removeClass('menu-toggle_active');
			    $('.nav-menu').removeClass('nav-menu_active');
				$('.overlay').removeClass('overlay_active');
				$('.contacts').removeClass('contacts_active');
			    width = $(window).width();
			  }
			});


			$('.contacts__toggle').on('click', function(event) {
				event.preventDefault();
				$('.contacts').toggleClass('contacts_active');
			});

	}

	
});

