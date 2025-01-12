const moveElement = (box, distance, callback) => {
    let position = 0;
    const interval = setInterval(()=>{
        position += 10;
        box.style.left = position + "px";
        if(position >= distance){
            clearInterval(interval)
            callback();
        }
    },50)
}

const box1 = document.getElementById("box1")
moveElement(box1, 250, ()=>{
    console.log("Box moved successfully")
})