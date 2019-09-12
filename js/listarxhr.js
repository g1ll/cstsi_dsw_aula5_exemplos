const apiUrl = 'http://g1ll.000webhostapp.com/ajaxphp/consulta.php';
const div = document.getElementById('dados')
let loadloop;
function mostraTabela () {
    if(this.readyState == 4 && this.status == 200){
        clearInterval(loadloop);
        dados.innerHTML = '';
        data = JSON.parse(this.responseText);
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
        div.innerHTML += table + '</table>';
    }
}
function falhaAoConectar(erro){console.log("Falha ao conectar:"+erro);}

function carregaDados(){
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = mostraTabela;
    oReq.onerror = falhaAoConectar; 
    oReq.open("GET", apiUrl);
    dados.innerHTML='Carregando';
    loadloop = setInterval(function(){
            if(oReq.readyState<4){
                if(dados.innerHTML==='Carregando...')
                    dados.innerHTML+='!';
                else if(dados.innerHTML==='Carregando...!')
                    dados.innerHTML = 'Carregando';
                else dados.innerHTML+='.';
            }else{
                if(this.readyState == 4 && this.status != 200)
                dados.innerHTML+='Erro!';
            }

        },100)
    oReq.send();
}