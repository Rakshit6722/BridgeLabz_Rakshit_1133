// // converting a callback function to a promise

// const fetchData = (url, callback) => {
//     setTimeout(() => {
//         const response = fetch(url)
//         callback(null, { data: response?.data })
//     }, 2000)
// }

// fetchData("url", (err, data) => {
//     if (err) return console.log(err)
//     console.log(data)
// })

// const fetchDataPromise = (url) => {
//     return new Promise((res, rej) => {
//         const response = fetch(url)
//         if(response?.data){
//             res({ data: response?.data })
//         }else{
//             rej(new Error("Error:Something went wrong with API"))
//         }
//     })
// }

// fetchDataPromise("url")
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })

const authenticateUser = (userId) => {
    return new Promise((res,rej)=>{
        if(userId){
            res({_id: userId, name: "John Doe", email: "john@example.com"})
        }else{
            rej(new Error("Error:User not found"))
        }
    })
}

const fetchProfile = (userId) => {
    return new Promise((res)=>{
        res({profile: "userData"})
    })
}

const fetchPosts = (profile) => {
    return new Promise(res => {
        res({posts:["post1","post2","post3"]})
    })
}

authenticateUser("user435")
.then((user)=>{
    let userData = user;
    return fetchProfile(userData._id)
})
.then((profile)=>{
    let profileData = profile;
    return fetchPosts(profileData.profile)
})
.then((posts)=>{
    let postsData = posts;
    console.log(postsData)
})
.catch((err)=>{
    console.log(err.message)
})


