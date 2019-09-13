//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');

 const urlapi = "http://g1ll.000webhostapp.com/ajaxphp/insere.php"
//const urlapi = "http://localhost/2018/cpw2/ajaxphp_2018/insere.php"
 
document.cadastro.onsubmit = function(e) {
    e.preventDefault();

    const novoObj = {
        name: this.nome.value,
        altura: this.alt.value,
        peso: this.peso.value,
        imc: Number((this.peso.value / this.alt.value ** 2).toFixed(2))
    }

    const dataform = new FormData();
    Object.entries(novoObj).map(([key, value]) => {
         dataform.append(key, value) });

    fetch(urlapi, {
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