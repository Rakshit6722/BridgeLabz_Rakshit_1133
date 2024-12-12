const convertAsciiToString = (arr) => {
    return arr.map(element => String.fromCharCode(element)).join('')
}

console.log(convertAsciiToString([104, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]))