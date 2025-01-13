// rakshit: Write a function debounce that delays the processing of a function call until after a specified time has 
// passed since the last time it was invoked. Useful in scenarios like search input fields.

const debounceFunction = (func1, delay) => {
    let timer
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func1()
        }, delay)
    }
}

const greet = () => {
    console.log("Hello")
}

const debounced = debounceFunction(greet, 2000);
debounced()
debounced()
debounced()

//sparsh: deep merge recursively
function deepMerge(obj1, obj2) {
    const obj3 = { ...obj1, ...obj2 }
    const result = deepMergeHelper(obj3)
    return result

    function deepMergeHelper(obj) {
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }

        const newObj = Array.isArray(obj1) ? [] : {}
        const keys = Object.keys(obj)

        for (let key of keys) {
            newObj[key] = deepMergeHelper(obj[key])
        }

        return newObj;
    }
}

let obj1 = {
    name: "Rakshit",
    age: "22",
    address: {
        state: "UP"
    }
}
let obj2 = {
    name1: "Raghav",
    age: "24",
    address: {
        state: "UP"
    }
}

const obj3 = deepMerge(obj1, obj2);
console.log("obj3", obj3)
// console.log("obj2", obj2)
// obj2.address.state = "Chandigarh";
// console.log("obj2", obj2)
// console.log("obj1", obj1)

// Vivek : Create a custom error class that extends the built-in Error class, and implement 
// the toString() method to return a formatted string of the error message.

class CustomError extends Error {
    constructor(message, name, statusCode) {
        super(message);
        this.name = name;
        this.statusCode = statusCode
    }

    toString() {
        return `operation failed because of ${name} with a message: ${message} and statuscode: ${this.statusCode}`
    }
}

const validateUser = (age) => {
    if (age < 18) {
        throw new CustomError("Invalid age", "Age Error", "401")
    }
}

try {
    validateUser(12)
} catch (err) {
    console.log(err.message)
}

//Arpit  : Write a custom object that overrides the valueOf and toString methods to demonstrate the conversion to primitive values.
const customObj = {
    valueOf() {
        return 2
    },
    toString() {
        return "custom object"
    }
}

console.log(customObj + 2)
console.log(String(customObj) + " creation")

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

//sparsh: Create a simple event emitter class that allows registering event listeners and emitting events with data.
class Event {
    #event
    constructor(event) {
        this.#event = event
    }

    login() {
        return function emit(){
            console.log("Add user to database")
        }
    }

    logout() {
        return function emit(){
            console.log("remove user sesstion")
        }
    }

    eventEmitter(event){
        event.emit(event)
    }
}

const loginEvent = new Event("Login")
// loginEvent.eventEmitter()


// class EventEmitter {
//     constructor() {
//       this.events = {};
//     }
  
//     on(event, listener) {
//       if (!this.events[event]) {
//         this.events[event] = [];
//       }
//       this.events[event].push(listener);
//     }
  
//     emit(event, ...args) {
//       if (this.events[event]) {
//         this.events[event].forEach(listener => listener(...args));
//       }
//     }
  
//     off(event, listener) {
//       if (this.events[event]) {
//         this.events[event] = this.events[event].filter(l => l !== listener);
//       }
//     }
//   }