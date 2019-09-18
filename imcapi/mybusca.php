<?php
//header('Content-Type: charset=UTF-8');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
//Alterar dados do user e password
@$conn = mysql_connect('localhost', 'id2581340_1mc', '1mc@g1ll', 'id2581340_imc');
if(!$conn)
    $conn = mysql_connect('localhost', 'root', 'r00t', 'imcApi');

$busca = (isset($_GET['busca']))?"WHERE name LIKE '%$_GET[busca]%'":"";

$sql = "SELECT * FROM imc $busca ORDER BY id DESC Limit 10"; //Limita até as primeiras cinco posições
//var_dump($sql);die;
$result = mysql_query($conn, $sql);
if ($result&&mysql_num_rows($result) > 0) { 
    $jsonData = mysql_fetch_all($result,MYSQLI_ASSOC);
   //sleep(3);
   echo"<pre>";
   var_dump($jsonData);
   echo"/<pre>";die;
   echo json_encode($jsonData);
    mysqli_free_result($result);
    mysqli_close($conn); 
}else{
    echo mysqli_error();
    echo json_encode([]);
}
?>