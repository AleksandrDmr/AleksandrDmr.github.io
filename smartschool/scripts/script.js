$(document).ready(function() {

	var 
		$navbar = $('.navbar_mobile'),
		$overlay = $('.overlay'),
		$pageHeader =$('.header'),
		$navToggle = $('.nav-toggle'),
		headerHeight = $pageHeader.outerHeight(),
		wind = $(window),
		width = wind.width();

		if($('.modal-form-wrap').length) {
			var	$modalForm = $('.modal-form-wrap');
		}

		 
		wind.resize(function(){
		  if(wind.width() != width){
		    $('.nav-menu_mobile').removeClass('nav-menu_active');
			$navToggle.removeClass('nav-toggle_active nav-toggle_fixed');
			$overlay.removeClass('overlay_active overlay_active-bg');
			$navbar .removeClass('navbar_mobile_active');
			if ($modalForm.length) {
				$modalForm.removeClass('modal-form-wrap_active');
			}
		    width = wind.width();
		  }
		});

		

	$navbar.css('top', headerHeight + 'px');  

	$navToggle.on('click',  function(event) {
		event.preventDefault();
		$(this).toggleClass('nav-toggle_active');
		$navbar.toggleClass('navbar_mobile_active');
		$overlay.toggleClass('overlay_active');
		if ($(this).hasClass('nav-toggle_fixed')) {
			$(this).removeClass('nav-toggle_fixed');
		}
	});

	$overlay.on('click',  function(event) {
		$navToggle.removeClass('nav-toggle_active nav-toggle_fixed');
		$navbar.removeClass('navbar_mobile_active');
		$(this).removeClass('overlay_active overlay_active-bg');
		if ($modalForm.length) {
			$modalForm.removeClass('modal-form-wrap_active');	
		}
		
	});

$(document).on('scroll', function(event) {
	event.preventDefault();
	var pageScroll = $('html, body').scrollTop();
		headerHeight = $pageHeader.outerHeight();

	if (pageScroll > (headerHeight - 40) && $navToggle.hasClass('nav-toggle_active')) {
		$navToggle.addClass('nav-toggle_fixed');

	}
	else {
		$navToggle.removeClass('nav-toggle_fixed'); 
	}


	if(pageScroll > 10) {
		$navbar.css('top', '0'); 
	}

	else {
		$navbar.css('top', headerHeight + 'px');  
	}

	
});
var search = $('.search');

search.on('focusin', function(event) {
	$(this).find('.search__btn').addClass('search__btn_hover');
	$(this).find('.search__input').addClass('search__input_hover');
	$(this).find('label').css('display', 'none');


});

search.on('focusout', function(event) {
	if ($(this).find('.search__input').val()) {
		return false;
	}
	$(this).find('.search__btn').removeClass('search__btn_hover');
	$(this).find('.search__input').removeClass('search__input_hover');
	$(this).find('.search__label').css('display', 'block');

});




if ($('.form').length) {

	var footerForm =  $('.form');

	footerForm.find('input, textarea').on('focusin', function(event) {
		$(this).next('label').addClass('placeholder');
	});

	footerForm.find('input, textarea').on('focusout', function(event) {
		if (!$(this).val()) {
			$(this).next('label').removeClass('placeholder');
		}
		
	});
}


	
	if ($('.reviews-slider').length) {

		$('.reviews-slider').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				centerMode: true,
				autoplay: true,
  				autoplaySpeed: 5000,
  				centerPadding: '0',
				responsive: [{
						breakpoint: 768,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
	}


	if ($('.stages-tabs').length) {
		
		var tabSelector = $('.stages-tabs'),
			trigger	= tabSelector.find('.stages-tabs__triggers li'),
		 	tab = tabSelector.find('.stages-tabs__tab'); 

		trigger.on('click', function(event) {
			event.preventDefault();
			var context = $(this),
				index = context.index(),
				tabIndex = tab.eq(index);
			trigger.not(context).removeClass('current');
			context.addClass('current');
			tab.addClass('stages-tabs__tab_active').not(tabIndex).removeClass('stages-tabs__tab_active');
			
		});


	}

	if ($('.training-list__item').length) {
		var traininTrigers = $('.training-list__item');
		traininTrigers.on('click', function(event) {
			event.preventDefault();
			traininTrigers.addClass('training-list__item_active').not($(this)).removeClass('training-list__item_active');
			
		});
	}
	

	if($('.popup-trigger').length) {

		var 	
			$formTitle = $modalForm.find('.section-title__h'),
			$close = $modalForm.find('.btn-close');

		$('.popup-trigger').on('click',  function(event) {
			formTitleText = $(this).attr('data-title-form');
			$formTitle.text(formTitleText);
			$modalForm.addClass('modal-form-wrap_active');
			$overlay.addClass('overlay_active-bg');

		});

		$close.on('click', function(event) {
			event.preventDefault();
			$modalForm.removeClass('modal-form-wrap_active');
			$overlay.removeClass('overlay_active-bg');
		});
	}
});


