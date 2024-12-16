class CustomArray extends Array{
    operations(...args){
        let str = ""
        let primeSum = 0
        let trueCount = 0;
        let falseCount = 0
        let ans = []

        for(let value of args){
            if(typeof value === 'number'){
                if(this.isPrime(value)){
                    primeSum = primeSum + value
                }
            }else if(typeof value === 'string'){
                str += value
            }else if(typeof value === 'boolean'){
                if(value){
                    trueCount++
                }else{
                    falseCount++
                }
            }
        }
        ans.push(primeSum,{isPalindrome:this.palindrome(str)},{True:trueCount},{False:falseCount})
        console.log(ans)

    }

    isPrime(num){
        for(let i=2;i<num;i++){
            if(num%i === 0){
                return false
            }
        }
        return num > 1
    }

    palindrome(string){
        return string.toLowerCase() === string.toLowerCase().split('').reverse().join('')
    }
}

let customArray = new CustomArray()
customArray.operations(4,21,3,2,44,'a','b','a',true,false)