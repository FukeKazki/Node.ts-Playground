import figlet from 'figlet'
import {debug} from '../util'

// process.argvの2, 3番からコマンドライン引数
// debug(process.argv)
const [, , ...args] = process.argv
const msg =    `
    Hello!! ${args[0]} san.
    I am Kazuki Fuke.
    GitHub: https://github.com/FukeKazki
    Twitter: https://twitter.com/fukke0906
`

// console.log(msg)
const result = figlet.textSync(`I'm Fukke!!`, {horizontalLayout: 'fitted'})
console.log(result)

