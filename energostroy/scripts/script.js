$(function() {
	$('.menu-toggle').on('click',  function(event) {
		event.preventDefault();
		$(this).toggleClass('is-active');
		$('.nav-responive').toggleClass('is-show');
	});

	$('input[type="file"]').styler({
		filePlaceholder: 'Приложить файл (описание задачи или опросник)',
		fileBrowse: ''
	});
	$('.product__link').on('click',  function(event) {
		event.preventDefault();
		var popup = $(this).attr('href'),
			parent = $(this).parents('.product');
			
		$('.product-popup').removeClass('is-show');
		$(popup).addClass('is-show').css( 'top', parent.position().top + 'px' );
	});
	$('.close').on('click', function(event) {
		$('.product-popup').removeClass('is-show');
	});	
	$('.reviews-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: "0",
			focusOnSelect: true,
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

	$(".gallery__text a, .reviews-slider__img").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		padding: '0',
	});
	$('.accordion__question').on('click', function(event) {
		$('.accordion__answer').not( $(this).next('.accordion__answer') ).removeClass('js-open');
		$('.accordion__question').not( $(this) ).removeClass('js-active');
		$(this).next('.accordion__answer').toggleClass('js-open');
		$(this).toggleClass('js-active');
	});
	$('.partners-carusel').slick({
			slidesToShow: 6,
			responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 4,
			      }
			    },
			
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 500,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			]
	});

	$('.btn-modal').on('click',  function(event) {
		event.preventDefault();
		$('.overlay').addClass('is-show');
		$('.modal').addClass('is-show');
	});
	$('.close').on('click',  function(event) {
		event.preventDefault();
		$('.overlay').removeClass('is-show');
		$('.modal').removeClass('is-show');
	});


	$('.arrow-up').on('click', function(e) {

	 	$('html, body').animate({
	 		scrollTop: 0
	 	}, 500);
	 });
	$('nav a').on('click', function (e) {
	    e.preventDefault();
	    
	    var selector = $(this).attr('href'); 
	    var h = $(selector); 
	    
	    $('html, body').animate({
	        scrollTop: h.offset().top 
	    }, 400);
	    
	    
	});
});