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