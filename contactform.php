<?php
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $visitor_email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    $email_body = "User Name: $name\nUser Email: $visitor_email\nSubject: $subject\nUser Message: $message\n";
    $to = "mktolt@mkfoto.lt";
    $headers = "From: $visitor_email \r\nReply To: $visitor_email \r\n";

    if(mail($to,$subject,$email_body,$headers)){
        echo 1;
    } else{
        echo 0;
    }
?>
