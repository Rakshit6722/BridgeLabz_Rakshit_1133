const fib = (n) => {
    let dp = new Array(n+1)
    dp.fill(-1)
    return helperFunc(n,dp)
}

const helperFunc = (n,dp) => {
    if(n==0) return 1
    if(dp[n] !== -1) return dp[n]
    dp[n] = n * helperFunc(n-1,dp)
    return dp[n]
}

console.log(fib(70))