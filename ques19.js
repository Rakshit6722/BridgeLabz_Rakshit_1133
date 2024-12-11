import { isPrime } from "./ques16.js";

const primeNumberGreaterThanN = (p, n) => {
    let res = []
    let i = n + 1;
    let counter = 0
    while (counter < p) {
        if (isPrime(i)) {
            res.push(i)
            counter++
        }
        i++
    }

    return res
}

console.log(primeNumberGreaterThanN(10,5))
