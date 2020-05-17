import * as fs from 'fs'
import {debug} from '../../../util'
const output = (x: any) => console.log(x)

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n')

const [N] = input[0].split(' ').map(n => parseInt(n, 10))
const A = input[1].split(' ').map(n => parseInt(n, 10))
const counter = Array(N).fill(0)

A.map(a => {
    counter[a-1]++
})
counter.map(count => output(count))