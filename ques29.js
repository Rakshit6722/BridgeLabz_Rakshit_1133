import { isPrime } from "./ques16.js";

const firstNPrimeNumbers = (n) => {
    let res = []
    let counter = 0;
    let i=2
    while(counter<=100) {
        if (isPrime(i)){
            res.push(i)
            counter++;
        }
        i++
    }
    return res
}

const distance = (arr) => {
    let distance = []
    for(let i=1;i<arr.length;i++){
        distance.push(arr[i] - arr[i-1])
    }
    return distance
}

const primeNumbers = firstNPrimeNumbers(100)
console.log(distance(primeNumbers))