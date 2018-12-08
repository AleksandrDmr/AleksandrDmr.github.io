$(document).ready(function() {

	$("form").submit(function(e) {
		if($(this).valid()){
			$.ajax({
				type: "POST",
				url: "../mail/mail.php",
				data: $(this).serialize()
			}).done(function() {				
				$(this).find("input").val("");
			});
			return false;

		}
		
	});
