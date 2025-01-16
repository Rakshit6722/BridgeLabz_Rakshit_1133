try{
    throw new Error("This is an error")
}catch(err: unknown){
    if(err instanceof Error){
        console.log(err.message)
    }else{
        console.log("An unknown error occurred")
    }
}

function divide(a: number, b: number): number{

    if(b===0){
        throw new Error("Cannot divide by zero")
    }

    return a/b;
}

try{
    console.log(divide(10,0))
}catch(err: any){
    console.log(err.message)
}finally{
    console.log("This block will always execute")
}