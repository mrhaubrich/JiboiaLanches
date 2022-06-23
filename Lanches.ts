import { Lanche } from './Lanche';
import * as lanchesJson from './lanches.json';

export class Lanches {

    lanches = jsonToMap(new Map(Object.entries(lanchesJson)));

    adicionarLanche(codigo:number, lanche: Lanche) {
        this.lanches.set(codigo, lanche);
    }

    getLanche(codigo:number) {
        return this.lanches.get(codigo);
    }

    listarLanches() {
        let lista = '';
        this.lanches.forEach((lanche, codigo) => {
            lista += `${codigo}\t\t${lanche.descricao}${tabSize(lanche.descricao, this.getLancheDescWithMostLenght().length)}R$ ${lanche.valor.toFixed(2)}\n`;
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

function jsonToMap(json: Map<string, Lanche>) {
    const map = new Map<number, Lanche>();
    json.forEach((lanche, codigo) => {
        if (codigo !== 'default') {
            map.set(Number(codigo), lanche);
        }
    });
    return map;
}
