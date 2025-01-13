//Raghav : Write a function that returns a promise. The promise should chain multiple operations, and proper error handling should be implemented.
const fetchData = (url) => {
    return new Promise((res, rej) => {
        const response = fetch(url)
        if (response) {
            res(response)
        } else {
            rej(new Error("Fetching API Failed"))
        }
    })
}

const saveData = () => {
    return new Promise((res, rej) => {
        res("saved to database")
    })
}

fetchData("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
        const newData = data.json()
        return newData
    })
    .then((data) => {
        console.log(data)
        return saveData()
    })
    .then(data => {
        console.log(data)
    }).catch((err) => {
        console.log(err.message)
    })
