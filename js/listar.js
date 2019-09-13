//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
const fetch = require('node-fetch');
 const apiUrl = 'http://g1ll.000webhostapp.com/ajaxphp/consulta.php';
//const apiUrl = 'http://localhost/2018/cpw2/ajaxphp_2018/consulta.php';
console.clear()
console.log(`Conectando a ${apiUrl}`)

//fetch(url).then(resposta).then(data)
fetch(apiUrl)
    .then(response => {
        return response.json();
    }).then(data => {
        console.log('Recebendo dados!');
        // console.log(data);
        if (data) {
            console.table(data)
        }
    })
    .catch(error => {
        console.log(`Erro ao conectar:\n\n${error.message}`)
    });