class circularNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class circularLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    add(data,index){
        let node = new circularNode(data)
        if(index === undefined || index === 0){
            if(this.head === null){
                this.head = node;
                this.tail = node;
                this.tail.next = this.head
            }else{
                node.next = this.head;
                this.tail.next = node;
                this.head = node
            }
        }else{
            if(index === 0){
                this.add(data)
                this.size++
                return
            }else{
                let temp = this.head;
                for(let i=0;i<index-1;i++){
                    temp = temp.next
                }
                node.next = temp.next
                temp.next = node
            }
        }
        this.size++
    }

    addAtEnd(data){
        let node = new circularNode(data)
        if(this.size === 0){
            this.add(data)
            return
        }
        node.next = this.head
        this.tail.next = node
        this.tail = node
        this.size++
    }

    remove(index){
        if(index === undefined || index === 0){
            this.head = this.head.next
            this.tail.next = this.head
            this.size--
            return
        }else{
            let temp = this.head
            for(let i=0;i<index-1;i++){
                temp = temp.next
            }
            temp.next = temp.next.next
            this.size--
        }
    }

    removeAtEnd(){
        let temp = this.head
        while(temp.next !== this.tail){
            temp = temp.next
        }
        temp.next = this.head
        this.tail = temp
        this.size--
    }

    display(){
        let temp = this.head
        let str = []
        while(temp !== this.tail){
            str.push(temp.data)
            temp = temp.next
        }
        str.push(temp.data)
        console.log(str.join(" -> ") + " -> (back to head)")
    }
}

let cll = new circularLinkedList()
cll.add(1)
cll.add(2)
cll.add(3)
cll.add(4,0)
cll.addAtEnd(5)
cll.display()
console.log(cll.getSize())
cll.remove(2)
cll.display()
cll.removeAtEnd()
cll.display()
cll.remove()
cll.display()
console.log(cll.getSize())