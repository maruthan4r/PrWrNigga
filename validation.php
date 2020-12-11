<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/transition.css">
    <link rel="stylesheet" href="style/styleform.css">
    <link rel="stylesheet" type="text/css" href="style/stylenav.css">
    <meta charset="utf-8">
    <script defer src="script/transition.js"></script>
    <script defer src="script/navbar.js"></script>
    <title>Formular</title>
</head>
<body>
<header>
        <nav>
            <div class="logo">
                <h4><img src="img/24S2.gif" alt="PC" width="50" height="50"></h4>
            </div>
            <div>
                <h4 class="logo">Geschichte des modernen Computers</h4>
            </div>
            <ul class="links">
                <li>
                    <a href="index.html" class="button" id="home">Home</a>
                </li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </header>

<div class="response">
    <?php

    $message = 'Absender: '.$_GET['mail']."Nachricht: ".$_GET['message'];

require_once('PHPMailer/PHPMailerAutoload.php');


$mail = new PHPMailer();

$mail->isSMTP();
$mail->SMTPAuth=true;
$mail->SMTPSecure = 'ssl';
$mail->Host ='smtp.gmail.com';
$mail->Port = '465';
$mail->isHTML();
$mail->Username = 'pchistory.contact@gmail.com';
$mail->Password ='Thanabal44';
$mail->SetFrom('no-reply@howcode.org');
$mail->Subject = 'Kontaktformular';
$mail->Body = $message;
$mail->AddAddress('maruthan@outlook.com');

$mail->send();

if (isset($_GET['name'])){
    if($mail->send()){
    $name = "Vielen Dank für Ihre Nachricht ".$_GET['name'];
    }
}else{
    $name = "Etwas ist schiefgelaufen!";
}

echo "<p class='responseText'>$name</p>";
?></div>

</body>
</html>