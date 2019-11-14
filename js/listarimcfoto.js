// const urlapi = "http://localhost/cstsi_dsw_aula5_exemplos/imcapi/";
const urlapi = "http://localhost//2019/tsi/dsw/aula5/imcapi/";
const axiosApi = axios.create(
    {   baseURL:urlapi,
        headers:{'Content-Type':'application/json'}}
        );

async function carregaDados(){
    const resp = await axiosApi.get('listarfoto.php');
    const list = resp.data;
    console.table(list);
    mostraTabela(list,'dados');
}

function mostraTabela(dados,elid) {
        div = document.getElementById(elid);
        div.innerHTML = '';
        let table = '<table border=1>'
        dados.forEach(obj => {
            console.log(obj)
            table += '<tr>'
            Object.entries(obj).map(([key, value]) => {
                if(key==='nome'){
                    table += `<td><img src='http://localhost/cstsi_dsw_aula5_exemplos/imcapi/upfile/${value}' width=100 height=100></img></td>`
                }else{
                    table += `<td>${value}</td>`
                }
            });
           table += '</tr>'
        });
        div.innerHTML += table + '</table>';
    }