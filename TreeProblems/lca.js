import { Tree } from "./inorderTraversal.js";

const tree = new Tree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

const lca = (root, p, q) => {
    if(root === null) return null;
    if(root.val === p || root.val === q) return root;
    let left = lca(root.left, p, q);
    let right = lca(root.right, p, q);
    if(left !== null && right !== null) return root;
    return left !== null ? left : right;
}

console.log(lca(tree.root, 4, 5).val);
