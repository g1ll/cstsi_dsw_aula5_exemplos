<?php
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: application/json');
//header("Content-Type: application/json"); 
$name = filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING); //filtra entrada
$alt = filter_input(INPUT_POST,'altura',FILTER_SANITIZE_STRING); //filtra entrada
$peso = filter_input(INPUT_POST,'peso',FILTER_SANITIZE_STRING); //filtra entrada
$imc = filter_input(INPUT_POST,'imc',FILTER_SANITIZE_STRING); //filtra entrada

echo "RESPONSE:\n";
var_dump([$_POST, $_FILES]);

if(isset($_FILES['arquivo'])){
    $arquivo = $_FILES['arquivo'];
    $temporario = $arquivo['tmp_name'];
    $arquivo_salvo = __DIR__."/upfile/".$arquivo['name'];
    if(move_uploaded_file($temporario,$arquivo_salvo)){
        echo "\n<br>Arquivo $arquivo[name] Salvo!";
    }else{
        echo "\n<br>Erro ao salvar $arquivo[name] !";
    }
}

if ($name && $alt && $peso  && $imc) {//Testa se digitaram todos os campos
   @$conn = mysqli_connect('localhost',  'id2581340_1mc', '1mc@g1ll', 'id2581340_imc');
    if(!$conn)
    $conn = mysqli_connect('localhost', 'root', 'r00t', 'imcApi');
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
        $id = mysqli_insert_id($conn);
        $foto = $arquivo['name'];
        $sql = "INSERT INTO foto(idImc,nome) values($id,'$foto')";
        $resultado = mysqli_query($conn, $sql);
        if($resultado!=null){
            echo "Imagem salva!";
        }else{
            echo "Erro ao salvar arquivo no banco!";
            var_dump($sql);
            unlink($arquivo_salvo);
        }
    }else{
        $mensagem = "Erro ao inserir dados!!";
    }
}else { 
    $mensagem = "Informe todos os campos!!";
}
echo $mensagem;
?>