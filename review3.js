class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size
    }

    add(data) {
        let node = new Node(data)
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.tail.next = null;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    getHead() {
        return this.head.data
    }

    remove(index) {
        if (index === 0) this.head = this.head.next

        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }
        temp.next = temp.next.next

        this.size--;
    }

    sort() {
        let n = this.size

        for (let i = 0; i < n; i++) {
            let curr = this.head
            for (let j = 0; j < n - i - 1; j++) {
                if (curr.data > curr.next.data) {
                    let temp = curr.data;
                    curr.data = curr.next.data
                    curr.next.data = temp;
                }
                curr = curr.next;
            }
        }
    }

    display() {
        let arr = []
        let temp = this.head
        while (temp != null) {
            arr.push(temp.data)
            temp = temp.next
        }
        return arr.join(' -> ') + " -> null"
    }
}

let ll1 = new LinkedList()
ll1.add(5)
ll1.add(2)
ll1.add(1)
ll1.add(3)
ll1.add(9)
ll1.sort()

let ll2 = new LinkedList()
ll2.add(14)
ll2.add(3)
ll2.add(2)
ll2.add(20)
ll2.add(9)
ll2.sort()

console.log(ll1.display())
console.log(ll2.display())

const mergeAverageIsPrime = (ll1, ll2) => {

    const sumDuplicates = (node1, ll2) => {
        let val = node1.data;
        let temp = ll2.head;
        let prev = null;

        while (temp != null) {
            if (temp.data === val) {
                val += temp.data;
                if (prev == null) {
                    ll2.head = temp.next;
                } else {
                    prev.next = temp.next;
                }
            } else {
                prev = temp;
            }
            temp = temp.next;
        }
        node1.data = val;
    };

    const merge = (ll1, ll2) => {
        let newNode = new Node(0);
        let temp1 = ll1.head;
        let temp2 = ll2.head;
        let temp3 = newNode;

        let set = new Set()

        let temp4 = ll1.head
        while (temp4 != null) {
            set.add(temp4.data)
            temp4 = temp4.next
        }

        let i = 0;

        while (temp1 != null && temp2 != null) {
            if (i % 2 === 0) {
                temp3.next = temp1;
                temp1 = temp1.next;
            } else {
                sumDuplicates(temp1, ll2);
                temp3.next = temp1;
                temp1 = temp1.next;
            }
            temp3 = temp3.next;
            i++;
        }

        while (temp1 != null) {
            temp3.next = temp1;
            temp1 = temp1.next;
            temp3 = temp3.next;
        }

        while (temp2 != null) {
            if (!set.has(temp2.data)) {
                temp3.next = temp2;
                temp3 = temp3.next;
            }
            temp2 = temp2.next;
        }

        return newNode.next;
    }

    const sort = () => {
        let temp = ll3
        let n = 0;
        while (temp != null) {
            n++;
            temp = temp.next
        }

        let temp2 = ll3

        for (let i = 0; i < n; i++) {
            let curr = temp2
            for (let j = 0; j < n - i - 1; j++) {
                if (curr.data > curr.next.data) {
                    let temp = curr.data;
                    curr.data = curr.next.data
                    curr.next.data = temp;
                }
                curr = curr.next;
            }
        }
    }

    const average = (ll) => {
        let temp = ll
        let size = 0
        while (temp != null) {
            size++;
            temp = temp.next
        }

        let total = 0;
        let temp2 = ll;
        while (temp2 != null) {
            total += temp2.data
            temp2 = temp2.next
        }

        return Math.floor(total / size)

    }

    const isPrime = (num) => {
        if (num < 2) return false;

        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }


    let ll3 = merge(ll1, ll2);
    sort(ll3)
    let mregedList = []
    let curr = ll3
    while (curr != null) {
        mregedList.push(curr.data)
        curr = curr.next
    }
    console.log("Merged List:")
    console.log(mregedList.join(" -> ") + " -> null")

    const avg = average(ll3)
    console.log("Average:", avg)

    console.log("is average prime:", isPrime(avg))

}

mergeAverageIsPrime(ll1, ll2)









