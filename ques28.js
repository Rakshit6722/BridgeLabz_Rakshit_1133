import { isPrime } from './ques16.js';

const sumOfPrimeNumbers = () => {
    let sum = 0;
    let res = []
    let counter = 0;
    let i=2
    while(counter<=100) {
        if (isPrime(i)){
            sum+=i;
            res.push(sum)
            counter++;
        }
        i++;
    
    }
    return res
}

console.log(sumOfPrimeNumbers());
