let arr = [1,1,2,4,4,5]

const duplicateElements = (arr) => {
    let map = new Map()

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }

    for(let [key,value] of map){
        if(map.get(key)>1){
            console.log(key)
        }
    }
}

duplicateElements(arr)