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

    $('.first-form').validate({
    	rules: {
    		name_first_form: {
    			required: true,

    		},

    		phone_first_form: {
    			required: true,
    			digits: true,
    			minlength: 11
    		}
    	}, 
    	invalidHandler: function(event, validator){

    			$('.first-form .error-message').text('Пожалуйста, введите корректные данные!');   		
    					
    	},
    	onkeyup: function(element) {
    		$('.first-form .error-message').text('');
    	},

    	errorPlacement: function(error, element) {
    		return true;
    	}
    });




    $('.second-form').validate({
    	rules: {
    		name_second_form: {
    			required: true,

    		},

    		phone_second_form: {
    			required: true,
    			digits: true,
    			minlength: 11
    		},
    		mail_second_form: {
    			required: true,
    			email: true
    		}
    	}, 
    	invalidHandler: function(event, validator){

    		$('.second-form .error-message').text('Пожалуйста, введите корректные данные!');

    	},
    	onkeyup: function(element) {
    		$('.second-form .error-message').text('');
    	},

    	errorPlacement: function(error, element) {
    		return true;
    	}
    });




});











