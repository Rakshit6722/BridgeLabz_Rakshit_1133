function calculateSpan(prices) {
    let n = prices.length;
    let span = new Array(n).fill(1);
    let stack = [];

    stack.push(0);

    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        span[i] = (stack.length === 0) ? (i + 1) : (i - stack[stack.length - 1]);

        stack.push(i);
    }

    return span;
}


let prices = [100, 80, 60, 70, 60, 75, 85];
console.log(calculateSpan(prices)); 