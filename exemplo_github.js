const fetch = require('node-fetch');
fetch('https://api.github.com/users/g1ll')
.then(response => response.json())
.then(data => {
  console.log(`${data.name}
  ${data.company}
  ${data.location}
  \n\t${data.bio}`)
  //console.table(data); 
})
.catch(error => console.error(error))

//SINTAXE COM ASYNC/AWAIT
async function getGithub(){
  try{
    const resp = await fetch('https://api.github.com/users/g1ll');
    const json = await (response=>response.json())(resp);
    (data=>{
      console.info(`%cASYNC/AWAIT: ${data.name}
      ${data.company}
      ${data.location}
      \n\t${data.bio}`,'s')
      //console.table(data); 
    })(json)
  }catch(e){
    console.error("ERRO : "+e)
  }
}
getGithub()
