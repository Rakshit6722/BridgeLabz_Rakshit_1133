const URL = "https://jsonplaceholder.typicode.com/users"

const fetchData = (url,callback) => {
    fetch(url)
        .then((response)=>{
            const data = response.json();
            return data;
        })
        .then((data)=>{
            callback(data)
        })
        .catch(err => console.error(err))
} 

fetchData(URL,(data)=>{
    if(data){
        console.log(data);
    }
})