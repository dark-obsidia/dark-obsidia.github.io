<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = 'abel.lu04@gmail.com';
  $headers = "From: $name <$email>" . "\r\n";
  $body = "Subject: $subject\n\n$message";

  if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($name) && !empty($message)) {
    if (mail($to, $subject, $body, $headers)) {
      echo 'Thank you for your message!';
    } else {
      echo 'There was a problem sending your message.';
    }
  } else {
    echo 'Please enter a valid name, email, and message.';
  }
}
?>