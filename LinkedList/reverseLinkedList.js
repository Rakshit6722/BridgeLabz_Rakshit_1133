import { LinkedList } from "./linkedList.js";
import { Node } from "./linkedList.js";

const reverse = (ll) => {
    let head = ll.head
    let curr = head
    let prev = null

    while(curr!=null){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    ll.head = prev
}

let ll2 = new LinkedList()
ll2.append(1)
ll2.append(2)
ll2.append(3)
ll2.append(4)
ll2.append(5)
console.log(ll2.display())
reverse(ll2)
console.log(ll2.display())

