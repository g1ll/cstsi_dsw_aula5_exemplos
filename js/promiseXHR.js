function get(url) {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      
      req.onload = function() {
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
  
  
  const data = "http://g1ll.000webhostapp.com/ajaxphp/consulta.php"
  function carregaDados(){ 
    get(data)
      .then(tratandoResposta)
      .catch(tratandoErro);
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
  
  function mostraTabela (data) {
      const div = document.getElementById('dados');
        let table = '<table border=1>'
        data.forEach(obj => {
            console.log(obj)
            table += '<tr>'
            Object.entries(obj).map(([key, value]) => {
                table += `<td>${value}</td>`
            });
            table += '</tr>'
        });
        div.innerHTML += table + '</table>';
}

