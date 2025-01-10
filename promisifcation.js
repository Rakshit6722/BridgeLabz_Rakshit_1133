// converting a callback function to a promise

const fetchData = (url, callback) => {
    setTimeout(() => {
        const response = fetch(url)
        callback(null, { data: response?.data })
    }, 2000)
}

fetchData("url", (err, data) => {
    if (err) return console.log(err)
    console.log(data)
})

const fetchDataPromise = (url) => {
    return new Promise((res, rej) => {
        const response = fetch(url)
        if(response?.data){
            res({ data: response?.data })
        }else{
            rej(new Error("Error:Something went wrong with API"))
        }
    })
}

fetchDataPromise("url")
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })