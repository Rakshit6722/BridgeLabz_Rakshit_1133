const promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise 1")
    },1000)
})

const promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise 2")
    },2000)
})

const promise3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("promise 3 rejected")
    }, 3000)
})

//will wait for all promises to resolve and if any one of them fails then it will return the error
Promise.all([promise1,promise2,promise3])
.then((res)=>{
    console.log("Promise.all")
    console.log(res)
})
.catch((err)=>{
    console.log("Promise.all")
    console.log(err)
})

//will wait for all promises to resolve, whether they resolve or reject and return the result in an array
Promise.allSettled([promise1,promise2,promise3])
.then((res)=>{  
    console.log("Promise.allSettled")
    console.log(res)
})
.catch((err)=>{
    console.log("Promise.allSettled")
    console.log(err)
})

//will return the first promise that resolves or rejects
Promise.race([promise1,promise2,promise3])
.then((res)=>{
    console.log("Promise.race")
    console.log(res)
})
.catch((err)=>{
    console.log("Promise.race")
    console.log(err)
})

//will return the first promise that resolves
Promise.any([promise1,promise2,promise3])
.then((res)=>{
    console.log("Promise.any")
    console.log(res)
})
.catch((err)=>{
    console.log("Promise.any")
    console.log(err)
})
