export const debug = (content: any): void => {
    console.log('--- DEBUG ---')
    if (Array.isArray(content)) {
        console.log('Array', ':')
        console.table(content)
    } else if (Number.isNaN(content)) {
        console.log('NaN', ':', content)
    } else {
        console.log(Object.prototype.toString.call(content).slice(8, -1), ':', content)
    }
}

export const isNullOrUndefined = (content: any): boolean => {
    return content === null || content === undefined
}

// debug(undefined)
// debug(null)
// debug(true)
// debug([null, undefined, true, 1, 'wow'])
// debug({name: 'fukke', age: 18})
// debug([{name: 'fukke', age: 18}, {name: 'momoko', age: 20}])
// debug(NaN)
// debug(111)
// debug('party parrot')
//
// debug(isNullOrUndefined(null))
// debug(isNullOrUndefined(undefined))
// debug(isNullOrUndefined(''))
// debug(isNullOrUndefined([]))
// debug(isNullOrUndefined({}))
