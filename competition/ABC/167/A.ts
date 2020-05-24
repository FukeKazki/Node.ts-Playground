import * as fs from 'fs'

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const output = (x: any) => console.log(x)

const [S, T] = input
S === T.slice(0, -1) ? output('Yes') : output('No')

