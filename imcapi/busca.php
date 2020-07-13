<?php
header('Content-Type: charset=UTF-8');
header('Content-Type: Application/json');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
//Alterar dados do user e password
require_once 'connect.php';

//$busca=(isset($_GET['busca']))?$_GET['busca']:'';//Vulnerável à injeção de SQL ("termoDeBusca' or 1=1; --")

$busca = filter_input(INPUT_GET,'busca',FILTER_SANITIZE_STRING);//Filtro contra ataques de injeção de SQL

$busca = ($busca)?"WHERE name LIKE '%$busca%'":"";
//var_dump($busca);die;
if($busca){
$sql = "SELECT * FROM imc $busca ORDER BY id DESC Limit 10"; //Limita até as primeiras dez posições
//var_dump($sql);die;
$result = mysqli_query($conn, $sql);
if ($result&&mysqli_num_rows($result) > 0) { 
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
   //sleep(3);
   $jsonData = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
   if(!$jsonData){//CASO OCORRA ERRO EM CARACTERES ESPECIAIS COM UTF-8 FORMAT
   	array_walk_recursive($data, function(&$item, $key){
            if(!mb_detect_encoding($item, 'utf-8', true)){
                    $item = utf8_encode($item);
            }
          });
	//TENTA CONVERTER EM JSON NOVAMENTE
   	$jsonData = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
   }
   //SE AINDA NÃO CONSEGUIR CONVERTER EM JSON RETORNA UM JSON COM INFO DO ERRO
   if(!$jsonData){
	json_encode(['info'=>json_last_error_msg()]);
    }else{
    	echo $jsonData;
    }
    //var_dump($result);
    mysqli_free_result($result);
    mysqli_close($conn); 
}else{
	if(!$result){
	   echo "ERRO:";
    	   echo mysqli_error($conn);
	   echo"\n";
	   var_dump($result);
	   echo"\n";die;
	   
	}
    echo json_encode(['info'=>'Nenhum registro encontrado!']);
}
}else{
	echo json_encode(['info'=>'Informe um termo para a busca!']);
}
?>
