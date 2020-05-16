import * as fs from 'fs'

const output = (x: any) => console.log(x)

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n')
const [N, M] = input[0].split(' ').map(n => parseInt(n, 10))
const A = input[1].split(' ').map(n => parseInt(n, 10))

const sum = A.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

N - sum >= 0 ? output(N - sum) : output(-1)