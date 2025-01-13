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