<?php

//header('Content-Type: charset=UTF-8');
//header('Access-Control-Allow-Headers: *');
//  header('Content-Type: application/json');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
//Alterar dados do user e password

include_once './listar.php';

function debug($var){
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
    die;
}

//debug([$_REQUEST,'method'=>$_SERVER['REQUEST_METHOD']]);

$method =  $_SERVER['REQUEST_METHOD'];

//debug($method); 

if($_GET){
    $query = $_GET['q'];
    if($query==="listar")
        listar();
}

?>