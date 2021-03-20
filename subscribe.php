<?php
if(isset( $_POST['subemail']))
$subemail = $_POST['subemail'];

$content="The following Email has submitted a Subscription request: $subemail";
$recipient = "hello@synergy5consulting.com";

mail($recipient, "Subscribe Request", $content, "From:subscription@synergy5consulting.com") or die("Error!");
header("Location: index.html");
?>