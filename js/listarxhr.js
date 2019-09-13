const apiUrl = 'http://localhost/2018/cpw2/ajaxphp_2018/consulta.php';
const div = document.getElementById('dados')
let loadloop;
function mostraTabela() {
    if (this.readyState == 4 && this.status == 200) {
        clearInterval(loadloop);
        div.innerHTML = '';
        console.log(this.responseText);
        dados = JSON.parse(this.responseText);
        console.table(dados)
        let table = '<table border=1>'
        dados.forEach(obj => {
            console.log(obj)
            table += '<tr>'
            Object.entries(obj).map(([key, value]) => {
                table += `<td>${value}</td>`
            });
            table += '</tr>'
        });
        div.innerHTML += table + '</table>';
    }
}
function falhaAoConectar(erro) {
     console.log("Falha ao conectar:" + erro); }

function carregaDados() {
    var oReq = new XMLHttpRequest();//MS ActiveXObject
    oReq.onreadystatechange = mostraTabela;
    oReq.onerror = falhaAoConectar;
    oReq.open("GET", apiUrl);
    dados.innerHTML = 'Carregando';
    loadloop = setInterval(function () {
        if (oReq.readyState < 4) {
            if (dados.innerHTML === 'Carregando...')
                dados.innerHTML += '!';
            else if (dados.innerHTML === 'Carregando...!')
                dados.innerHTML = 'Carregando';
            else dados.innerHTML += '.';
        } else {
            if (this.readyState == 4 && this.status != 200)
                dados.innerHTML += 'Erro!';
        }

    }, 100)
    oReq.send();
}