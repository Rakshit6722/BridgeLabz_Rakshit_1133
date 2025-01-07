let obj1 = {
    name:"Rakshit",
    age:"21",
}

let obj2 = {
    name:"Rakshit",
    age:"21",
}

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

//freeze - prevents modification and extension of object
Object.freeze(obj1);
obj1.name = "Raghav"
obj1.education = "B.Tech"

console.log(obj1)

//seal - prevents extension of object but modification allowed
Object.seal(obj2);
obj2.name = "Raghav"
obj2.education = "B.Tech"
console.log(obj2)


//defineProperty

const obj3 = {}

Object.defineProperty(obj3,"name1",{
    value:"Rakshit",
    writable:false,
    enumerable:true,
    configurable:false
})

console.log(obj3.name1)