let input = require('fs').readFileSync('input.txt', 'utf8')
let lines = input.split('\n')


class Pilha extends Array {
    constructor(...elems) {
        super(...elems)
    }
    smallest() {
        if (this.length === 0) throw new Error('Pilha Vazia')
        return Math.min(...this)

    }

}

const valores = new Pilha()

for (let item of lines) {

    let a = item[0]
    valores.push(parseInt(a))


}

console.log(valores.smallest())