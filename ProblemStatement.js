//1. create multiple objects with similar properties without having
// to write the same properties again and again

//using factory function
function createObject(status, message){
    return{
        status: status,
        message: message,
    }
}

const obj1 = createObject("success", "Data fetched successfully");
const obj2 = createObject("error", "Data not found");
const obj3 = createObject("failed", "Data not fetched");

console.log(obj1);
console.log(obj2);
console.log(obj3);


//2. create a function that calculates total amount from API response data
const calculateTotalAmount = (apiResponse) => {
    let total = 0;
    Object.values(apiResponse.data).forEach(val => {
        if (typeof val === 'number') {
            total += val;
        }
    });
    return total;
}
const orderApiResponse = {
    data: {
        subtotal: 1000,
        tax: 100,
        shipping: 50,
        discount: -150
    }
};

console.log(calculateTotalAmount(orderApiResponse));

//3. create a function that receives a response data and make it immutable
const makeImmutable = (response) => {
    Object.freeze(response.data);
    return response;
}

const response = {
    data: {
        name:"abc",
        age: 20,
    }
}

console.log(makeImmutable(response));

//5. create a function that takes an object and adds two non iterable and deletable key in it

const addNonIterableAndDeletableKey = (obj) => {
    const key1 = "JWT_Key";
    const key2 = "JWT_Secret";
    Object.defineProperty(obj,key1,{
        value: "1234567890",
        writable: false,
        enumerable: false,
        configurable: false
    })

    Object.defineProperty(obj,key2,{
        value: "1234567890",
        writable: false,
        enumerable: false,
        configurable: false
    })
}

const obj7 = {
    a: 1,
    b: 2,
    c: 3
}

addNonIterableAndDeletableKey(obj7);
console.log(obj7);
console.log(Object.getOwnPropertyDescriptor(obj7,"JWT_Key"));


//6. create a function that takes a response and extract user data from it 
// without breaking the code flow in case user data is undefined or null

const extractUserData = (response) => {
    const userData = response?.data?.user
    return userData;
}

//7. create a function that takes and objet and if object has a 
//nest object inside it then create deep copy for it otherwise 
//create a shallow copy of the function

const deepCopy = (obj) => {
    const newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
}

const shallowCopy = (obj) => {
    const newObj = {...obj};
    return newObj;
}

const copyObjects = (arr) => {
    let newArr = [];

    arr.forEach(obj => {
        for(let key in obj){
            if(typeof obj[key] === "object"){
                newArr.push("deepCopy",deepCopy(obj));
                return;
            }
        }
        newArr.push("shallowCopy",shallowCopy(obj));
    })

    return newArr;
}

const arr = [
    {a: 1, b: 2, c: 3},
    {a: 4, b: 5, c: {d: 6}},
    {a: 7, b: 8, c: 9}
]

console.log(copyObjects(arr));

//8. fetching user data:
const fetchUserData = (callback) => {
    console.log("Fetching user data");
    setTimeout(() => {
        console.log("User data retrieved!");
        callback();
    }, 2000);
}

const displayUserProfile = () => {
    console.log("Profile loaded");
}

fetchUserData(displayUserProfile);
