<?php   
    require("./mailing/mailfunction.php");

    $name = $_POST["name"];
    $phone = $_POST['phone'];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $body = "<ul><li>Name: ".$name."</li><li>Phone: ".$phone."</li><li>Email: ".$email."</li><li>Message: ".$message."</li></ul>";

    // Send the same query to two inboxes
    $statusPrimary = mailfunction("karthikintelligence@gmail.com", "Company", $body); // primary receiver
    $statusSecondary = mailfunction("skarthi.sns@gmail.com", "Company", $body);       // secondary receiver

    $status = $statusPrimary && $statusSecondary;

    if($status)
        echo '<center><h1>Thanks! We will contact you soon.</h1></center>';
    else
        echo '<center><h1>Error sending message! Please try again.</h1></center>';    
?>