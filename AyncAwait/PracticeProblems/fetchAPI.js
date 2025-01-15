const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json();
        console.log(data)
    } catch (err) {
        console.log(err.message)
    }
}

fetchData()