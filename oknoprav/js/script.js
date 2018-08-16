$(document).ready(function() {

	$('.btn-menu').on('click', function(){
		$(this).toggleClass('btn-menu_active');
		$('.header-container').toggleClass('overflow-toggle');
		$('.menu-mobile-container').toggleClass('menu_mobile_active');
		$('header').toggleClass('hidden-angle');
	});

	$(window).on('resize', function() {
		$('.btn-menu').removeClass('btn-menu_active');
		$('.header-container').removeClass('overflow-toggle');
		$('.menu-mobile-container').removeClass('menu_mobile_active');
		$('header').removeClass('hidden-angle');
	});
	$(window).on('scroll', function() {
		$('.btn-menu').removeClass('btn-menu_active');
		$('.header-container').removeClass('overflow-toggle');
		$('.menu-mobile-container').removeClass('menu_mobile_active');
		$('header').removeClass('hidden-angle');
	});


    $('.nav a').on('click', function (e) {
        e.preventDefault();
        
        $('.nav a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); // #about - строка 
        var h = $(selector); // jquery-элемент заголовка 
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);
        
        
    });

    $('.works-item a').magnificPopup({
    	type: 'image'
    });

    $('#top-form').validate({
    	rules: {
    		name_first_form: {
    			required: true
    		}
    	}
    });

});











