export class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data){
        let node = new Node(data)
        if(this.head === null){
            this.head = node;
            this.tail = node;
            this.tail.next = null;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    remove(index){
        if(index === 0){
            this.head = this.head.next
        }else{
            let temp = this.head
            for(let i=0;i<index-1;i++){
                temp = temp.next;
            }
            temp.next = temp.next.next;
        }
        this.size--;
    }

    getSize(){
        return this.size
    }

    display(){
        let linkedlist = []
        let temp = this.head
        while(temp!=null){
            linkedlist.push(temp.data)
            temp = temp.next;
        }
        return linkedlist.join(' -> ')+' -> null'
    }
}

