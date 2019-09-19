const scanf = require('scanf');
const axios = require('axios');
const apiUrl = 'http://localhost/2019/tsi/dsw/aula5/imcapi/busca.php';

console.log("Informe o termo de busca:")
let busca = scanf("%s");


console.clear()
console.log(`Conectando a ${apiUrl}`)


    //tentando configurar cors com serve php -S
    //let opt = {proxy: {
    //host: 'localhost',
    //port: 9000}, crossdomain: true,mode:'cors'}
    //axios.get(apiUrl,opt)...

axios.get(apiUrl+'?busca='+busca)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp.data) {
            console.table(resp.data)
        }
    })
    .catch(error => {
        console.log(`Erro ao conectar:\n\n${error.message}`)
        console.log(error)
    });
