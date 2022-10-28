<?php
// prémiere ligne du script, pour accéder à la session
session_start();
include "../../../connexion/db.php";



// 1. Récuperer les données des games
$UserID = $_POST['UserID'];
$level= $_POST['level'];
$Succeed=$_POST['Succeed'];
$category=$_POST['category'];



// Chercher les données dans la BD
try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
} catch (Exception $e) {
    // jamais en production car ça montre des infos
    // sensibles
    echo $e->getMessage();
    die();
}

$sql = "SELECT * FROM savegame WHERE  UserID=:UserID";
$stmt = $cnx->prepare($sql);
$stmt->bindValue(":UserID", $UserID);
$stmt->bindValue(":level", $level);
$stmt->bindValue(":Succeed", $Succeed);
$stmt->bindValue(":category", $category);



$stmt->execute();
$res = $stmt->fetch(PDO::FETCH_ASSOC);

$UserIDBD = $res['UserID'];
$levelBD = $res['level'];
$SucceedBD = $res['Succeed'];
$categoryBD= $res['category'];


?>
