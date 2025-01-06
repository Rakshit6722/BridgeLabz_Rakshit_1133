import { Tree } from "./inorderTraversal.js";

const tree = new Tree();
tree.insert(1);
tree.insert(2);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(4);
tree.insert(3);

const isSymmetric = (root) => {
    if(root === null) return true;
    return helper(root.left, root.right);
}

const helper = (left, right) => {
    if(left === null && right === null) return true;
    if(left === null || right === null) return false;
    if(left.val !== right.val) return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
}

console.log(isSymmetric(tree.root));
