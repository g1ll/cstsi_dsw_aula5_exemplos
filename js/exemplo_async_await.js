//https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?
//@dataCotacao='09-10-2019'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

const fetch = require('node-fetch');
const scanf = require('scanf')
const write = console.info;
const clear = console.clear;

clear()
//process.stdout.write("\u001b[2J\u001b[0;0H");
write("\nRecuperando informações:");
let data = new Date();
options = {day: '2-digit', month: '2-digit', year: 'numeric'};
data = data.toLocaleDateString("pt-BR", options);
data = data.split("-").reverse().join("-");
console.log(`Cotanção do Dolar em ${data}`);
 
//urlApi = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
urlApi = 'https://api.hgbrasil.com/finance'

trataResp = response=>response.json();
calculaCotacao = async ()=>{  
    const data = await getDollarAPI(urlApi)
    let cotDolar = data.results.currencies.USD;
    console.log(`Dolar no ${data.results.currencies.source} está a R$ ${cotDolar.sell} a venda e R$ ${cotDolar.buy} a compra.`);
    console.log("Informe um valor em R$: ");
    let valor = Number(scanf("%f"));
    console.log(`R$ ${valor} equivalem a US$ ${(valor/cotDolar.buy).toFixed(2)} `);
    return valor;
}
async function getDollarAPI(url){
    try{
        const resp = await fetch(url);
        const json = await trataResp(resp);
        return json;
    }catch(error){
        console.error("ERRO AO CONECTAR COM A API: "+error)
    }
}   

calculaCotacao();

//SINTAXE FUNÇÃO IMEDIADTA
// ;(async (url)=>{
//     try{
//         const resp = await fetch(url);
//         const json = await (response => response.json())(resp);
//         (data=>{  let cotDolar = data.results.currencies.USD;
//             console.log(`Dolar no ${data.results.currencies.source} está a R$ ${cotDolar.sell} a venda e R$ ${cotDolar.buy} a compra.`);
//             console.log("Informe um valor em R$: ");
//             let valor = Number(scanf("%f"));
//             console.log(`R$ ${valor} equivalem a US$ ${(valor/cotDolar.buy).toFixed(2)} `);
//         })(json);
//     }catch(error){
//         console.error("ERRO AO CONECTAR COM A API: "+error)
//     }
// })(urlApi);