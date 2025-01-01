function firstUniqueCharacter(str) {
    const charCount = new Map();

    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let i = 0; i < str.length; i++) {
        if (charCount.get(str[i]) === 1) {
            return i;
        }
    }

    return -1; 
}

const input = "loveleetcode";
const index = firstUniqueCharacter(input);
console.log(index); 