function isBalanced(str) {
    let stack = [];
    let openBrackets = ['(', '{', '['];
    let closeBrackets = [')', '}', ']'];
    let matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("(){}[]"));
console.log(isBalanced("([{}])"));
console.log(isBalanced("(]")); 
console.log(isBalanced("({[)]"));  