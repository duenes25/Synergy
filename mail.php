<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['phone']))
$phone = $_POST['phone'];
if(isset( $_POST['message']))
$message = $_POST['message'];

$content="Name: $name \n Email: $email \n Message: $message";
$recipient = "hello@synergy5consulting.com";

mail($recipient, "Contact Us Request", $content, "From:webmaster@synergy5consulting.com") or die("Error!");
header("Location: contact.html");
?>