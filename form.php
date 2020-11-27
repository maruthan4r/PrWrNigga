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
    <script src="script/form.js"></script>
    <title>Formular</title>
</head>

<div class="transition transition-2 is-active">
    <div class="loadinggif">
        <h4><img src="img/loading.gif" alt="loading" width="100" height="100"></h4>
    </div>
</div>

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
                <a href="index.html" class="button" id="home">HOME</a>
            </li>
            <li>
                <a href="quiz.html" class="button">Quiz</a>
            </li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</header>
<div class="formTitle">
    <h1 class="form">Kontaktformular</h1>
</div>

<div class="form">


    <form class="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <p class="form">Ihr name:</p>
        <p class="form"><input class="form" type="text" name="name"></p>
        <div class="error" id="nameErr"></div>

        <p class="form">Ihre E-Mail:</p>
        <p class="form"><input class="form" type="email" name="mail" required="required"></p>
        <div class="error" id="emailErr"></div>
        <p class="form" id="nachricht">Ihre Nachricht:</p>
        <textarea class="messageBox" name="message" placeholder="Ihre Nachricht"></textarea>
        <p class="form"><input type="submit" class="form" value="Abschicken" name="senden"></p>
    </form>

</div>

<?php
if (isset($_POST['name'])){
    echo $_POST['name'];
}
?>
</html>