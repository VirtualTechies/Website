<?php
// Fetching Values from URL.
$name = $_POST['user'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $name;
	// To send HTML mail, the Content-type header must be set.
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From:' . $email. "\r\n"; // Sender's Email
	$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
	$template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
	. '<br/>Thank you...! For Contacting Us.<br/><br/>'
	. 'Name:' . $name . '<br/>'
	. 'Email:' . $email . '<br/>'
	. 'Message:' . $message . '<br/><br/>'
	. 'This is a Contact Confirmation mail.'
	. '<br/>'
	. 'We Will contact You as soon as possible .</div>';
	$sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
	// Message lines should not exceed 70 characters (PHP rule), so wrap it.
	$sendmessage = wordwrap($sendmessage, 70);
	// Send mail by PHP Mail Function.
	mail("ankit77parekh@gmail.com", $subject, $sendmessage, $headers);
	echo "Your Query has been received, We will contact you soon.";
?>