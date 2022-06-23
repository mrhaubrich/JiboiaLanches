import { keyIn, question } from 'readline-sync';
import { Lanches } from './Lanches';

const lanches = new Lanches();

console.log('Bem vindo ao Jiboia Lanches!');

let valor = 0;

let podeRepetir = true;
while (podeRepetir) {
    lanches.printCardapio();
    const pedido = Number(question('Por favor, digite o Código do seu Pedido: '));

    const lanche = lanches.getLanche(pedido);
    if (lanche) {
        valor += lanche.valor;
        const pedirMais = question('Deseja pedir mais algum lanche? Digite "S" para sim: ').toUpperCase();
        podeRepetir = pedirMais === 'S';
    } else {
        console.log('Código inválido!');
        // press any key to continue
        // console.log('Pressione qualquer tecla para continuar...');
        // ask for any key
        keyIn('Pressione qualquer tecla para continuar...');
        podeRepetir = true;
    }
}

console.log('\n______________________________________________________\n');
console.log(`O valor total do seu pedido é: R$ ${valor.toFixed(2)}`);
console.log('______________________________________________________\n');
console.log('Obrigado por comprar conosco!\n\n');

