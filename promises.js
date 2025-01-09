// Basic implemeneation of promises

// let age = 15;

// let promise = new Promise((res, rej) => {
//     if (age >= 18) {
//         res("Resolved")
//     } else {
//         rej("Rejected")
//     }
// })

// promise.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })


//fetching data from api with promsies

//one way to do it
const fetchData = (url) => {
    return new Promise((res,rej)=>{
        const response = fetch(url)
        if(response){
            res(response)
        }else{
            rej("Error fetching data")
        }
    })
}

fetchData("https://jsonplaceholder.typicode.com/todos/2")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("first")
        console.log(data)
    })
    .catch(err => console.log(err))


//other way to do it directly using fetch

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("second")
        console.log(data)
    })
    .catch(err => console.log(err))
