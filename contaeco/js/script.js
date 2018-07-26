$(document).ready(function() {
		var patternMail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var patternPsw = /[A-Za-z0-9]{6,}/; 
		var patternName = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
		var patternNum = /^\d+$/; 

	
		var flagMail = true;
		var flagUserId = true;

		var flagInput1 = true;
		var flagInput2 = true;

	function FormValidation() {

		this.validValTwoinput = function(input1, input2, messageError,objclassError, otherInput, btn, pattern1, pattern2) {

		
		
		var validVal1 =	function() {
				if($(input1).val() != '') {
					if(pattern1.test($(input1).val())){
						flagInput1 = true;
						if(flagInput2) {
							$(messageError).removeClass(objclassError.messageErrorClass);
							$(input1).removeClass(objclassError.inputClass);
							$(input2).removeClass(objclassError.inputClass);
							$(otherInput).removeClass(objclassError.inputClass);

						}
								
					} 
					else {						
						$(messageError).addClass(objclassError.messageErrorClass);
						$(input1).addClass(objclassError.inputClass);
						$(input2).addClass(objclassError.inputClass);
						$(otherInput).addClass(objclassError.inputClass);
						flagInput1 = false;
					}
				}
				else {
						
					$(messageError).addClass(objclassError.messageErrorClass);
					$(input1).addClass(objclassError.inputClass);
					$(input2).addClass(objclassError.inputClass);
					$(otherInput).addClass(objclassError.inputClass);
					flagInput1 = false;
				}


			}
			$(input1).on('keyup', validVal1);
			$(btn).on('click', validVal1);



			var validVal2 =	function() {
					if($(input2).val() != '') {
						if(pattern2.test($(input2).val())){
							flagInput2 = true;
							if(flagInput1) {
								$(messageError).removeClass(objclassError.messageErrorClass);
								$(input1).removeClass(objclassError.inputClass);
								$(input2).removeClass(objclassError.inputClass);
								$(otherInput).removeClass(objclassError.inputClass);

							}
									
						} 
						else {						
							$(messageError).addClass(objclassError.messageErrorClass);
							$(input1).addClass(objclassError.inputClass);
							$(input2).addClass(objclassError.inputClass);
							$(otherInput).addClass(objclassError.inputClass);
							flagInput2 = false;
						}
					}
					else {
							
						$(messageError).addClass(objclassError.messageErrorClass);
						$(input1).addClass(objclassError.inputClass);
						$(input2).addClass(objclassError.inputClass);
						$(otherInput).addClass(objclassError.inputClass);
						flagInput2 = false;
					}				


				}
			$(input2).on('keyup', validVal2);
			$(btn).on('click', validVal2);
			
		}

	/*		/*Валидация емейла*/
		/*this.validationMail = function(input, messageError,objclassError, otherInput, btn) {

			

		var validMail =	function() {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if($(input).val() != '') {
					if(pattern.test($(this).val())){
						flagMail = true;
						if(flagUserId) {
							$(messageError).removeClass(objclassError.messageErrorClass);
							$(input).removeClass(objclassError.inputClass);
							$(otherInput).removeClass(objclassError.inputClass);
						}
								
					} 
					else {						
						$(messageError).addClass(objclassError.messageErrorClass);
						$(input).addClass(objclassError.inputClass);
						$(otherInput).addClass(objclassError.inputClass);
						flagMail = false;
					}
				}
				else {
						
					$(messageError).addClass(objclassError.messageErrorClass);
					$(input).addClass(objclassError.inputClass);
					$(otherInput).addClass(objclassError.inputClass);
					flagMail = false;
				}

				


			}
			$(input).on('keyup', validMail);
			$(btn).on('click', validMail);
			
		}
		Валидация id пользователя на ввод только чисел
		this.validationID = function(input, messageError, objclassError, otherInput, btn) {
		var ValidID =	function() {
				var pattern = /^\d+$/;
				if($(input).val() != '') {
					if(pattern.test($(this).val())){
						flagUserId = true;
						if(flagMail) { 
							$(messageError).removeClass(objclassError.messageErrorClass);
							$(input).removeClass(objclassError.inputClass);
							$(otherInput).removeClass(objclassError.inputClass);
						}
						
						
						
					} 

					else {
						
						$(messageError).addClass(objclassError.messageErrorClass);
						$(input).addClass(objclassError.inputClass);
						$(otherInput).addClass(objclassError.inputClass);
						flagUserId = false;


					}
				} 

				else {
										
					$(messageError).addClass(objclassError.messageErrorClass);
					$(input).addClass(objclassError.inputClass);
					$(otherInput).addClass(objclassError.inputClass);
					flagUserId = false;
	
				}
			}

			$(input).on('keyup', ValidID );
			$(btn).on('click', ValidID );
		}

*/

		this.regValidation = function(input, messageError, messageGood, messageShow, objClassInput, pattern, btn) {
			
			var validation = function() {
					
				
				if($(input).val() != '') {
					if(pattern.test($(input).val())){
						$(input).parent().find(messageError).removeClass(messageShow);
						$(input).removeClass(objClassInput.objError);
						$(input).addClass(objClassInput.objGood);
						$(input).parent().find(messageGood).addClass(messageShow);
						
					} 
					else {

						$(input).parent().find(messageError).addClass(messageShow);
						$(input).addClass(objClassInput.objError);
						$(input).removeClass(objClassInput.objGood);
						$(input).parent().find(messageGood).removeClass(messageShow);
													
					}
				}
				else {

						$(input).parent().find(messageError).addClass(messageShow);
						$(input).addClass(objClassInput.objError);
						$(input).removeClass(objClassInput.objGood);
						$(input).parent().find(messageGood).removeClass(messageShow);
											
				}


			};


			$(input).on('keyup', validation);
			$(btn).on('click', validation);
		}

		this.matchValue = function(input1, input2, btn) {

			var	matchFirst = function() {
					if($(input1).val() != '' && $(input1).val() == $(input2).val()) {
						$(input2).parent().find('.not-match').removeClass('show');
						$(input2).parent().find('.good').addClass('show');
						$(input2).addClass('input-good');
						$(input2).removeClass('input-error');			
	
					
					}
				else {
						$(input2).parent().find('.not-match').addClass('show');
						$(input2).parent().find('.good').removeClass('show');
						$(input2).removeClass('input-good');
						$(input2).addClass('input-error');
	


					}	

			}
			$(input1).on('keyup', matchFirst); 
			$(btn).on('click', matchFirst); 			

			var matchSecond = function() {

					if($(input2).val() != '' && $(input1).val() == $(input2).val()) {
					$(input2).parent().find('.not-match').removeClass('show');
					$(input2).parent().find('.good').addClass('show');
					$(input2).addClass('input-good');
					$(input2).removeClass('input-error');

				


					
					}
				else {
						$(input2).parent().find('.not-match').addClass('show');
						$(input2).parent().find('.good').removeClass('show');
						$(input2).removeClass('input-good');
						$(input2).addClass('input-error');

				}	

				}
				$(input2).on('keyup', matchSecond); 
				$(btn).on('click', matchSecond); 
				

		}





					


		

}	


	/*проверка  имени при регистрации на правильность ввода*/
	var regPswValid = new FormValidation();
	regPswValid.regValidation('#reg-name', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error'}, patternName, '.save-reg-btn');

	/*проверка  id пользователя при регистрации на правильность ввода*/
	var regPswValid = new FormValidation();
	regPswValid.regValidation('#reg-user-id', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error'}, patternNum, '.save-reg-btn');

	/*проверка  мейл при регистрации на правильность ввода*/
	var regMailValid = new FormValidation();
	regMailValid.regValidation('#reg-mail', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error'}, patternMail, '.save-reg-btn');

	/*проверка  пароля при регистрации на правильность ввода*/
	var regPswValid = new FormValidation();
	regPswValid.regValidation('#reg-password', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error'}, patternPsw, '.save-reg-btn');

	/*проверка совпадения мейл при регистрации*/
	var mailRegMatch = new FormValidation();
	mailRegMatch.matchValue('#reg-mail', '#rep-reg-mail', '.save-reg-btn');

	/*проверка совпадения пароля при регистрации*/
	var pswRegMatch = new FormValidation();
	pswRegMatch. matchValue('#reg-password', '#rep-reg-password', '.save-reg-btn');

	
	/*Валидация id пользователя и мейла восстановления пароля*/
	var recoverPswMail = new FormValidation();
	recoverPswMail.validValTwoinput('#mail-recover', '#user-id-recover',  '.wrong-recover', {messageErrorClass:'show', inputClass:'input-error'}, '#user-id-recover', '.save-recover', patternMail, patternNum);

	/*var recoverPswId = new FormValidation();
	recoverPswId.validationID('#user-id-recover', '.wrong-recover', {messageErrorClass:'show', inputClass:'input-error'}, '#mail-recover', '.save-recover');*/


	/*Валидация Id пользователя и пароля при входе*/
	var SignInId = new FormValidation();

	SignInId.validValTwoinput('#user-id-sign-in', '#psw-sign-in', '.wrong-sign-in', {messageErrorClass:'show', inputClass:'input-error'}, '#psw-sign-in', '.save-sign-in', patternNum, patternPsw);




	

function Modal() {
	this.nextModal = function(clickObj, modalHide, modalShow) {

		 $(clickObj).on('click', function() {
			$(modalHide).fadeOut(function() {
				$(modalShow).fadeIn();
			});	

		});
	}
	this.hideModal = function(clickObj, modalHide) {
		 $(clickObj).on('click', function() {
			$(modalHide).fadeOut();	

		});
	}

	this.showModal = function(clickObj, modalshowle) {
		 $(clickObj).on('click', function() {
			$(modalshowle).fadeIn();	

		});
	}



	this.formValidAndNext = function (formName, errorName, btn, nextModal) {
					
				 $(btn).on('click', function() {
				 	if(!$(formName).find(errorName).is(':visible') && $(formName).find('input').val != '') {
				 		$(formName).fadeOut(function() {
							$(nextModal).fadeIn();
					});	
				 	}
					

				});

			
		}

}




/*переход к авторизации*/
var signIn = new Modal();
signIn.nextModal('.sign-in-btn', '.form-index', '.form-sign-in');
/*переход к восстановлению пароля*/
var recoverPsw = new Modal();
recoverPsw.nextModal('.form__recovery-btn', '.form-sign-in', '.form-recover');

/*переход от восстановления пароля к сообщению*/
var recoverPswMessage = new Modal();
recoverPswMessage.formValidAndNext('.form-recover', '.error', '.save-recover',  '.data-sent');

/*переход к регистрации*/
var registration = new Modal();
registration.nextModal('.registration-btn', '.form-index', '.user-registration');

/*скрыть куки*/
var cookiesAccept = new Modal();
cookiesAccept.hideModal('.cookies__accept', '.cookies');
/*отобразить соглашение*/
var cookiesRead = new Modal();
cookiesRead.showModal('.cookies__read', '.cookies-modal');
/*скрыть куки и соглашение*/
var cookiesModalAccept = new Modal();
cookiesModalAccept.hideModal('.cookies__accept', '.cookies-modal, .cookies ', '.user-registration');

/*переход к изменению имени*/
var editName = new Modal();
editName.nextModal('.edit-name-btn', '.user-cabinet', '.edit-name');
/*отмена  изменения имени*/
var editNameCancel = new Modal();
editNameCancel.nextModal('.edit-name-cancel', '.edit-name', '.user-cabinet');

/*проверка  имени при смене на правильность ввода*/
var NameValid = new FormValidation();
NameValid.regValidation('#new-name', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error'}, patternName, '.save-date-name');

/*проверка совпадения имени при смене*/
var NameMatch = new FormValidation();
	NameMatch. matchValue('#new-name', '#repeat-name', '.save-date-name');


/*переход к изменению почты*/
var editMail = new Modal();
editMail.nextModal('.edit-mail-btn', '.user-cabinet', '.edit-mail');
/*отмена  изменения почты*/
var editMailCancel = new Modal();
editMailCancel.nextModal('.edit-mail-cancel', '.edit-mail', '.user-cabinet');

/*проверка  почты при смене на правильность ввода*/
var mailValid = new FormValidation();
mailValid.regValidation('#new-mail', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error'}, patternMail,'.save-date-mail');

/*проверка совпадения почты при смене*/
var mailMatch = new FormValidation();
	mailMatch. matchValue('#new-mail', '#repeat-mail','.save-date-mail');	




/*переход к изменению пароля*/
var editPsw = new Modal();
editPsw.nextModal('.edit-psw-btn', '.user-cabinet', '.edit-password');
/*отмена  изменения пароля*/
var editPswCancel = new Modal();
editPswCancel.nextModal('.edit-psw-cancel', '.edit-password', '.user-cabinet');

/*проверка  пароля при смене на правильность ввода*/
var pswValid = new FormValidation();
pswValid.regValidation('#new-password', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error'}, patternPsw, '.save-date-psw');

/*проверка совпадения пароля при смене*/
var pswMatch = new FormValidation();
	pswMatch. matchValue('#new-password', '#repeat-password', '.save-date-psw');		


/*выход из кабинета*/
var exitUserCab = new Modal();
exitUserCab.nextModal('.exit-user-cab-btn', '.user-cabinet', '.form-index');

/*переход в кабинет после изменения данных*/
var dataSaved = new Modal();
dataSaved.nextModal('.data-save-btn', '.data-saved', '.user-cabinet');


/*переход после отправки данных на востановление данных*/
var dataSent = new Modal();
dataSent.nextModal('.data-sent-btn', '.data-sent', '.form-index');

/*переход в личный кабинет при авторизации*/
var authorization = new Modal();
authorization.formValidAndNext('.form-sign-in', '.error', '.save-sign-in',  '.user-cabinet');


/*переход к оповещению что данные изменены пароль*/
var savePsw = new Modal();
savePsw.formValidAndNext('.edit-password', '.error', '.save-date-psw', '.data-saved');

/*переход к оповещению что данные изменены имя*/
var saveName = new Modal();
saveName.formValidAndNext('.edit-name', '.error', '.save-date-name', '.data-saved');
/*переход к оповещению что данные изменены почта*/
var saveMail = new Modal();
saveMail.formValidAndNext('.edit-mail', '.error', '.save-date-mail',  '.data-saved');


/*переход к авторизации после регистрации*/
var saveMail = new Modal();
saveMail.formValidAndNext('.user-registration', '.error', '.save-reg-btn', '.form-index');

});











