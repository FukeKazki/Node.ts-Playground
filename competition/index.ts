import * as fs from 'fs'
import {debug} from '../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ')
const output = (x: any) => console.log(x)

const a = +input[0]
const b = +input[1]

const result = a - b * 2

result > 0 ? output(result) : output(0)