//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');

console.clear();
//servidor remoto, as vezes fora do ar
const urlapi = "http://g1ll.000webhostapp.com/ajaxphp/consulta.php" 
//servidor local, deve mudar caminho para o local da máquina
//const urlapi = "http://localhost/2018/cpw2/ajaxphp_2018/consulta.php"
//servidor local na pasta imcapi iniciado com o comando: php -S localhost:9090 Não funciona
//const urlapi = "http://localhost:9090/consulta.php"
  

const loading = document.getElementById('loading');
const divData = document.querySelector('#data');

function showLoader() {
    document.querySelector('.container-load').style.display='block';
    loading.className='show'
    console.log(loading);

}
function hiddeLoader(){
    loading.className = "";
    document.querySelector('.container-load').style.display='none';
}

function fetchData(){
    divData.innerHTML ='';
    showLoader();
fetch(urlapi)
    .then(response => {
        return response.json()
    }).then(data => {
        if (data.length) {
            hiddeLoader();
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