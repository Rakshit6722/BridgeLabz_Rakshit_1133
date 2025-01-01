function longestSubstringWithoutRepeatingCharacters(s) {
    let n = s.length;
    let longest = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < n; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(charIndexMap.get(s[end]) + 1, start);
        }
        charIndexMap.set(s[end], end);
        longest = Math.max(longest, end - start + 1);
    }

    return longest;
}

// Example usage:
const inputString = "abcabcbb";
console.log(longestSubstringWithoutRepeatingCharacters(inputString)); // Output: 3