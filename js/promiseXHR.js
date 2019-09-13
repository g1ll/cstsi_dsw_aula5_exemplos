
function get(url) {   
  return new Promise(function(resolve, reject) {
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = ()=> {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    }
    
    req.onerror = function() {
      reject(Error('Network Error'));
    }
    
    req.send();
  });
  }
  
  
  // const urlapi = "http://g1ll.000webhostapp.com/ajaxphp/consulta.php"
  const urlapi = "http://lcalhost/2018/cpw2/ajaxphp_2018/consulta.php"
  function carregaDados(){ 
    get(urlapi).then(tratandoResposta).catch(tratandoErro);
    console.log(retorno);
  }

  function tratandoResposta(response) {
    //response = JSON.parse(response);
    console.log('OK:', response);
    console.table(JSON.parse(response));
    mostraTabela(JSON.parse(response));

}

  function tratandoErro(e){
    console.log('erro:', e);
      console.error(e)
  }
  
  function mostraTabela (dados) {
      const div = document.getElementById('dados');
        let table = '<table border=1>'
        dados.forEach(obj => {
            console.log(obj)
            table += '<tr>'
            Object.entries(obj).map(([key, value]) => {
                table += `<td>${value}</td>`
            });
            table += '</tr>'
        });
        div.innerHTML += table + '</table>';
}

