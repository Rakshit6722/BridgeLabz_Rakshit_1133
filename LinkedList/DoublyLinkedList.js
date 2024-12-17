class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    add(data, index){
        let node = new Node(data)
        if(index === undefined || index === 0){
            if(this.head === null){
                this.head = node;
                this.tail = node;
            }else{
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
        }else{
            if(index === 0){
                this.add(data)
                return
            }else if(index === this.size){
                this.addAtEnd(data)
                return
            }else{
                let temp = this.head;
                for(let i = 0; i < index - 1; i++){
                    temp = temp.next;
                }
                node.next = temp.next
                temp.next.prev = node
                temp.next = node
                node.prev = temp
            }
        }
        this.size++
    }

    addAtEnd(data){
        let node = new Node(data)
        if(this.size === 0){
            this.add(data)
            return
        }else{
            let temp = this.head
            while(temp.next !== null){
                temp = temp.next
            }
            temp.next = node
            node.prev = temp
            this.tail = node
        }
        this.size++
    }

    remove(index){
        if(index === undefined || index === 0){
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return
        } else if(index === this.size - 1){
            this.removeAtEnd()
            return
        }else{
            let temp = this.head
            for(let i=0;i<index-1;i++){
                temp = temp.next
            }
            temp.next = temp.next.next
            temp.next.prev = temp
            this.size--
        }
    }    

    removeAtEnd(){
        let temp = this.head
        while(temp.next.next !== null){
            temp = temp.next
        }
        temp.next = null
        this.tail = temp
        this.size--
    }

    display(){
        let temp = this.head
        let str = []
        while(temp !== null){
            str.push(temp.data)
            temp = temp.next
        }
        console.log(str.join(' <-> ') + ' <-> null')
    }
}

let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.add(1)
doublyLinkedList.add(2)
doublyLinkedList.add(3)
doublyLinkedList.add(4,2)
doublyLinkedList.add(5)
doublyLinkedList.addAtEnd(6)
doublyLinkedList.display()
doublyLinkedList.remove(2)
doublyLinkedList.display()
doublyLinkedList.removeAtEnd()
doublyLinkedList.display()
doublyLinkedList.remove()
doublyLinkedList.display()
console.log(doublyLinkedList.getSize())