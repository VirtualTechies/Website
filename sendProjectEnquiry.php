<?php
// Fetching Values from URL.
$name = $_POST['user'];
$email = $_POST['email'];
$message = $_POST['message'];
$companyName = $_POST['companyName'];
$subject = 'Visitor Contact Information';
$userSubject = 'Greetings From Virtual-Techhies Team';

	// To send HTML mail, the Content-type header must be set.
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From:' . $email. "\r\n"; // Sender's Email
	$userheaders = 'MIME-Version: 1.0' . "\r\n";
	$userheaders .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$userheaders .= 'From:' . "ankit77parekh@gmail.com". "\r\n"; // Sender's Email
	$template = '<div style="padding:50px; color:black;">Hello Virtual-Techhies team,<br/>'
	. '<br/>A visitor on your website has send some message through Contact Us Page.<br/><br/>'
	. 'Name:' . $name . '<br/>'
	. 'Email:' . $email . '<br/>'
	. 'Message:' . $message . '<br/><br/>'
	. 'Company Name:' . $companyName . '<br/><br/>'
	. '<br/>'
	. '</div>';
	$sendmessage = "<div style=\"background-color:whitesmoke; color:black;\">" . $template . "</div>";
	// Message lines should not exceed 70 characters (PHP rule), so wrap it.
	$sendmessage = wordwrap($sendmessage, 70);
	// Send mail by PHP Mail Function.

	$userTemplate = '<div style="padding:50px; color:black;">Hello '.$name.',<br/>'
	. 'Greetings From Virtual-Techhies Team'
	. '<br/>Our team Will Contact you shortly<br/><br/>'
	. '<br/>'
	. '</div>';

	$senduser = "<div style=\"background-color:whitesmoke; color:black;\">" . $userTemplate . "</div>";
	// Message lines should not exceed 70 characters (PHP rule), so wrap it.
	$senduser = wordwrap($senduser, 70);

	mail("ankit77parekh@gmail.com", $subject, $sendmessage, $headers,'-fankit77parekh@gmail.com');
	mail("sagarera89@gmail.com", $subject, $sendmessage, $headers,'-fsagarera89@gmail.com');
	mail("support@thevirtualtechies.com", $subject, $sendmessage, $headers,'-fsupport@thevirtualtechies.com');
	mail("info@thevirtualtechies.com", $subject, $sendmessage, $headers,'-finfo@thevirtualtechies.com');
	mail($email, $userSubject, $senduser, $userheaders,'-f'+$email);
	echo "Your Query has been received, We will contact you soon.";
?>