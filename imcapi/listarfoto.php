<?php 

    @$conn = mysqli_connect('localhost', 'id2581340_1mc', '1mc@g1ll', 'id2581340_imc');
if(!$conn)
    $conn = mysqli_connect('localhost', 'root', 'r00t', 'imcApi');
$sql = "SELECT id,name,altura,peso,imc,foto.nome FROM imc LEFT JOIN foto ON foto.idImc = imc.id ORDER BY id DESC Limit 5"; //Limita até as primeiras cinco posições

$result = mysqli_query($conn, $sql);
if($result){
if (mysqli_num_rows($result) > 0) { 
 
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
   //sleep(3);
//    $jsonData = null;
//    var_dump($jsonData);
//    die;

    // $jsonData = array_map(function($row){
    //     if($row['nome']==null)
    //         $row['nome'] = 'default.jpg';
    //     return $row;
    // },$rows);

    foreach($rows as $row){
        if($row['nome']==null)
            $row['nome'] = 'default.jpg';
        $jsonData[] = $row;
    }

    echo json_encode($jsonData);
    
    mysqli_free_result($result);
}else{
    echo json_encode([]);
}
}else{
    echo "Erro: ".mysqli_error($conn);
}
if($conn)
    mysqli_close($conn); 
?>