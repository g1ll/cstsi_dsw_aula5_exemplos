<?php
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: application/json');
//header("Content-Type: application/json"); 
$name = filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING); //filtra entrada
$alt = filter_input(INPUT_POST,'altura',FILTER_SANITIZE_STRING); //filtra entrada
$peso = filter_input(INPUT_POST,'peso',FILTER_SANITIZE_STRING); //filtra entrada
//$imc = filter_input(INPUT_POST,'imc',FILTER_SANITIZE_STRING); //filtra entrada
 

if ($name && $alt && $peso) {//Testa se digitaram todos os campos
    $imc = $peso/$alt**2;
    require_once 'connect.php';
    //Alterar dados do user e password
    //$conn = mysqli_connect("host=localhost port=3306 dbname=snake user=root password=root");
    //Cria o comando SQL e guarda na variável $sql
    $sql = "INSERT INTO imc(name,altura,peso,imc) VALUES('$name',$alt,$peso,$imc)";

    //Chama a função pg_query() que executa o comando SQL da variável $sql na conexão
    // representada pela variável $conn. Retorna o resultado na variável $resultado
    $resultado = mysqli_query($conn, $sql);

    //Testa a variável $variável, um valor NULL representa erro na execução do SQL
    if ($resultado != null){
        $mensagem = "Tabela Atualizada!!";
    }else{
        $mensagem = "Erro ao inserir dados!!";
    }
}else {
    $mensagem = "Informe todos os campos!!";
}
echo $mensagem;
?>
