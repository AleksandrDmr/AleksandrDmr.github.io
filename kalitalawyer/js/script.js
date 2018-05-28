$(function(){


	function MenuDisplay(obj, obj1, classVisible) {
		var objClick = obj;
		var objDisplay = obj1;
		var classVisible = classVisible;
		this.display = function() {
			$(objClick).on('click', function(){
				$(objDisplay).toggleClass(classVisible);
			});
		}
	}	

	var topList = new MenuDisplay('.phone-top', '.phone-list-top', "list-up");
	topList.display();

	var MobileList = new MenuDisplay('.phone-mobile', '.phone-list-mobile', "list-up");
	MobileList.display();

	var MobileList = new MenuDisplay('.phone-footer', '.foot-phone-list', "list-up");
	MobileList.display();

	var MobileList = new MenuDisplay('.hamburger-menu', '.header-bottom', "visible");
	MobileList.display();


	var $up = $('.arrow-top');

	   function scrollBtn() {

	       if($(this).scrollTop() > 300){
	           $up.fadeIn(500);
	       }
	       else{
	           $up.fadeOut(500);
	       }
	       
	   }
	   scrollBtn();

	    $(document).on('scroll', scrollBtn);

	    $up.on('click', function(e) {

	     	$('html, body').animate({
	     		scrollTop: 0
	     	}, 500);
	     });


});




