import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ')
const output = (x: any) => console.log(x)
// debug(input)
const [S, W] = input.map(n => parseInt(n, 10))
// debug(S)
// debug(W)

W >= S ? output('unsafe') : output('safe')