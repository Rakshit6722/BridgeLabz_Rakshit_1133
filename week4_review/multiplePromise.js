//sandeep : Write a function that runs multiple promises concurrently and handles the results when all of them are resolved.
const fetchMultipleData = () => {
    const data1 = new Promise((res, rej) => {
        setTimeout(() => {
            res("data 1")
        }, 1500)
    })
    const data2 = new Promise((res, rej) => {
        setTimeout(() => {
            res("data 2")
        }, 1500)
    })
    const data3 = new Promise((res, rej) => {
        setTimeout(() => {
            rej("data 3")
        }, 1500)
    })

    Promise.allSettled([data1, data2, data3])
        .then((data) => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

fetchMultipleData()