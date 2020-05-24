import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const output = (x: any) => console.log(x)
// debug(input)
const [N, M, X] = input[0].split(' ').map(i => Number(i))
const data = []
for (const i of [...Array(N)].map((v, i) => ++i)) {
    const tmp = input[i].split(' ').map(i => Number(i))
    data.push(tmp)
}

const isAllXOrMore = (A: number[], X: number): boolean => {
    return A.every(v => v >= X)
}

let minPrice = Infinity

for (let bit = 0; bit < (1 << N); ++bit) {
    let price = 0
    const A = Array(M).fill(0)

    for (const i of [...Array(N).keys()]) {
        if (bit & (1 << i)) {
            price += data[i][0]
            for (const key of [...Array(M)].map((v, i) => ++i)) {
                A[key - 1] += data[i][key]
            }
        }
    }

    if (isAllXOrMore(A, X)) {
        minPrice = Math.min(minPrice, price)
    }
}

minPrice === Infinity ? output(-1) : output(minPrice)