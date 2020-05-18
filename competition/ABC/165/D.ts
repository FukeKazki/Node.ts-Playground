import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ').map(n => parseInt(n, 10))
const output = (x: any) => console.log(x)
// debug(input)
const [A, B, N] = input

const x = N < B ? N : B - 1
// debug(x)

const sum = Math.floor(A / B * x) - A * Math.floor(x / B)
output(sum)