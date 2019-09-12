//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');
document.cadastro.onsubmit = function(e) {
    e.preventDefault();

    const novoObj = {
        name: this.nome.value,
        altura: this.alt.value,
        peso: this.peso.value,
        imc: Number((this.peso.value / this.alt.value ** 2).toFixed(2))
    }

    const dataform = new FormData();
    Object.entries(novoObj).map(([key, value]) => { dataform.append(key, value) });

    fetch('http://g1ll.000webhostapp.com/ajaxphp/insere.php', {
        method: 'POST',
        body: dataform,
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
    });
}