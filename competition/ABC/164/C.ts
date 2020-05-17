import * as fs from 'fs'
import {debug} from '../../../util'

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n') // ['1', '2' , ...]
const output = (x: any) => console.log(x)
// debug(input)
const [N, ...S] = input
// debug(N)
// debug(S)

const set = new Set<string>()

S.map(s => {
    if (s === '') return
    set.add(s)
})

debug(set)

output(set.size)