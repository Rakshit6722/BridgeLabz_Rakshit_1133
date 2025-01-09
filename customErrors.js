class ApiError extends Error {
    constructor(message, statusCode, name){
        super(message);
        this.statusCode = statusCode;
        this.name = name;
    }
}

class BadRequestError extends Error {
    constructor(message, statusCode, name){
        super(message);
        this.statusCode = statusCode;
        this.name = name;
    }
}

const fetchData = async () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(new ApiError("Error:Something went wrong with API", 400, "ApiError"));
        },2000)
    })
}

fetchData()
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.name)
    console.log(err.message)
})


const processPayment = (amount) => {
    if(amount < 1000){
        throw new BadRequestError("Error:Amount is less than 1000", 400, "BadRequestError");
    }
    return {transactionId: "1234", message: "Payment successful"}
}

try{
    processPayment(500)
}catch(err){
    console.log(err.name)
    console.log(err.message)
}