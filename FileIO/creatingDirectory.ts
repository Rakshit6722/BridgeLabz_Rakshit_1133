const fs4 = require('fs')

//creating directory async
fs4.mkdir('demoDirAsync',(err: any)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log("Directory created successfully async")
})

//sync directory creation
try{
    fs4.mkdirSync("demoDirSync")
    console.log("Directory created successfully sync")
}catch(err){
    console.error("Error creating directory", err)
}