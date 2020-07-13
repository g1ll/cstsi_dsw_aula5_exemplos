<?php 
header("Content-Type","application/json");
function listar(){
    require_once 'connect.php';
$sql = "SELECT * FROM imc ORDER BY id DESC Limit 10"; //Limita até as primeiras cinco posições

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) { 
 
    $jsonData = mysqli_fetch_all($result,MYSQLI_ASSOC);
   //sleep(3);
//    $jsonData = null;
//    var_dump($jsonData);
//    die;
   echo json_encode($jsonData);
    mysqli_free_result($result);
    mysqli_close($conn); 
}else{
    echo json_encode([]);
}
}
?>
