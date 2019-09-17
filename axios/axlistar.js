const axios = require('axios');
const apiUrl = 'http://g1ll.000webhostapp.com/ajaxphp/consulta.php';
//const apiUrl = 'http://localhost/2018/cpw2/ajaxphp_2018/consulta.php';
//const apiUrl = 'http://localhost:9090/consulta.php';//testando servidor Builtin PHP -S localhost:9090
console.clear()
console.log(`Conectando a ${apiUrl}`)

    //tentando configurar cors com serve php -S
    //let opt = {proxy: {
    //host: 'localhost',
    //port: 9000}, crossdomain: true,mode:'cors'}
    //axios.get(apiUrl,opt)...

axios.get(apiUrl)
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