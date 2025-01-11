//basic implementation of callbacks

//synchronous callback
console.log("synchronous callback");
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return Math.floor(a/b);
}

function calculator(a,b,callback){
    return callback(a,b);
}

console.log(calculator(10,2,add));
console.log(calculator(10,2,subtract));
console.log(calculator(10,2,multiply));
console.log(calculator(10,2,divide));

console.log("asynchronous callback");

//asynchronous callback
function asyncCallback(a,b,callback){
    setTimeout(() => {
        const result = callback(a,b);
        console.log(result);
    }, 1000);
}

asyncCallback(10,2,add);
asyncCallback(10,2,subtract);
asyncCallback(10,2,multiply);
asyncCallback(10,2,divide);
