class Queue{
    constructor(){
        this.queue = []
    }

    add(...ele){
        this.queue.push(...ele)
    }

    pop(){
        this.queue.shift()
    }

    top(){
        return this.queue[0]
    }

    isEmpty(){
        return this.queue.length === 0
    }

    display(){
        return this.queue
    }
}

export class Stack{
    constructor(){
        this.queue1 = new Queue()
        this.queue2 = new Queue()
    }

    push(element) {
        this.queue2.add(element);
        while (!this.queue1.isEmpty()) {
            this.queue2.add(this.queue1.top());
            this.queue1.pop();
        }
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop() {
        if (this.queue1.isEmpty()) {
            throw new Error("Stack is empty");
        }
        this.queue1.pop();
    }

    top() {
        if (this.queue1.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.queue1.top();
    }

    isEmpty() {
        return this.queue1.isEmpty();
    }

    display() {
        return this.queue1.display();
    }
}

let st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
console.log(st.display())
st.pop()
console.log(st.display())

