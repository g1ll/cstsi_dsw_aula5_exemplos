//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');
document.cadastro.onsubmit = function(e) {
    e.preventDefault();

    fetch('http://g1ll.000webhostapp.com/ajaxphp/insereimc.php', {
        method: 'POST',
        body: new FormData(this),
        mode: 'cors'
    }).then(response => {
        if (response.status == 200) {
            return response.text();
        } else {
            throw new Error(`Erro ao completar a requisiçao ${response.statusText}`)
        }
    }).then(texto => {
        console.log(texto)
        alert(texto);
    }).catch(error => {
        console.log(`${error.message}`)
        alert(`${error.message}`);
    });
}