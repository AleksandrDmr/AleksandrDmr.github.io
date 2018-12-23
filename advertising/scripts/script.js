$(function(){

	$('.city-list').on('click', function() {
		$('.city-list').toggleClass('city-list_active');
		$('.city-list ul').stop().slideToggle();

	});
	  
	$('.placeinput').on('click', function() {
		$(this).children('input').focus();
	});

	$('.modal-form_product select').styler();
	$('.modal-form_product input[type="file"]').styler();



	$('.price-btn_form').click(function(e){
		e.preventDefault();
   	$('.overlay_form').fadeIn();
	});
	$('.overlay_form').click(function(e){
		if($(this) != $('.modal-form')){
			$('.overlay').fadeOut();
		}
 	});
		$('.modal-form').click(function(e){				
			return false
		});

		$('.overlay_form input[type="submit"]').click(function(e){				
				 $('.overlay').fadeOut();
		});


		$('.price-btn_big-form').click(function(e){
		e.preventDefault();
   	$('.overlay_big-form').fadeIn();
	});
	$('.overlay_big-form').click(function(e){
		if($(this) != $('.modal-form')){
			$('.overlay').fadeOut();
		}
 	});
		$('.modal-form').click(function(e){				
			return false
		});

		$('.overlay_big-form input[type="submit"]').click(function(e){				
				 $('.overlay').fadeOut();
		});


});

