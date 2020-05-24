import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(n => parseInt(n, 10))
const output = (x: any) => console.log(x)
// debug(input)
let [A, B, C, K] = input
let iterate = 0
let sum = 0
while (K) {
    const m = Math.min(input[iterate], K)
    if (iterate === 0) {
        sum += m
    } else if (iterate === 1) {}
    else {
        sum -= m
    }
    input[iterate] -= m
    K -= m
    if (K === 0) break
    if (input[iterate] === 0) ++iterate
}
output(sum)