const axios = require('axios');
 //const apiUrl = 'http://g1ll.000webhostapp.com/ajaxphp/consulta.php';
const apiUrl = 'http://localhost/2018/cpw2/ajaxphp_2018/consulta.php';
const apiUrl = 'http://localhost:9090/consulta.php';
console.clear()
console.log(`Conectando a ${apiUrl}`)

    let opt = {proxy: {
    host: 'localhost',
    port: 9000}, crossdomain: true,mode:'cors'}
axios.get(apiUrl,opt)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp.data) {
            console.table(resp.data)
        }
    })
    .catch(error => {
        console.log(`Erro ao conectar:\n\n${error.message}`)
        console.log(error)
    });