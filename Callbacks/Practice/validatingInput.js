class InvalidInput extends Error{
    constructor(message,name,statusCode){
        super(message);
        this.name = name;
        this.statusCode = statusCode;
    }
}

const validateInput = (input, callback) => {
    if(input.trim() === ""){
        callback("Input cannot be empty!")
    }else{
        callback(null,"Input is valid")
    }
}

const firstName = ""
validateInput(firstName,(err,successMessage)=>{
    try{
        if(err){
            throw new InvalidInput(err,"Invalid Error")
        }else{
            console.log(successMessage)
        }
    }catch(err){
        console.error(err.message);
        console.error(err.name)
    }
})