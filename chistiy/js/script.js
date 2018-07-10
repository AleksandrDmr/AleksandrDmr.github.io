 
$('.blockHeight').onload = function(){autoHeight};

 function autoHeight(){

	 	 		var itemHeight = $('.blockHeight');
	 	 	    var item = $('.services-item__img-wrap');
	 	 		var maxColHeight = 0; 
	 	 		$(itemHeight).each(function() { 
	 	 			if ($(this).height() > maxColHeight) { 
	 	 				maxColHeight = $(this).height(); 
	 	 			}
	 	 		});
	 	 		$(item).height(maxColHeight); 

	 	 }	

 $(window).resize(autoHeight);

$(window).load(function(){

	function MenuDisplay(obj, obj1) {
		this.display = function() {
			$(obj).on('click', function(){
				$(obj1).slideToggle();
			});

			$(window).resize(function() {
			    	$(obj1).slideUp();
			});
		}
	}	

	var mobileMenu = new MenuDisplay('.hamburger', '.nav');
	mobileMenu.display();


	 	



	
});


	

