import { LinkedList, Node } from "./linkedList.js";

let ll2 = new LinkedList()
ll2.append(1)
ll2.append(2)
ll2.append(3)
ll2.append(4)
ll2.append(5)
console.log(middleElement(ll2))


function middleElement(ll2){
    let slow = ll2.head
    let fast = ll2.head

    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data
}