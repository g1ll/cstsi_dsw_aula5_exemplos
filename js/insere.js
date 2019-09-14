const url = 'http://g1ll.000webhostapp.com/ajaxphp/insere.php'
const fetch = require('node-fetch');
const FormData = require('form-data');
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


const dataform = new FormData();

Object.entries(novoObj).map(([key, value]) => {
    console.log(`${key}:${value}`)
    dataform.append(key, value)
});

fetch(url, {
        method: 'POST',
        //body: JSON.stringify(novoObj),
        body: dataform,
        //headers: { 'Content-Type': 'application/json' },//
        //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//
        headers: { 'Content-Type': 'multipart/form-data' },
        mode: 'no-cors'
    })
    .then(response => {
        return response.text();
    }).then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(`Erro:${error}`)
    });