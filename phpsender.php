<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message sent</title>
    <link rel="stylesheet" href="portfoliostyle.css">
</head>
<body>
<?php
    if(isset($_POST['email']) && $_POST['email'] !='') {
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $userEmail = $_POST['email'];
            $subjectName = htmlspecialchars($_POST['subject']);
            $messageContent = htmlspecialchars($_POST['message']);
            $messageContent = wordwrap($messageContent, 70, "\r\n");
            $to = 'akseli.miettinen@edu.bc.fi';   

            $message = '';   
            $message .= "From: " . $userEmail . "\r\n";   
            $message .= "Subject: " . $subjectName . "\r\n";   
            $message .= 'Message: ' . $messageContent . "\r\n";   
            $sent_status = mail($to, $subjectName, $message);
        }
    } else {
        echo "<h1>Sender email is not set or it's empty</h1>";
    }

    if ($sent_status) {
        echo '<h1>Following message was delivered:</h1>';
        echo '<pre>';
        print_r (htmlentities($message));
        echo '</pre>';
        
    
    } else {
        echo '<h1>Something went wrong 😥</h1>';
    }
?>
<div class = 'return'>
<a href="https://akselinkoodit.github.io/Portfolio/">Click here to get back</a>
</div>  
</body>
</html>