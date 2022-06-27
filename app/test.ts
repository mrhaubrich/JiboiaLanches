// faz um programa que printe so os itens do array que começam com C e terminem com o, de dois jeitos diferentes

const arr = [
    'Pedra',
    'Crocodilo',
    'Cavalo',
    'Cento',
    'Casa',
    'Cachorro',
];

arr.forEach((item) => {
    if (item.startsWith('C') && item.endsWith('o')) {
        console.log(item);
    }
});

const newArr = arr.filter((item) => item.startsWith('C') && item.endsWith('o'));
console.log(newArr);
