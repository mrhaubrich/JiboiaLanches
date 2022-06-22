/* eslint-disable no-magic-numbers */
import { Lanche } from './Lanche';

export class Lanches {

    lanches = new Map<number, Lanche>();

    adicionarLanche(codigo:number, lanche: Lanche) {
        this.lanches.set(codigo, lanche);
    }

    getLanche(codigo:number) {
        return this.lanches.get(codigo);
    }

    listarLanches() {
        let lista = '';
        this.lanches.forEach((lanche, codigo) => {
            lista += `${codigo}\t\t${lanche.descricao}${tabSize(lanche.descricao, this.getLancheDescWithMostLenght().length)}R$ ${lanche.valor}\n`;
        });
        return lista;
    }

    getLancheDescWithMostLenght() {
        let lanche = '';
        this.lanches.forEach((l) => {
            if (lanche.length < l.descricao.length) {
                lanche = l.descricao;
            }
        },
        );
        return lanche;
    }

    static init() {
        const lanches = new Lanches();
        lanches.adicionarLanche(100, new Lanche(100, 'Cachorro Quente', 9));
        lanches.adicionarLanche(101, new Lanche(101, 'Cachorro Quente Duplo Mega Dog Supremo', 11));
        lanches.adicionarLanche(102, new Lanche(102, 'X - Egg', 12));
        lanches.adicionarLanche(103, new Lanche(103, 'X - Salada', 13));
        lanches.adicionarLanche(104, new Lanche(104, 'X - Bacon', 14));
        lanches.adicionarLanche(105, new Lanche(105, 'X - Tudo', 17));
        lanches.adicionarLanche(200, new Lanche(200, 'Refri Lata', 5));
        lanches.adicionarLanche(201, new Lanche(201, 'Cha Gelado', 4));
        return lanches;
    }

    printCardapio() {
        console.log(`\t\t\t~~~~~Cardapio~~~~~
CÓDIGO\t\tDESCRICAO${tabSize('DESCRICAO', this.getLancheDescWithMostLenght().length)}VALOR(R$)
        `);
        console.log(this.listarLanches());
    }

}


// function to calculate tab size to add a new tab at end of string
export function tabSize(str: string, size: number) {
    let tab = '';
    for (let i = 0; i < size - str.length; i++) {
        tab += ' ';
    }
    tab += '\t\t';
    return tab;
}

