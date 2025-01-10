// // Basic implemeneation of promises

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


// //fetching data from api with promsies

// //one way to do it
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                reject('Error fetching data');
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

//other way to do it
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

fetch("https://jsonplaceholder.typicode.com/users/4")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("second")
        console.log(data)
    })
    .catch(err => console.log(err))


// //Database connection with promises
const connectDB = () => {
    return new Promise((res, rej) => {
        const connection = Math.floor(Math.random() * 2) + 1
        setTimeout(() => {
            if (connection === 1) {
                res({
                    status: "success",
                    message: "Connected to DB"
                })
            } else {
                rej("Failed to connect to DB")
            }
        }, 2000)
    })
}

connectDB()
    .then((data) => {
        return data
    })
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err))



// video loading with promises
const loadVideo = () => {
    fetch(`https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.forEach(video => {
                console.log(video.videoUrl)
            })
        })
        .catch(err => console.log(err))
}

loadVideo()