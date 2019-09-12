//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');

console.clear();

const loading = document.getElementById('loading');
const divData = document.querySelector('#data');

function showLoader() {
    document.querySelector('.container-load').style.display='block';
    loading.style.visibility='visible';
    console.log(loading);
    loading.className = "show";
}
function hideLoader(){
    loading.className = "";
    loading.style.visibility='hidden';
    document.querySelector('.container-load').style.display='none';
}

function fetchData(){
    divData.innerHTML ='';
    showLoader();
fetch('http://g1ll.000webhostapp.com/ajaxphp/consulta.php')
    .then(response => {
        return response.json()
    }).then(data => {
        if (data.length) {
            hideLoader();
            console.table(data)
            let table = '<table border=1>'
            data.forEach(obj => {
                console.log(obj)
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            divData.innerHTML= table + '</table>'
        } else {
            divData.innerHTML= 'Sem registros!'
        }
    })
    .catch(error => {
        console.log(`Erro:${error}`)
        document.body.innerHTML = 'Falha na comunnicação!!'
    });
}