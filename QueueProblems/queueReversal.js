class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

function reverseQueue(queue) {
    let stack = [];
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }
}


let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.printQueue());

reverseQueue(queue);

console.log(queue.printQueue());