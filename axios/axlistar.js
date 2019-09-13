const axios = require('axios');
 //const apiUrl = 'http://g1ll.000webhostapp.com/ajaxphp/consulta.php';
const apiUrl = 'http://localhost/2018/cpw2/ajaxphp_2018/consulta.php';
console.clear()
console.log(`Conectando a ${apiUrl}`)

axios.get(apiUrl)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp.data) {
            console.table(resp.data)
        }
    })
    .catch(error => {
        console.log(`Erro ao conectar:\n\n${error.message}`)
    });