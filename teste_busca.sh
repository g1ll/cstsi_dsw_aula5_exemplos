#!/bin/sh
#Shell script para testar API PHP
#dependências: node, curl
clear;

#echo $1;exit;

apiurl="http://localhost/2019/tsi/dsw/aula5/imcapi"

(echo "module.exports="&&curl -G "$apiurl/busca.php" --data-urlencode "busca=$1") > resposta.js;
 
node -e "console.table(require('./resposta.js'))"
