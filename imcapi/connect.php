<?php
include "config.php";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) {
	$conn = mysqli_connect('localhost', 'root', 'r00t', 'imcApi');
	if(!$conn){
		echo "<br><b>Erro ao conectar ao MySQL: (".mysqli_connect_errno().") ";
		echo mysqli_connect_error()."</b>";
		die; 
	}
}
