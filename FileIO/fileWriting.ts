const fs1 = require('fs')

//file writing async
fs1.writeFile("demo.txt","write file async",(err: any)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log("File written successfully async")
})


try{
    fs1.writeFileSync('demo.txt',"write file sync")
    console.log("File written successfully sync")
}catch(err){
    console.error("Error writing file", err)
}

