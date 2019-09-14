//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');

console.clear();

fetch('http://g1ll.000webhostapp.com/ajaxphp/consulta.php')
    .then(response  =>response.json())
    .then(data  => {
        console.log(data);
        if (data.length) {
            let table = '<table border=1>'
            data.forEach(obj => {
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            document.body.innerHTML += table + '</table>'
        } else {
            document.body.innerHTML = 'Sem registros!'
        }
    })
    .catch(error => {
        console.log(`Erro:${error}`)
        document.body.innerHTML = 'Falha na comunnicação!!'
    });