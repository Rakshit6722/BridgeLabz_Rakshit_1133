const randomNum = (n) => {
    let set = new Set()

    while(set.size < n){
        set.add(Math.floor(Math.random()*n)+1)
    }
    return Array.from(set)
}

console.log(randomNum(5)) 