const fetch = require('node-fetch');
const scanf = require('scanf');
// const urlApi = 'http://g1ll.000webhostapp.com/ajaxphp/imcapi.php'
const urlApi = 'http://localhost/2018/cpw2/ajaxphp_2018/imcapi.php'
console.log("ID do registro a ser deletado: ");
const id = scanf("%d");

console.log(id);

;(async (url)=>{
    try{
        const resp = await fetch(url,{
            method:'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id}), mode:'cors'});
        const json = await (response=>response.json())(resp);
        (data=>{
            if(data.sucesso)
            console.log(`Registro ${data.id} excluido.!`)
            else console.error(`Não foi possível excluir o registro de ID:${id}`)
            console.table(data);
        })(json);
    }catch(error){
        console.error("ERRO AO CONECTAR COM A API: "+error)
    }
})(urlApi);