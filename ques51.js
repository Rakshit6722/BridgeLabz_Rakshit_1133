const freqArr = (str) => {
    let map = new Map()

    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else if (str[i] === " ") {
            continue
        } else {
            map.set(str[i], 1)
        }
    }

    return [...map]
}

const res = freqArr("hello world")
console.log(res)