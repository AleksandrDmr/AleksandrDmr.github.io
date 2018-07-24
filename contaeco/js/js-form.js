$(function() {

//при нажатии на кнопку Регистрация (class="save")


function VerifyCaptcha(){

  this.verify = function(btn) {

    $(btn).click(function() {
      //получаем значение элемента input, содержащего код CAPTCHA
      var captcha = $(btn).parent().find('.text-captcha').val();
      //если код CAPTCHA пустой, то обновляем изображение
      if (captcha=='') {
        $(btn).parent().find('.img-captcha' ).attr('src', '../captcha/captcha.php?id=' + Math.random()+'');
        $(btn).parent().find('.form-wrong_captcha' ).addClass("show");
        $(btn).parent().find( '.text-captcha' ).addClass('input-error ');         
      }
      //иначе запрашиваем результат у сервера через ajax
      else  { 
        var dataString = 'captcha=' + captcha;
        $.ajax({
          type: "POST",
          url: "../captcha/verify.php",
          data: dataString,
          success: function(result) {

          if (result=="true") {
            $(btn).parent().find('.form-wrong_captcha' ).removeClass('show');
            $(btn).parent().find( '.text-captcha' ).removeClass('input-error');
          } 
        else if(result=="false") {
            $(btn).parent().find('.img-captcha').attr('src', '../captcha/captcha.php?id=' + Math.random()+'');
            $(btn).parent().find('.form-wrong_captcha' ).addClass('show');
            $(btn).parent().find( '.text-captcha' ).addClass('input-error ');
               
            }
        }
        });
      }
    });


  }


} 

var verifySignIn = new VerifyCaptcha();
verifySignIn.verify('.save-sign-in');

var verifyRecover = new VerifyCaptcha();
verifyRecover.verify('.save-recover');


/*$('.save').click(function() {
  alert(1);
  //получаем значение элемента input, содержащего код CAPTCHA
  var captcha = $(".text-captcha").val();
  //если код CAPTCHA пустой, то обновляем изображение
  if (captcha=='') {
  	$('.img-captcha').attr('src', '../captcha/captcha.php?id=' + Math.random()+'');
    $(".form-wrong_captcha").addClass("show");
     $(".text-captcha").addClass('input-error ');
    	
  }
  //иначе запрашиваем результат у сервера через ajax
  else  { 
    var dataString = 'captcha=' + captcha;
    $.ajax({
      type: "POST",
      url: "../captcha/verify.php",
      data: dataString,
      success: function(result) {

        if (result==="true") {
          $(".form-wrong_captcha").removeClass('show');
          $(".text-captcha").removeClass('input-error');

       
        	} 
		else {

			$('.img-captcha').attr('src', '../captcha/captcha.php?id=' + Math.random()+'');
	        $('.form-wrong_captcha').addClass('show');
	        $(".text-captcha").addClass('input-error ');
           
        }
	  }
    });
  }
});*/
});