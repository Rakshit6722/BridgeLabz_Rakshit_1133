export class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class Tree{
    constructor(){
        this.root = null;
    }

    insert(val){
        this.root = this.insertRec(this.root, val)
    }

    insertRec(root, val){
        if(root === null){
            let newNode = new Node(val)
            return newNode;
        }

        if(val < root.val){
            root.left = this.insertRec(root.left, val)
        }else{
            root.right = this.insertRec(root.right, val)
        }
        return root;
    }
}

// let tree = new Tree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);


const inorderTraversal = (root) => {
    if(root !== null){
        inorderTraversal(root.left);
        console.log(root.val);
        inorderTraversal(root.right);
    }
}

inorderTraversal(tree.root);