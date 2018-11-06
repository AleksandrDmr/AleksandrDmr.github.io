$(function(){

	var arrowLeft = '<?xml version="1.0" encoding="UTF-8"?><svg class="slider-btn__arrow" enable-background="new 0 0 32.635 32.635" version="1.1" viewBox="0 0 32.635 32.635" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m32.135 16.817h-31.635c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h31.635c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/><path d="m13.037 29.353c-0.128 0-0.256-0.049-0.354-0.146l-12.537-12.538c-0.093-0.094-0.146-0.221-0.146-0.354s0.053-0.26 0.146-0.354l12.538-12.532c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-12.184 12.179 12.184 12.184c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.147-0.354 0.147z"/></svg>';

	var arrowRight = '<?xml version="1.0"  encoding="UTF-8"?><svg class="slider-btn__arrow" enable-background="new 0 0 32.635 32.635" version="1.1" viewBox="0 0 32.635 32.635" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m32.135 16.817h-31.635c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h31.635c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/><path d="m19.598 29.353c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l12.184-12.184-12.184-12.18c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l12.537 12.533c0.094 0.094 0.146 0.221 0.146 0.354s-0.053 0.26-0.146 0.354l-12.537 12.536c-0.097 0.098-0.225 0.147-0.353 0.147z"/></svg>';


/*Функция  проверки необходимости фиксации меню меню*/
$('.pt-js').css('padding-top', $('.menu-wrap').innerHeight());

if($('.menu-wrap').offset().top >= 100) {
	 $('.menu-wrap').addClass('menu-wrap_scroll');
	 
}
/*Функция  фиксации меню*/
$(window).scroll(function() {
	$('.pt-js').css('padding-top', $('.menu-wrap').innerHeight());

    if($(this).scrollTop() >= 100) {
        $('.menu-wrap').addClass('menu-wrap_scroll');
        
         
    }
    else{
        $('.menu-wrap').removeClass('menu-wrap_scroll');

         
    }
});
/*Нажатие на кнопку открытия мобильно меню*/
$('.btn-menu').on('click', function(){
		$(this).toggleClass('btn-menu_active');
		$('.menu-header_mobile').toggleClass('menu-header_open');

	});





	$('.drop-down').on('click', function() {
		$('.drop-menu').not($(this).children('.drop-menu')).removeClass('drop-menu_open');
		$(this).children('.drop-menu').toggleClass('drop-menu_open');
	});



/*Открытие формы в хедере*/

$('.header-calc-btn').on('click', function() {
	$('.form_header').toggleClass('form_header_open');
});


   $('.cars__list-item a').click(function(e){
			e.preventDefault();
	});


    $('.cars__list-item').on('click', function() {
    	
	    if(	$(this).hasClass('cars__list-item_active')) {
	    	return false;
	    }
	    

	    if($(this).is(':first-child')) {

	    	$('.cars__tabs').addClass('cars__tabs_none-border');
	    	$('.cars__list-item').removeClass('cars__list-item_border-bottom-none');
	    	$('.cars__list-item').removeClass('cars__list-item_border-top');
	    	$(this).addClass('cars__list-item_border-top');

	    }
	    else {
	    	$('.cars__tabs').removeClass('cars__tabs_none-border');
	    	$('.cars__list-item').removeClass('cars__list-item_border-top');
	    	$('.cars__list-item').removeClass('cars__list-item_border-bottom-none');
	    	$(this).prev('.cars__list-item').addClass('cars__list-item_border-bottom-none');
	    	$(this).removeClass('cars__list-item_border-bottom-none');
	    	$(this).addClass('cars__list-item_border-top');

	    }
	     var link = $(this).children('a').attr("href");
    	 var linkPrev = $('.cars__list-item_active').children('a').attr("href");
	   
        $('.cars__list-item').removeClass('cars__list-item_active');    
       
         $(this).addClass('cars__list-item_active');
         	 $(linkPrev).fadeOut(100, function(){   
         	 $(link).fadeIn(300);
         });
             
         
 
    });
   


	if($('.reviews-carusel').length) {

		$('.reviews-carusel').slick({
			slidesToShow: 4,
			 dots: false,
			 infinite: true,
			 speed: 500,
			 fade: false,
			/* autoplay: true,*/
			 autoplaySpeed: 3000,
			 cssEase: 'linear',
			 nextArrow: '<button class="slider-btn slider-btn_next " type="button">'+ arrowRight +'</button>',
			 prevArrow: '<button class="slider-btn slider-btn_prev" type="button">'+ arrowLeft +'</button>',
			 responsive: [
			     {
			       breakpoint: 992,
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
			       breakpoint: 690,
			       settings: {
			         slidesToShow: 1
			       }
			     }
			   ]
			
		});
	}

	/*Слайдер страницы About*/
if($('.partners-slider').length) {
	$('.partners-slider').slick({
		slidesToShow: 4,
		 dots: false,
		 infinite: true,
		 speed: 500,
		 fade: false,
		 rows: 2,
		 autoplaySpeed: 3000,
		 cssEase: 'linear',
		 nextArrow: '<button class="slider-btn slider-btn_next " type="button">'+ arrowRight +'</button>',
		 prevArrow: '<button class="slider-btn slider-btn_prev" type="button">'+ arrowLeft +'</button>',
		 responsive: [
		     {
		       breakpoint: 1050,
		       settings: {
		         slidesToShow: 3
		       }
		     },
		     {
		       breakpoint: 850,
		       settings: {
		         slidesToShow: 2
		       }
		     },
		      {
		       breakpoint: 500,
		       settings: {
		         slidesToShow: 1
		       }
		     }
		   ]
		
	});

}






/*Модальная форма*/
$(".btn-form-popup").magnificPopup({
  type:'inline',
	items: {
	      src: '<div id="test-popup" class="popup"> <form class="form-popup" action="#"> <div class="form-popup__title">Заказать звонок</div> <div><input type="text" placeholder="Имя"></div><div><input type="E-mail" placeholder="E-mail" required></div><button class="btn-two btn-two_blue">Позвоните мне!</button></form></div>',
	      
	  },
	closeBtnInside: true,
	 removalDelay: 300, 
  	mainClass: 'mfp-fade',
	});

/*Модальная форма заказть перевозку*/
$(".btn_order-form").magnificPopup({
  type:'inline',
	items: {
	      src: '<div id="test-popup" class="popup"> <form class="form-popup" action="#"> <div class="form-popup__title">Заказать перевозку</div> <div><input type="text" placeholder="Имя"></div><div><input type="E-mail" placeholder="E-mail" required></div><textarea placeholder="Сообщение (опишите груз)"></textarea>  <button class="btn-two btn-two_blue">Отправить</button></form></div>',
	      
	  },
	closeBtnInside: true,
	 removalDelay: 300, 
  	mainClass: 'mfp-fade',
	});

/*Модальная форма калькулятор*/
$(".btn-calc").magnificPopup({
  type:'inline',
	items: {
	      src: '<div id="test-popup" class="popup"> <form class="form-popup" action="#"> <div class="form-popup__title">Отправить расчет</div><div><input type="E-mail" placeholder="E-mail" required>  <button class="btn-two btn-two_blue">Отправить</button></form></div>',
	      
	  },
	closeBtnInside: true,
	 removalDelay: 300, 
  	mainClass: 'mfp-fade',
	});

/*Модальное окно благодарности*/
$(".btn_form").magnificPopup({
  type:'inline',
	items: {
	      src: '<div id="test-popup" class="popup popup_info"><div class="popup__title">Спасибо, что выбрали нашу компанию!</div><div class="popup__text">Наш менеджер свяжется с Вами в ближайшее время.</div></div>',
	      
	  },
	closeBtnInside: true,
	 removalDelay: 300, 
  	mainClass: 'mfp-fade',  
	});

/*Открытие изображения на странице документы*/
$(".document__img").magnificPopup({
 removalDelay: 300, 
  mainClass: 'mfp-fade',
  type: 'image',
  closeBtnInside: true,
});
/*Открытие изображения на странице автопарк*/
$(".cars-item__gallery-img").magnificPopup({
 removalDelay: 300, 
  mainClass: 'mfp-fade',
  type: 'image',
  closeBtnInside: true,
});
/*Открытие изображения на странице новости*/
$(".block-gallery__link").magnificPopup({
 removalDelay: 300, 
  mainClass: 'mfp-fade',
  type: 'image',
  closeBtnInside: true,
});
/*Открытие изображения на странице experience*/
$(".gallery-img-link").magnificPopup({
 removalDelay: 300, 
  mainClass: 'mfp-fade',
  type: 'image',
  closeBtnInside: true,
});


if ($('.section-calculator').length || $('.section-services').length) {

	$('select, input[type="number"], input[type="checkbox"], input[type="radio"]').styler();
}


if($('.services-link').length) {

	$('.services-link').click(function(e){
	e.preventDefault();
	$('.services-step-two').addClass('services-step-two_active');
	$('.spinner').addClass('spinner_hidden');

});

}




});






	
	



	

