import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const output = (x: any) => console.log(x)

const [N, M] = input[0].split(' ').map(n => parseInt(n, 10))
const H = input[1].split(' ').map(n => parseInt(n, 10))
let ans: boolean[] = new Array(N).fill(true)

for (let i = 0; i < M; ++i) {
    const [A, B] = input[2 + i].split(' ').map(n => parseInt(n, 10))
    if (H[A-1] < H[B-1]) {
        ans[A-1] = false
    } else if (H[A-1] > H[B-1]) {
        ans[B-1] = false
    } else if (H[A-1] === H[B-1]) {
        ans[A-1] = false
        ans[B-1] = false
    }
}

const count = ans.filter(a => a).length
output(count)