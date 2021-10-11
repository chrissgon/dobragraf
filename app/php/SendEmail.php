<?php

require_once "../vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$args = [
  ""
]

$template = template("template.php", $args);

try {
    $mail = new PHPMailer(true);
    // $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host       = "smtp.gmail.com";
    $mail->SMTPAuth   = true;
    $mail->Username   = "testeemail458@gmail.com";
    $mail->Password   = "testeemail2020";
    $mail->Port       = 587;
    $mail->CharSet    = "UTF-8";

    $mail->setFrom('dobragraf@dobragraf.com.br', 'Dobragraf');
    $mail->addAddress("christopher.goncalves2002@gmail.com", "Christopher");
    
    $mail->isHTML(true);
    $mail->Subject    = "Site - Orçamento";
    $mail->Body       = $template;

    $mail->send();
    echo json_encode(true);
} catch (Exception $e) {
    echo json_encode(false);
}


function template($file, $args){
  extract($args);
  
    ob_start();
      include $file;
    return ob_get_clean();
}