import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const output = (x: any) => console.log(x)
// debug(input)
const [N, K] = input[0].split(' ').map(n => parseInt(n, 10))

const set = new Set()
for (let i = 0; i < K*2; ++i) {
    if (i % 2 !== 0 || i === 0) continue
    const m = input[i].split(' ').map(n => parseInt(n, 10))
    debug(m)
    for (let j = 0; j < m.length; ++j) {
        set.add(m[j])
    }
}
// debug(set)
output(N - set.size)