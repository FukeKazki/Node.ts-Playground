import * as fs from 'fs'
import {debug} from '../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ')
const output = (x: any) => console.log(x)

const a = +input[0]

const result = 2 * Math.PI * a

output(result)