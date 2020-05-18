import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n')
const output = (x: any) => console.log(x)
// debug(input)
const K = +input[0]
const [A, B] = input[1].split(' ').map(n => parseInt(n, 10))

for (let i = A; i <= B; ++i) {
    if (i % K == 0) {
        console.log('OK')
        break
    }
    if (i === B) {
        console.log('NG')
    }
}

