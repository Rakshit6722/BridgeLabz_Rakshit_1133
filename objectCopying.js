const obj1 = {
    name:"Rakshit",
    age: 21,
    address:{
        city:"Chandigarh"
    }
}

//shallow copy
const obj2 = {...obj1};

//deep copy
const obj3 = JSON.parse(JSON.stringify(obj1));