//http://g1ll.000webhostapp.com/ajaxphp/consulta.php
//const fetch = require('node-fetch');

//const urlapi = "http://g1ll.000webhostapp.com/ajaxphp/arquivo.php"
//const urlapi = "http://localhost/2018/cpw2/ajaxphp_2018/insere.php"
const urlapi = "http://localhost/cstsi_dsw_aula5_exemplos/imcapi/";
const axiosApi = axios.create(
    {   baseURL:urlapi,
        headers:{'Content-Type':'multpart/form-data'}}
        );

document.cadastro.foto.onchange = function(e){
    const div = document.getElementById('fotoselec');
    div.innerHTML='';
    const img = document.createElement('img');
    img.file = e.target.files[0];
    console.log(img);
    console.log(e.target.files[0].name);
    console.log(e.target.files);
    div.append(img);
    img.width = 100;
    img.height = 100;
    img.style.borderRadius='100%';

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(e.target.files[0]);
}

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