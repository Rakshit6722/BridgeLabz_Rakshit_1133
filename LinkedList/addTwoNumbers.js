import { LinkedList, Node } from "./linkedList.js";

let ll1 = new LinkedList()
ll1.append(1)
ll1.append(2)

let ll2 = new LinkedList()
ll2.append(2)
ll2.append(4)

let ll3 = addTwoNumbers(ll1,ll2)
console.log(ll3.display())

function addTwoNumbers(ll1,ll2){
    let p1 = ll1.head;
    let p2 = ll2.head;
    let carry = 0;
    let resultLL = new LinkedList();

    while (p1 !== null || p2 !== null) {
        let sum = carry;
        if (p1 !== null) {
            sum += p1.data;
            p1 = p1.next;
        }
        if (p2 !== null) {
            sum += p2.data;
            p2 = p2.next;
        }
        carry = Math.floor(sum / 10);
        resultLL.append(sum % 10);
    }

    if (carry > 0) {
        resultLL.append(carry);
    }

    return resultLL;
}
