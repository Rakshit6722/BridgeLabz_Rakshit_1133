const fs = require('fs')


//file reading async
fs.readFile('demo.txt',"utf8",(err:any,data:any)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
})

try{
    const data = fs.readFileSync('demo.txt',"utf8")
    console.log("File read successfully",data)
}catch(err){
    console.error("Error reading file", err)
}