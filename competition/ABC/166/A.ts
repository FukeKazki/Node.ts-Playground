import * as fs from 'fs'
import {debug} from '../../../util'
// 1行のときtrimがいる
const input = fs.readFileSync('/dev/stdin', 'utf8').trim()
const output = (x: any) => console.log(x)
debug(input)
// const S = input
// S === 'ABC' ? output('ARC') : output('ABC')