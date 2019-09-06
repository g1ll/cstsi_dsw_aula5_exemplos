//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
const fetch = require('node-fetch');
const apiUrl = 'http://g1ll.000webhostapp.com/ajaxphp/consulta.php';
console.clear()
console.log(`Recebendo dados de ${apiUrl}`)
fetch(apiUrl)
    .then(response => {
        return response.json();
    }).then(data => {
        // console.log(data);
        if (data) {
            console.table(data)
        }
    })
    .catch(error => {
        console.log(`Erro:${error.message}`)
    });