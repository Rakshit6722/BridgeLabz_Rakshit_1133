import { isPrime } from './ques16.js';

const sumOfPrimeNumbers = () => {
    let sum = 0;
    let res = []
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)){
            sum+=i;
            res.push(sum)
        }
    }
    return res
}

console.log(sumOfPrimeNumbers());
