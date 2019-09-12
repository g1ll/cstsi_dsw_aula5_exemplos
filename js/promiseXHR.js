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
  
  function addSearchHeader(response) {
    try {
      //response = JSON.parse(response);
      console.log('OK:', response);
      console.table(JSON.parse(response));
    } catch (e) {
      console.log('erro:', e);
      console.error(e)
    }
  }
  
  const data = "http://g1ll.000webhostapp.com/ajaxphp/consulta.php"
  function carregaDados(){ 
  get(data)
    .then(addSearchHeader)
    .catch(addSearchHeader);
  }