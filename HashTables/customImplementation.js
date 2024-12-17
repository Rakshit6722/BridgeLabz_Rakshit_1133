class HashMap {
    #size = 53
    constructor() {
        this.keyMap = new Array(this.#size)
    }

    #hash(key) {
        let total = 0
        const PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key,value){
        let index = this.#hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        for(let pair of this.keyMap[index]){
            if(pair[0] === key){
                pair[1] = value
                return
            }
        }
        this.keyMap[index].push([key,value])
    }

    get(key){
        let index = this.#hash(key)
        let bucket = this.keyMap[index]
        if(bucket){
            for(let pair of bucket){
                if(pair[0] === key){
                    return pair[1]
                }
            }
        }

        return undefined
    }

    remove(key){
        let index = this.#hash(key)
        let bucket = this.keyMap[index]

        if(bucket){
            for(let pair of bucket){
                if(pair[0] === key){
                    bucket.splice(bucket.indexOf(pair),1)
                    return true
                }
            }
        }

        return false
    }

    getKeys(){
        let keys = []

        for(let bucket of this.keyMap){
            if(bucket){
                for(let pair of bucket){
                    keys.push(pair[0])
                }
            }
        }

        return keys
    }

    getValues(){
        let values = []

        for(let bucket of this.keyMap){
            if(bucket){
                for(let pair of bucket){
                    values.push(pair[1])
                }
            }
        }

        return values
    }

    display(){
        return this.keyMap
    }
}

let map = new HashMap()
map.set("hello","world")
map.set("goodbye","world2")
console.log(map.getKeys())
console.log(map.getValues())
console.log(map.get("hello"))
console.log(map.get("goodbye"))
console.log(map.remove("hello"))
console.log(map.display())
