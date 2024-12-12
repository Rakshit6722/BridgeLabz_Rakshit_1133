const caesarCypher = (str, shift = 1) => {
    return str
        .split('')
        .map(char => {
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97)
            } else if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65)
            } else {
                return char
            }
        })
        .join('')
}

const decryptCaesarCypher = (str, shift = 1) => {
    return caesarCypher(str, (26 - shift) % 26)
}

console.log(caesarCypher("hello world"))
console.log(decryptCaesarCypher("ifmmp xpsme"))