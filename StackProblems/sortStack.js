import { Stack } from "./implementStackUsingQueue.js";

function sortStack(stack) {
    if (!stack.isEmpty()) {
        let temp = stack.pop();
        sortStack(stack);
        sortedInsert(stack, temp);
    }
}

function sortedInsert(stack, element) {
    if (stack.isEmpty() || element > stack.peek()) {
        stack.push(element);
    } else {
        let temp = stack.pop();
        sortedInsert(stack, element);
        stack.push(temp);
    }
}
let stack = new Stack();
stack.push(30);
stack.push(20);
stack.push(50);
stack.push(10);

console.log("Original Stack:");
console.log(stack.items);

sortStack(stack);

console.log("Sorted Stack:");
console.log(stack.items);