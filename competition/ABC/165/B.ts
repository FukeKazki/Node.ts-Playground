import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8')
const output = (x: any) => console.log(x)
// debug(input)
const X = +input
let year = 0
let money = 100
while (money < X) {
    money += Math.floor(money * 0.01)
    year++
}
output(year)
