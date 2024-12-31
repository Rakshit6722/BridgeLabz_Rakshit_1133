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

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
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

function reverseFirstKElements(queue, k) {
    if (queue.isEmpty() || k > queue.items.length) {
        return;
    }
    if (k <= 0) {
        return;
    }

    let stack = [];

    for (let i = 0; i < k; i++) {
        stack.push(queue.dequeue());
    }

    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }

    for (let i = 0; i < queue.items.length - k; i++) {
        queue.enqueue(queue.dequeue());
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.printQueue());

reverseFirstKElements(queue, 3);

console.log(queue.printQueue());