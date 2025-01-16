const fs3 = require('fs')

//file appending async
fs3.appendFile('demo.txt', "append file assync", (err: any, data: any) => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log("File appended successfully async")
}
)


try{
    fs3.appendFileSync('demo.txt', "append file sync")
    console.log("File appended sync successfully sync")
}catch(err){
    console.error("Error appending file", err)
}

