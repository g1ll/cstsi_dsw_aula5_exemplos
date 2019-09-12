const apiUrl = 'https://api.github.com/users/g1ll/repos';
let div;
window.onload = function(){ div = document.getElementById('dados');}
let loadloop;

function mostraTabela () {
    if(this.readyState == 4 && this.status == 200){
        clearInterval(loadloop);
        dados.innerHTML = '';
        data = JSON.parse(this.responseText);
        let repos = '<h3>Meus Repositorios:</h3><ul>'
        data.forEach(obj => {
            console.log(obj)
            repos += `<li><a target='_blank'href='${obj.html_url}'>${obj.name}</a></li>`
        });
        div.innerHTML += repos + '</ul>';
    }
}

function falhaAoConectar(erro){console.log("Falha ao conectar:");console.error(erro)}

function carregaDados(){
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = mostraTabela;
    oReq.onerror = falhaAoConectar;
    console.log(apiUrl)
    oReq.open("GET", apiUrl,true);
    dados.innerHTML='Carregando';
    loadloop = setInterval(function(){
            if(oReq.readyState<4){
                if(dados.innerHTML==='Carregando...')
                    dados.innerHTML+='!';
                else if(dados.innerHTML==='Carregando...!')
                    dados.innerHTML = 'Carregando';
                else dados.innerHTML+='.';
            }
        },100)
    oReq.send();
}