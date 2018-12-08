<?php

$recepient = "mail";
$sitename = "sitename";
	$name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$subject = trim($_POST["subject"]);
	$message_form = trim($_POST["message"]);

	$message = "Имя: $name \n Почта: $phone \n Тема: $subject \n Сообщение: $message_form"  ;




$pagetitle = "Новая заявка с сайта $sitename";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");