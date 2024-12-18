class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        this.root = this.insertRec(this.root,data);
    }

    insertRec(root,data){
        if(root === null){
            root = new TreeNode(data);
            return this.root;
        }

        if(data < this.root.data){
            root.left = this.insertRec(root.left,data);
        }else if(data > this.root.data){
            root.right = this.insertRec(root.right,data);
        }

        return root;
    }

    inorder(){
        this.inorderRec(this.root);
    }

    inorderRec(root){
        if(root !== null){
            this.inorderRec(root.left);
            console.log(root.data);
            this.inorderRec(root.right);
        }
    }

    preorder(){
        this.preorderRec(this.root);
    }

    preorderRec(root){
        if(root !== null){
            console.log(root.data);
            this.preorderRec(root.left);
            this.preorderRec(root.right);
        }
    }

    postorder(){
        this.postorderRec(this.root);
    }

    postorderRec(root){
        if(root !== null){
            this.postorderRec(root.left);
            this.postorderRec(root.right);
            console.log(root.data);
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

bst.inorder();
bst.preorder();
bst.postorder();