$(function() {
	if ( $('.tabs-nav__item').length ) {

		var triggers =  $('.tabs-nav__item'),
		 	tabs = $('.tab'); 

		triggers.on('click', function(event) {
			var context = $(this),
				index = context.index(),
				tabIndex = tabs.eq(index);
			triggers.not(context).removeClass('tabs-nav__item_current');
			context.addClass('tabs-nav__item_current');
			tabs.removeClass('tab_visible');
			tabIndex.addClass('tab_visible');

			
		});

	}
	$('.accordion__question').on('click', function(event) {
		$('.accordion__answer').removeClass('js-open');
		$(this).next('.accordion__answer').addClass('js-open');
		$('.accordion__question').removeClass('js-active');
		$(this).addClass('js-active');
	});

	$('.main-btn').on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.overlay').addClass('overlay_visible')
		$('.modal').addClass('modal_visible')
	});
	$('.close').on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.overlay').removeClass('overlay_visible')
		$('.modal').removeClass('modal_visible')
	});
});

