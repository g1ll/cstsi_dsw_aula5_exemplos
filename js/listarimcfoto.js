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
        let table = "<table style='font-family:cursive'>"
        dados.forEach(obj => {
            console.log(obj)
            table += '<tr>'
            const itens = Object.entries(obj)
            itens.reverse();
            itens.map(([key, value]) => {
                if(key==='nome'){
                    table += `<td><img 
                                    src='${urlapi}/upfile/${value}' 
                                    width=120 height=120
                                    style='border-radius:100%'></img></td>
                                    <td><ul style='list-style:none'>`
                }else{
                    table += `<li>${key}: ${value}</li>`
                }
            });
            table += '</ul></td></tr>' 
        });
        div.innerHTML += table + '</table>';
    }