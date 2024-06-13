class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
          this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if (currentNode.value > val) {
                    if (currentNode.left) currentNode = currentNode.left;
                    else {
                        currentNode.left = newNode;
                        return this;
                    }
                } else if (currentNode.value < val){
                    if (currentNode.right) currentNode = currentNode.right;
                    else {
                        currentNode.right = newNode;
                        return this;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    find(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;

        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;
        return current;
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let node = this.root;
        let queue = [];
        let visited = [];
    
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    
        return visited;
    } 
    
    DFSPreOrder() {
        let visited = [];
        let current = this.root;
        
        const traverse = (node) => {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return visited;
    }

    DFSPostOrder() {
        let visited = [];
        let current = this.root;

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }

        traverse(current);
        return visited
    }

    DFSInOrder() {
        let visited = [];
        let current = this.root;

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return visited;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
