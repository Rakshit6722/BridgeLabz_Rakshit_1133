const counterModule = (()=>{
    let  count = 0;
    return {
        increment:()=>{
            count++;
        },
        getCount:()=>{
            return count;
        }
    }
})()

counterModule.increment();
counterModule.increment();
console.log(counterModule.getCount());
