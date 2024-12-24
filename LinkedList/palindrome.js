import { LinkedList, Node } from "./linkedList.js";

let ll2 = new LinkedList()
ll2.append(1)
ll2.append(2)
ll2.append(3)
ll2.append(2)
ll2.append(1)
console.log(palindrome(ll2))


function palindrome(ll2){
    if (!ll2.head || !ll2.head.next) return true;

    let slow = ll2.head;
    let fast = ll2.head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;

        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    if (fast !== null) {
        slow = slow.next;
    }

    while (prev !== null && slow !== null) {
        if (prev.data !== slow.data) {
            return false;
        }
        prev = prev.next;
        slow = slow.next;
    }

    return true;
}