class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    isEmpty() {
        return this.front === -1;
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }
        if (this.isEmpty()) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const element = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue[this.front];
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let i = this.front;
        while (true) {
            console.log(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
    }
}

const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.display();
console.log("Dequeued:", cq.dequeue());
cq.display();