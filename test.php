<?php

require_once('PHPMailer/PHPMailerAutoload.php');


$mail = new PHPMailer();

$mail->isSMTP();
$mail->SMTPAuth();
$mail->SMTPSecure = 'ssl';
$mail->Host ='smtp.gmail.com';
$mail->Port = '465';
$mail->isHTML();
$mail->Username = 'pchistory.contact@gmail.com';
$mail->Password ='Thanabal44';
$mail->SetFrom('no-reply@howcode.org');
$mail->Subject = 'Hello World';
$mail->Body = ' A test email';
$mail->AddAddress('maruthan@outlook.com');

$mail->send();
?>