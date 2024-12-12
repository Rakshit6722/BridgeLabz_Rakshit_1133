const asciiArray = (str) => {
    return str.split('').map(char => char.charCodeAt(0));
}

console.log(asciiArray("hello World"));
