class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    add(data, index) {
        let node = new Node(data);
        if (index === undefined || index === 0) {
            if (this.head === null) {
                this.head = node;
                this.tail = node;
            }
            else {
                node.next = this.head;
                this.head = node;
            }
        } else {
            if (index === 0) {
                this.add(data);
                return;
            }
            if (index === this.size) {
                this.addAtEnd(data);
                return;
            }
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
        }
        this.size++;
    }

    addAtEnd(data) {
        let node = new Node(data);
        if (this.size === 0) {
            this.add(data);
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    remove(index) {
        if (index === undefined || index === 0) {
            this.head = this.head.next;
            this.size--;
            return
        }else{
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            temp.next = temp.next.next;
            this.size--;
        }
    }

    removeLast(){
        let temp = this.head;
        for (let i = 0; i < this.size - 2; i++) {
            temp = temp.next;
        }
        temp.next = null;
        this.tail = temp;
        this.size--;
    }

    middle(){
        let slow = this.head;
        let fast = this.head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow.data;
    }

    display() {
        let temp = this.head;
        let str = []
        while (temp !== null) {
            str.push(temp.data);
            temp = temp.next;
        }
        console.log(str.join(' -> ') + ' -> null');

    }


}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.display();
linkedList.add(4, 2);
linkedList.display();
linkedList.add(5, 0);
linkedList.display();
linkedList.addAtEnd(6);
linkedList.display();
linkedList.remove(2);
linkedList.display();
linkedList.removeLast();
linkedList.display();
linkedList.remove();
linkedList.display();
console.log(linkedList.getSize());
console.log(linkedList.middle());