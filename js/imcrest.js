
const scanf = require('scanf')

console.log(`Opções:\n 
1.lista\n
2.Insere\n
3.Editar\n
4.Deletar\nEscolha um opção: `)
opt = scanf("%d");
switch(opt){
    case 1:require('./listar.js');
        break;
    case 2:require('./insere.js');
        break;
    case 3:require('./edita.js');
        break;
    case 4:require('./deleta.js');;
        break;
        default: console.log('Erro');
}