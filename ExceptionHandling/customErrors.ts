class CustomError extends Error{
    constructor(message: string){
        super(message)
        this.name = "CustomError"
    }
}

function validateInput(input: string): void{
    if(input.length === 0){
        throw new CustomError("Input cannot be empty")
    }
}

try{
    validateInput("")
}catch(err: any){
    console.log(err.message)
}