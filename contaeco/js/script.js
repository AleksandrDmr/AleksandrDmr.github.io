$(document).ready(function() {
		var patternMail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var patternPsw = /[A-Za-z0-9]{6,}/; 
		var patternName = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
		var patternNum = /^\d+$/; 

	
		var flagMail = true;
		var flagUserId = true;
	function FormValidation() {
		

		/*Валидация емейла*/
		this.validationMail = function(input, messageError,objclassError, otherInput) {
			$(input).blur(function() {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if($(this).val() != '') {
					if(pattern.test($(this).val())){
						flagMail = true;
						if(flagUserId) {
							$(messageError).removeClass(objclassError.messageErrorClass);
							$(this).removeClass(objclassError.inputClass);
							$(otherInput).removeClass(objclassError.inputClass);
						}
								
					} 
					else {
						
						$(messageError).addClass(objclassError.messageErrorClass);
						$(this).addClass(objclassError.inputClass);
						$(otherInput).addClass(objclassError.inputClass);
						flagMail = false;
					}
				}
				else {
						
					$(messageError).addClass(objclassError.messageErrorClass);
					$(this).addClass(objclassError.inputClass);
					$(otherInput).addClass(objclassError.inputClass);
				}


			});
		}
		/*Валидация id пользователя на ввод только чисел*/
		this.validationID = function(input, messageError,objclassError, otherInput) {
			$(input).blur(function() {
				var pattern = /^\d+$/;
				if($(this).val() != '') {
					if(pattern.test($(this).val())){
						flagUserId = true;
						if(flagMail) { 
							$(messageError).removeClass(objclassError.messageErrorClass);
							$(this).removeClass(objclassError.inputClass);
							$(otherInput).removeClass(objclassError.inputClass);
						}
						
						
						
					} 

					else {
						
						$(messageError).addClass(objclassError.messageErrorClass);
						$(this).addClass(objclassError.inputClass);
						$(otherInput).addClass(objclassError.inputClass);
						flagUserId = false;
					}
				} 

				else {
										
					$(messageError).addClass(objclassError.messageErrorClass);
					$(this).addClass(objclassError.inputClass);
					$(otherInput).addClass(objclassError.inputClass);
					flagUserId = false;
				}
			});
		}



		this.regValidation = function(input, messageError, messageGood, messageShow, objClassInput, pattern) {
			$(input).blur(function() {
					
				
				if($(this).val() != '') {
					if(pattern.test($(this).val())){
						$(this).parent().find(messageError).removeClass(messageShow);
						$(this).removeClass(objClassInput.objError);
						$(this).addClass(objClassInput.objGood);
						$(this).parent().find(messageGood).addClass(messageShow);
											
					} 
					else {
						
						$(this).parent().find(messageError).addClass(messageShow);
						$(this).addClass(objClassInput.objError);
						$(this).removeClass(objClassInput.objGood);
						$(this).parent().find(messageGood).removeClass(messageShow);
											
					}
				}
				else {
						
						$(this).parent().find(messageError).addClass(messageShow);
						$(this).addClass(objClassInput.objError);
						$(this).removeClass(objClassInput.objGood);
						$(this).parent().find(messageGood).removeClass(messageShow);
											
				}


			});
		}

		this.matchValue = function(input1, input2) {

				$(input1).blur(function() {

					if($(input1).val() == $(input2).val()) {
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

				});



				$(input2).blur(function() {

					if($(input1).val() == $(input2).val()) {
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

				});
				

		}

					


		

}	


	/*проверка  имени при регистрации на правильность ввода*/
	var regPswValid = new FormValidation();
	regPswValid.regValidation('#reg-name', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error_border-red'}, patternName);

	/*проверка  id пользователя при регистрации на правильность ввода*/
	var regPswValid = new FormValidation();
	regPswValid.regValidation('#reg-user-id', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error_border-red'}, patternNum);

	/*проверка  мейл при регистрации на правильность ввода*/
	var regMailValid = new FormValidation();
	regMailValid.regValidation('#reg-mail', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error_border-red'}, patternMail);

	/*проверка  пароля при регистрации на правильность ввода*/
	var regPswValid = new FormValidation();
	regPswValid.regValidation('#reg-password', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error_border-red'}, patternPsw);

	/*проверка совпадения мейл при регистрации*/
	var mailRegMatch = new FormValidation();
	mailRegMatch.matchValue('#reg-mail', '#rep-reg-mail');
	/*проверка совпадения пароля при регистрации*/
	var pswRegMatch = new FormValidation();
	pswRegMatch. matchValue('#reg-password', '#rep-reg-password');

	
	/*Валидация id пользователя и мейла восстановления пароля*/
	var recoverPswMail = new FormValidation();
	recoverPswMail.validationMail('#mail-recover', '.wrong-recover', {messageErrorClass:'show', inputClass:'input-error'}, '#user-id-recover');

	var recoverPswId = new FormValidation();
	recoverPswId.validationID('#user-id-recover', '.wrong-recover', {messageErrorClass:'show', inputClass:'input-error'}, '#mail-recover');


	/*Валидация Id пользователя при входе*/
	var recoverSignInId = new FormValidation();
	recoverSignInId.validationID('#user-id-sign-in', '.wrong-sign-in', {messageErrorClass:'show', inputClass:'input-error'}, '#psw-sign-in');




	

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

}
/*переход к авторизации*/
var signIn = new Modal();
signIn.nextModal('.sign-in-btn', '.form-index', '.form-sign-in');
/*переход к восстановлению пароля*/
var recoverPsw = new Modal();
recoverPsw.nextModal('.form__recovery-btn', '.form-sign-in', '.form-recover');

/*переход от восстановления пароля к сообщению*/
var recoverPswMessage = new Modal();
recoverPswMessage.nextModal('.save-recover', '.form-recover', '.data-sent');

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
NameValid.regValidation('#new-name', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error_border-red'}, patternName);

/*проверка совпадения имени при смене*/
var NameMatch = new FormValidation();
	NameMatch. matchValue('#new-name', '#repeat-name');


/*переход к изменению почты*/
var editMail = new Modal();
editMail.nextModal('.edit-mail-btn', '.user-cabinet', '.edit-mail');
/*отмена  изменения почты*/
var editMailCancel = new Modal();
editMailCancel.nextModal('.edit-mail-cancel', '.edit-mail', '.user-cabinet');

/*проверка  почты при смене на правильность ввода*/
var mailValid = new FormValidation();
mailValid.regValidation('#new-mail', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error_border-red'}, patternMail);

/*проверка совпадения почты при смене*/
var mailMatch = new FormValidation();
	mailMatch. matchValue('#new-mail', '#repeat-mail');	




/*переход к изменению пароля*/
var editPsw = new Modal();
editPsw.nextModal('.edit-psw-btn', '.user-cabinet', '.edit-password');
/*отмена  изменения пароля*/
var editPswCancel = new Modal();
editPswCancel.nextModal('.edit-psw-cancel', '.edit-password', '.user-cabinet');

/*проверка  пароля при смене на правильность ввода*/
var pswValid = new FormValidation();
pswValid.regValidation('#new-password', '.not-valid', '.good', 'show', {objGood: 'input-good', objError: 'input-error_border-red'}, patternPsw);

/*проверка совпадения пароля при смене*/
var pswMatch = new FormValidation();
	pswMatch. matchValue('#new-password', '#repeat-password');		


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
authorization.nextModal('.save-sign-in', '.form-sign-in', '.user-cabinet');


/*переход к оповещению что данные изменены пароль*/
var savePsw = new Modal();
savePsw.nextModal('.save-date-psw', '.edit-password', '.data-saved');

/*переход к оповещению что данные изменены имя*/
var saveName = new Modal();
saveName.nextModal('.save-date-name', '.edit-name', '.data-saved');
/*переход к оповещению что данные изменены почта*/
var saveMail = new Modal();
saveMail.nextModal('.save-date-mail', '.edit-mail', '.data-saved');


/*переход к авторизации после регистрации*/
var saveMail = new Modal();
saveMail.nextModal('.save-reg-btn', '.user-registration', '.form-index');

});











