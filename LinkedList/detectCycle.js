import { LinkedList, Node } from "./linkedList.js";

const detectCycle = (ll) => {
    let slow = ll.head
    let fast = ll.head

    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;

        if(fast === slow) return true;
    }   

    return false
}

let ll1 = new LinkedList()
ll1.append(1)
ll1.append(2)
ll1.append(3)
ll1.append(4)
ll1.append(5)
ll1.append(6)
console.log(detectCycle(ll1))