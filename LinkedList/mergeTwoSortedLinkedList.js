import { LinkedList, Node } from "./linkedList.js";

let ll1 = new LinkedList()
ll1.append(5)
ll1.append(4)
ll1.append(3)
ll1.append(2)
ll1.append(1)
let ll2 = new LinkedList()
ll2.append(10)
ll2.append(9)
ll2.append(8)
ll2.append(7)
ll2.append(6)

let node = mergeLinkedList(ll1,ll2)
while(node!=null){
    console.log(node.data)
    node = node.next
}


function mergeLinkedList(ll1,ll2){
    let temp1 = ll1.head
    let temp2 = ll2.head

    let dummyNode = new Node(-1)
    let temp3 = dummyNode

    while(temp1!==null && temp2!==null){
        if(temp1.data>temp2.data){
            temp3.next = temp2;
            temp2 = temp2.next
        }else{
            temp3.next = temp1
            temp1 = temp1.next
        }
        temp3 = temp3.next
    }

    while(temp1!==null){
        temp3.next = temp1;
        temp1 = temp1.next;
        temp3 = temp3.next;
    }

    while(temp2!=null){
        temp3.next = temp2;
        temp2 = temp2.next;
        temp3 = temp3.next;
    }

    return dummyNode.next
}