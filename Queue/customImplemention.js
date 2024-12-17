class Queue{
    #arr = []

    enqueue(element){
        this.#arr.push(element)
    }

    dequeue(){
        if(this.#arr.length === 0){
            return "Queue is empty"
        }
        return this.#arr.shift()
    }

    display(){
        return this.#arr
    }

    getSize(){
        return this.#arr.length
    }

    peek(){
        return this.#arr[0]
    }

    isEmpty(){
        return this.#arr.length === 0
    }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.display())
queue.dequeue()
console.log(queue.display())
console.log(queue.getSize())
console.log(queue.peek())