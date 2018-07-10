$(function(){

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




