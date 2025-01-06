import { Tree } from "./inorderTraversal.js";

const tree = new Tree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

const pathSum = (root, targetSum) => {
    if(root === null) return false;
    if(root.left === null && root.right === null && root.val === targetSum) return true;
    return pathSum(root.left, targetSum - root.val) || pathSum(root.right, targetSum - root.val);
}

console.log(pathSum(tree.root, 3));
