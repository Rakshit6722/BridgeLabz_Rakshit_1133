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
            return root;
        }

        if(data < this.root.data){
            root.left = this.insertRec(root.left,data);
        }else if(data > this.root.data){
            root.right = this.insertRec(root.right,data);
        }

        return root;
    }

    inorder(){
        console.log()
        console.log("Inorder Traversal:");
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
        console.log()
        console.log("Preorder Traversal:");
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
        console.log()
        console.log("Postorder Traversal")
        this.postorderRec(this.root);
    }

    postorderRec(root){
        if(root !== null){
            this.postorderRec(root.left);
            this.postorderRec(root.right);
            console.log(root.data);
        }
    }

    levelOrder(){
        this.levelOrderRec(this.root)
    }

    levelOrderRec(root){
        let queue = []
        queue.push(root)
        while(queue.length>0){
            let current = queue.shift()
            console.log(current.data)

            if(current.left !== null){
                queue.push(current.left)
            }

            if(current.right !== null){
                queue.push(current.right)
            }
        }
    }

    height(){
        return this.heightRec(this.root)
    }

    heightRec(root){
        if(root === null){
            return -1
        }

        let leftHeight = this.heightRec(root.left)
        let rightHeight = this.heightRec(root.right)

        return Math.max(leftHeight,rightHeight) + 1
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

console.log("Height of the tree: ",bst.height())

bst.levelOrder()
 
