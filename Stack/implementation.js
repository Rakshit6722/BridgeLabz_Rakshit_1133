class Stack{
    #stack
    constructor(){
        this.#stack = []
    }

    push(...args){
        this.#stack.push(...args)
    }

    pop(){
        return this.#stack.pop()
    }

    peek(){
        return this.#stack[this.#stack.length - 1]
    }

    isEmpty(){
        return this.#stack.length === 0
    }

    size(){
        return this.#stack.length
    }

    

    print(){
        console.log(this.#stack)
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.peek())
console.log(stack.isEmpty())
stack.print()
console.log(stack.pop())
