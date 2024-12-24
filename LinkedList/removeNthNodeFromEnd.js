import { LinkedList, Node } from "./linkedList.js"

let ll2 = new LinkedList()
ll2.append(1)
ll2.append(2)
ll2.append(3)
ll2.append(4)
ll2.append(5);
console.log(ll2.display())
removeNthNodeFromLast(ll2,1)
console.log(ll2.display())


function removeNthNodeFromLast(ll2,n){
    let dummy = new Node(0)
    dummy.next = ll2.head
    let first = dummy
    let second = dummy

    for(let i=0;i<=n;i++){
        if(first === null) return;
        first = first.next
    }

    while(first!==null){
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    ll2.head = dummy.next
}
