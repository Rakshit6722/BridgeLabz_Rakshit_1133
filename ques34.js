const wordArray = (para) => {
    return para.match(/\b\w+\b/g);
}

console.log(wordArray("hello world,        .how, are, you")); 