<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json"); 
header('Access-Control-Allow-Methods: *');
$metodo = strtolower($_SERVER['REQUEST_METHOD']);
$resultado = false;

if($metodo==='delete'){
    $data = json_decode(file_get_contents("php://input"));
    if($data){
        $id = $data->id;
       $resultado = deletar($id);
       if($resultado) $msg="Registro $id excluido!";
       else $msg="Erro ao deletar registro de id=$id!";
    }else{
        $id = filter_input(INPUT_GET, 'd',FILTER_SANITIZE_NUMBER_INT);
        if($id){
            $resultado = deletar($id);
            if($resultado) $msg="Registro $id excluido!";
            else $msg="Erro ao deletar registro de id=$id!";
        }else{
            $msg='Erro ao capturar dados JSON!';
        }
    }
    echo json_encode(['sucesso'=>$resultado,'info'=>$msg,'acao'=>'deletar','id'=>$id]);
}elseif($metodo==='put'){
    $data = json_decode(file_get_contents("php://input"));
    if($data){
        $resultado = atualizar($data);
        if($resultado)$msg="Registro $data->id atualizado!";
        else $msg="Erro ao atualizar registro de id=$data->id!";
    }else{
        $msg='Erro ao capturar dados JSON!';
    }
    echo json_encode(['sucesso'=>$resultado,'info'=>$msg,'acao'=>'atualizar','id'=>$data->id]);
}else{
    echo json_encode(['sucesso'=>false,'info'=>$msg,'acao'=>'erro','info'=>'Aceita apenas PUT/DELETE']);
}

function deletar($id){
    require_once 'connect.php';
     $id = filter_var($id,FILTER_SANITIZE_NUMBER_INT);
     $sql = "DELETE FROM imc WHERE id = $id";
     $resultado = mysqli_query($conn, $sql);
     return mysqli_affected_rows($conn);    
}     

function atualizar($obj){
   require_once 'connect.php';
    
    $name = filter_var($obj->name,FILTER_SANITIZE_STRING); //filtra entrada
    $alt = filter_var($obj->altura,FILTER_SANITIZE_NUMBER_FLOAT,FILTER_FLAG_ALLOW_FRACTION); //filtra entrada
    $peso = filter_var($obj->peso,FILTER_SANITIZE_NUMBER_FLOAT,FILTER_FLAG_ALLOW_FRACTION); //filtra entrada
    $imc = $peso/$alt**2;
//    var_dump([$name,$alt,$peso,$imc]);die;
    $sql = "UPDATE imc SET name='$name',"
            . " altura='$alt', peso='$peso', imc=$imc WHERE id = $obj->id";
    $resultado = mysqli_query($conn, $sql);
    return $resultado;
}
