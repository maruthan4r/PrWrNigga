<!DOCTYPE html>
<html lang="de">

<head>
    <link rel="stylesheet" type="text/css" href="style/style.css" />
    <link rel="stylesheet" type="text/css" href="style/transition.css">
    <link rel="stylesheet" href="style/stylenav.css">
    <meta charset="utf-8">
    <title>Computer</title>
    <script defer src="script/transition.js"></script>
    <script defer src="script/navbar.js"></script>
    <script defer src="script/timeline.js"></script>
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
                    <a href="quiz.html" class="button transitionbutton">Quiz</a>
                </li>
                <li>
                    <a href="form.php" class="button transitionbutton">Kontakt</a>
                </li>
                <li>
                    <a class="button" onclick="darkmode()">DARKMODE</a>
                </li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </header>

<div class="listBox">

<?php
$servername = "localhost";
$username = "pchistory";
$password = "Thanabal44";

// Create connection
$conn = new mysqli($servername, $username, $password,'computers_main');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


$sql = "SELECT model, Jahr FROM computers";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["model"]. " - Jahr: ". $row["Jahr"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close()
?>
</div>



    <script>
        function darkmode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
            document.getElementsByclassName("text").classList.toggle("dark-mode");
        }
    </script>
</body>
</html>