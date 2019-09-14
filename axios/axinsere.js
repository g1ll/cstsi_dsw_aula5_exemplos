const url = 'http://g1ll.000webhostapp.com/ajaxphp/insere.php'
//const url = 'http://localhost/2018/cpw2/ajaxphp_2018/insere.php'
const axios = require('axios');
const querystring = require('querystring');
const scanf = require('scanf')

console.clear();

console.log("Informe o seu nome:")
let nome = scanf('%s');

console.log("Informe a sua altura:")
let alt = scanf('%f');

console.log("Informe o seu peso:")
let peso = scanf('%f');

const novoObj = {
    name: nome,
    altura: alt,
    peso: peso,
    imc: Number((peso / alt ** 2).toFixed(2))
}

    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };

      //navegador usar FormData
    axios.post(url,querystring.stringify(novoObj),config)
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(`Erro:${error}`)
    });