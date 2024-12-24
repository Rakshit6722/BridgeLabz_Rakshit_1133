import { LinkedList, Node } from "./linkedList.js";

let ll1 = new LinkedList()
ll1.append(1)
ll1.append(21)
ll1.append(3)
ll1.append(42)
ll1.append(5)

let ll2 = new LinkedList()
ll2.append(1)
ll2.append(2)
ll2.append(3)
ll2.append(4)
ll2.append(5)

let ll3 = intersection(ll1,ll2)
console.log(ll3.display())

function intersection(ll1,ll2){
    let set = new Set();
    let current1 = ll1.head;
    while (current1) {
        set.add(current1.data);
        current1 = current1.next;
    }

    let current2 = ll2.head;
    let result = new LinkedList();
    while (current2) {
        if (set.has(current2.data)) {
            result.append(current2.data);
        }
        current2 = current2.next;
    }

    return result;
}