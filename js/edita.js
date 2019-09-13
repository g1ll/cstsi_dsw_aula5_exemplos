const fetch = require('node-fetch');
const scanf = require('scanf');
const urlApi = 'http://g1ll.000webhostapp.com/ajaxphp/imcapi.php'
//const urlApi = 'http://localhost/2018/cpw2/ajaxphp_2018/imcapi.php'
console.log("ID do registro a ser editado: ");
const id = scanf("%d");

console.log("Novo nome: ");
const nome = scanf("%s");

console.log("Nova altura: ");
const alt = scanf("%f");

console.log("Novo peso: ");
const peso = scanf("%f");
console.info("NOVOS DADOS:");
console.table([id,nome,peso,alt]);

;(async (url)=>{
    try{
        const resp = await fetch(url,{
            method:'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id,name:nome,altura:alt,peso:peso}), mode:'cors'});
        const json = await (response=>response.json())(resp);
        (data=>{
            if(data.sucesso){
                console.log(`Registro ${data.id} atualizado.!`)
                console.table(data.row);
            }else{ console.error(`Não foi possível atualizar o registro de ID:${id}`)}
                console.table(data);
        })(json);
    }catch(error){
        console.error("ERRO AO CONECTAR COM A API: "+error)
    }
})(urlApi);