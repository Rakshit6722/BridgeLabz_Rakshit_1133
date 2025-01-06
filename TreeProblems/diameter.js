import { Tree } from "./inorderTraversal.js";

const tree = new Tree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

const diameter = (root) => {
    if(root === null) return 0;
    return 1 + Math.max(diameter(root.left), diameter(root.right));
}

console.log(diameter(tree.root));
