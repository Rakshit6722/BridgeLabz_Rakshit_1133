class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }


    enqueue(element, priority) {
        const node = { element, priority };
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }


    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return min.element;
    }

  
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            
            if (this.heap[parentIndex].priority <= this.heap[index].priority) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

 
    bubbleDown(index) {
        while (true) {
            let minIndex = index;
            const leftChild = this.getLeftChildIndex(index);
            const rightChild = this.getRightChildIndex(index);

            if (leftChild < this.heap.length && 
                this.heap[leftChild].priority < this.heap[minIndex].priority) {
                minIndex = leftChild;
            }

            if (rightChild < this.heap.length && 
                this.heap[rightChild].priority < this.heap[minIndex].priority) {
                minIndex = rightChild;
            }

            if (minIndex === index) {
                break;
            }

            this.swap(index, minIndex);
            index = minIndex;
        }
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0].element;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }
}


const pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);
console.log(pq.dequeue()); 
console.log(pq.dequeue()); 
console.log(pq.dequeue());
