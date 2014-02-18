<?php
if(isset($_POST['email']) && $_POST['email2'] == 'kludge_pre@kludge.it') {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "marco@landoebadon.com";
		// $email_to = "curromatteo@gmail.com";

    $email_subject = "IMPORTANTE - Contatto da landoebadon.com";


    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['name']) ||
       !isset($_POST['cognome']) ||
        !isset($_POST['email']) ||
        !isset($_POST['messaggio'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $name = $_POST['name']; // required
    $cognome = $_POST['cognome']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['messaggio']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Contatto ricevuto da landoebadon.com.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Nome: ".clean_string($name).' '.clean_string($cognome)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Testo messaggio: ".clean_string($comments)."\n";


// create email headers
$headers = 'From: info@landoebadon.com'."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers);
?>
 
<!-- include your own success html here -->
 
<script>
alert('Thank you for contacting us. We will be in touch with you very soon.')
</script>
 
<?php
}
?>
<!DOCTYPE html>
<html lang="it">
<head>
	<title>LandoeBadon</title>
	<meta charset="utf-8">
	<meta name="robots" content="index, follow" />

	<meta name="author" content="Matteo Currò - curromatteo@gmail.com">

	<!-- Dublin Core Metadata : http://dublincore.org/ -->
	<meta name="DC.title" content="Project Name">
	<meta name="DC.subject" content="What you're about.">
	<meta name="DC.creator" content="Matteo Currò - curromatteo@gmail.com">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/tabulous.css">
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>

<body>
<div class="wrapper">