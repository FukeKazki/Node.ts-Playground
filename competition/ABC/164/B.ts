import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ') // ['1', '2' , ...]
const output = (x: any) => console.log(x)
// debug(input)

const [A, B, C, D] = input.map(n => parseInt(n, 10))

const t = Math.floor((A + D - 1) / D)
const a = Math.floor((C + B - 1) / B)

t >= a ? output('Yes') : output('No')