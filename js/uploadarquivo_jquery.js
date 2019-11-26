
const urlapi = "http://localhost/2019/tsi/dsw/aula5/imcapi/"; //TROCAR URL

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

function postData(datasent){
    console.log(datasent)
    $xhr = $.ajax({
        url: urlapi+"file.php",
        method: "POST",
        data: datasent,
        dataType: "html",
        processData: false, //NECESSÁRIO  PARA USAR O FORMDATA 
        contentType: false,//NECESSÁRIO  PARA USAR O FORMDATA 
      }).done((resp)=>{
            console.info(resp);
            alert(resp)}
        ).fail((xhr,textStatus)=>{
            console.error(`Error:${textStatus}`);
        });

        console.log($xhr);
}