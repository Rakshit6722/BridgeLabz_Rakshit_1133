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
