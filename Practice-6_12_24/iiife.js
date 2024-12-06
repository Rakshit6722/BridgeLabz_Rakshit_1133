//immediately invoked function expression
(function(){
    console.log('IIFE')
})()

const counter = (function(){
    let count = 0;
    return{
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    }
})()

console.log(counter.getCount())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getCount())