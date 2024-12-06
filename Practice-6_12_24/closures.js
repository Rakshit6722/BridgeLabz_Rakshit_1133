//function binded with its lexical environment

//counter function
function outerFunction(){
    let count = 0;
    
    return{
        getCount: () => count,
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = 0
    }
}

const innerFunc = outerFunction()
console.log(innerFunc.getCount())
console.log(innerFunc.increment())
console.log(innerFunc.increment())
console.log(innerFunc.decrement())
console.log(innerFunc.reset())

//stop watch
const stopWatch = () => {
    let startTime = 0;

    return{
        start: () => startTime = Date.now(),
        stop: () => {
            const endTime = Date.now()
            const elapsedTime = endTime - startTime
            startTime = 0
            return (elapsedTime/1000 ).toFixed(2)
        },
        reset: () => startTime = 0
    }
}

const watch = stopWatch()
watch.start()
setTimeout(()=>{
    console.log(watch.stop())
},10000)
