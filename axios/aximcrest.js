
const scanf = require('scanf')

console.log(`Opções:\n 
1.lista\n
2.Insere\n
3.Editar\n
4.Deletar\nEscolha um opção: `)
opt = scanf("%d");
switch(opt){
    case 1:require('./axlistar.js');
        break;
    case 2:require('./axinsere.js');
        break;
    case 3:require('./axedita.js');
        break;
    case 4:require('./axdeleta.js');;
        break;
        default: console.log('Erro');
}