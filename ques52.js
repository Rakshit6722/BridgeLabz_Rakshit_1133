//with for loop
// const fib = (n) => {
//     let arr = [0, 1]
//     for(let i = 2; i < n; i++){
//         arr[i] = arr[i-1] + arr[i-2]
//     }
//     return arr[arr.length-1]
// }

// with dp
const fib = (n) => {
    let dp = new Array(n+1)
    dp.fill(-1)
    return BigInt(helperFunc(n,dp))
}

function helperFunc(n,dp){
    if(n===0 || n===1) return n
    if(dp[n] !== -1) return dp[n]
    dp[n] = helperFunc(n-1,dp) + helperFunc(n-2,dp)
    return dp[n]
}

console.log(fib(500))