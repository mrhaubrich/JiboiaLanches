/* eslint-disable no-magic-numbers */
// import { question } from 'readline-sync';

import { Lanche } from './classes/Lanche';

// console.log('Bem vindo ao Jiboia Lanches!');
// console.log(`\t\t~~~~~Cardapio~~~~~
// CÓDIGO\tDESCRICAO\t\tVALOR(R$)I
// 100\tCACHORRO QUENTE\t\t9.00
// 101\tCACHORRO QUENTE DUPLO\t11.00
// 102\tX - EGG\t\t\t12.00
// 103\tX - SALADA\t\t13.00
// 104\tX - BACON\t\t14.00
// 105\tX - TUDO\t\t17.00
// 200\tREFRI LATA\t\t5.00
// 201\tCHA GELADO\t\t4.00
// `);

// let valor = 0;

// let podeRepetir = true;
// while (podeRepetir) {
//     const pedido = Number(question('Por favor, digite o Código do seu Pedido: '));
//     podeRepetir = true;
//     switch (pedido) {
//     case 100:
//         valor += 9;
//         break;
//     case 101:
//         valor += 11;
//         break;
//     case 102:
//         valor += 12;
//         break;
//     case 103:
//         valor += 13;
//         break;
//     case 104:
//         valor += 14;
//         break;
//     case 105:
//         valor += 17;
//         break;
//     case 200:
//         valor += 5;
//         break;
//     case 201:
//         valor += 4;
//         break;
//     default:
//         console.log('Código inválido!');
//         break;
//     }
//     const pedirMais = question('Deseja pedir mais algum lanche? (S/N) ').toUpperCase();
//     if (pedirMais === 'N') {
//         podeRepetir = false;
//     } else if (pedirMais === 'S') {
//         podeRepetir = true;
//     }
//     // eslint-disable-next-line no-unneeded-ternary
//     podeRepetir = pedirMais === 'S' ? true : false;
// }

// console.log(`O valor total do seu pedido é: R$ ${valor.toFixed(2)}`);
// console.log('Obrigado por comprar conosco!');


const lanche = new Lanche('X - EGG', 12);

console.log(`Lanche: ${lanche.descricao} - Valor: ${lanche.valor}`);
