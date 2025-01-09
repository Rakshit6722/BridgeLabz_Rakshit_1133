// Basic implemeneation of promises

let age = 15;

let promise = new Promise((res, rej) => {
    if (age >= 18) {
        res("Resolved")
    } else {
        rej("Rejected")
    }
})

promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
