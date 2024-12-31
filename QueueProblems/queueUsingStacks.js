export class Stack{
    constructor(){
        this.st = []
    }

    push(...args){
        this.st.push(...args)
    }

    pop(){
        this.st.pop()
    }

    isEmpty(){
        return this.st.length === 0
    }

    peek(){
        return this.st[this.st.length-1]
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.peek());
                this.stack1.pop();
            }
        }
        if (!this.stack2.isEmpty()) {
            return this.stack2.pop();
        }
        return null; 
    }

    isEmpty() {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }

    peek() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.peek());
                this.stack1.pop();
            }
        }
        if (!this.stack2.isEmpty()) {
            return this.stack2.peek();
        }
        return null; 
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); 
console.log(queue.peek());   
console.log(queue.dequeue()); 
console.log(queue.isEmpty()); 
console.log(queue.dequeue()); 
console.log(queue.isEmpty()); 