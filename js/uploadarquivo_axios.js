//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');

//const urlapi = "http://g1ll.000webhostapp.com/ajaxphp/arquivo.php"
//const urlapi = "http://localhost/2018/cpw2/ajaxphp_2018/insere.php"
const urlapi = "http://localhost/cstsi_dsw_aula5_exemplos/imcapi/";
const axiosApi = axios.create(
    {   baseURL:urlapi,
        headers:{'Content-Type':'multpart/form-data'}}
        );

document.cadastro.onsubmit = function(e) {
    e.preventDefault();

    const novoObj = {
        name: this.nome.value,
        altura: this.alt.value,
        peso: this.peso.value,
        imc: Number((this.peso.value / this.alt.value ** 2).toFixed(2))
    }

    const dataform = new FormData();
    Object.entries(novoObj).map(([key, value]) => {
         dataform.append(key, value) });

    //const arquivo = this.foto.files[0];
    const arquivo = document.getElementById("foto").files[0];
    console.log(arquivo);

    dataform.append('arquivo',arquivo);

    postData(dataform);
}

async function postData(datasent){
    try{
        const resp = await axiosApi.post(
            'file.php',datasent);
        console.log(resp.data)
    }catch(e){
        console.log(e);
    }
}