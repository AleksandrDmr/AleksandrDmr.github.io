$(document).ready(function() {

	$(".first-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".first-form").trigger("reset");
		});
		return false;
	});
	
});