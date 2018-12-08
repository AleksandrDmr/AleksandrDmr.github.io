$(function(){
	var $up = $('.up');

	 $up.on('click', function(e) {

    	$('html, body').animate({
    		scrollTop: 0
    	}, 500);
    });




	 var menu_selector = "nav"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
	 function onScroll(){
	 	var scroll_top = $(document).scrollTop();
	 	$(menu_selector + " a").each(function(){
	 		var hash = $(this).attr("href");
	 		var target = $(hash);
	 		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
	 			$(menu_selector + " a.active").removeClass("active");
	 			$(this).addClass("active");
	 		} else {
	 			$(this).removeClass("active");
	 		}
	 	});
	 }
	 	$(document).on("scroll", onScroll);
	 	$("a[href^=\\#]").click(function(e){
	 		e.preventDefault();
	 		$(document).off("scroll");
	 		$(menu_selector + " a.active").removeClass("active");
	 		$(this).addClass("active");
	 		var hash = $(this).attr("href");
	 		var target = $(hash);
	 		$("html, body").animate({
	 		    scrollTop: target.offset().top
	 		}, 500, function(){
	 			window.location.hash = hash;
	 			$(document).on("scroll", onScroll);
	 		});
	 	});
	
	  




	  		
	  



	 $('nav a').on('click', function (e) {
        e.preventDefault();
        
        $('nav a').removeClass('active').filter(this).addClass('active');
        
       var selector = $(this).attr('href'); // #about - строка 
       var h = $(selector); // jquery-элемент заголовка 
        
        $('html, body').animate({
            scrollTop: h.offset().top
        }, 400);
        
        
    });

});