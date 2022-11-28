console.log("yo!");

// * QUEUES

/*

class Queue{

    constructor(){

        let collection = [];

        this.print = function() {

            console.log(collection);

        };

        this.enqueue = function(element) {

            collection.push(element);

        };

        this.dequeue = function() {

            console.log(collection.shift());

        };

        this.front = function() {

            console.log(collection[0]);

        };

        this.size = function() {

            console.log(collection.length);

        }

        this.isEmpty = function() {

            console.log(collection.length === 0);

        };

    }
}

const q = new Queue ();

q.enqueue(1);
q.enqueue(45);
q.enqueue("hello");
q.enqueue("world");
q.enqueue(true);

q.print();

q.dequeue();

q.front();

q.print();

q.size();

q.isEmpty();

*/

/*

class PriorityQueue {

    constructor(){

        let collection = [];

        this.printCollection = () => {

            console.log(collection);

        };

        this.enqueue = (element) => {

            if (collection.length === 0) {

                collection.push(element);

            } else {

                let added = false;

                for (let i = 0; i < collection.length; i++) {

                    if(element[1] < collection[i][1]){

                        collection.splice(i,0,element);

                        added = true;

                        break;

                    }
                }

                if (!added){

                    collection.push(element);
    
                }
            }

        }

        this.dequeue = () => {
            
            let value = collection.shift();
            console.log(value[0]);

        }

        this.front = () => {

            let value = collection[0];
            console.log(value[0]);

        }

        this.size = () => {

            console.log(collection.length);

        }

        this.isEmpty = () => {

            console.log(collection.length === 0);

        }
    };
}

const pq = new PriorityQueue();

pq.enqueue(["Dahl Tamares", 3]);
pq.enqueue(["Xyrelle Beltran", 1]);
pq.enqueue(["Jem Garing", 2]);
pq.enqueue(["Ralph Ocba", 5]);
pq.enqueue(["Joey Hipolito", 2]);
pq.enqueue(["Jelly Lumactud", 1]);

pq.printCollection();

pq.enqueue(["Jasper Villarosa", 3]);

pq.dequeue();
pq.dequeue();

pq.printCollection();

pq.size();

pq.front();

*/

// * BINARY SEARCH TREE

class Node {
    
    constructor(data, left = null, right = null){

        this.data = data;
        this.left = left;
        this.right = right;

    }
}

class BST{

    constructor(){

        this.root = null;

    }

    add(data){

        const node = this.root;

        if(node === null){

            this.root = new Node(data);

            return;

        } else {

            const searchTree = (node) => {

                if (data < node.data) {

                    if (node.left === null) {

                        node.left = new Node(data);

                        return;

                    } else if (node.left !== null) {

                        return searchTree(node.left);

                    }

                } else if (data > node.data) {

                    if (node.right === null){

                        node.right = new Node(data);

                        return;

                    } else if (node.right !== null) {

                        return searchTree(node.right);

                    }

                } else {

                    return null;

                }

            }

            return searchTree(node);
        }

    }

    findMin() {

        let current = this.root;

        while (current.left !== null){

            current = current.left;

        }

        return current.data;

    }

    findMax() {

        let current = this.root;

        while (current.right !== null) {

            current = current.right;

        }

        return current.data;

    }
    
    isPresent(data) {

        let current = this.root;

        while (current){

            if(data === current.data) {

                return true;

            }

            if(data < current.data) {

                current = current.left;

            } else {

                current = current.right;

            }
        }

        return false;

    }

    remove(data) {

        const removeNode = (node,data) => {

            if(node === null) {

                return null;

            }

            if(data == node.data) {
                
                // node has no children
                if(node.left == null && node.right == null) {

                    return null;

                }

                // node has no left child
                if(node.left == null) {

                    return node.right;

                }

                // node has no right child
                if(node.right == null) {

                    return node.left;

                }

                // node has two children
                let tempNode = node.right;

                while(tempNode.left !== null) {

                    tempNode = tempNode.left;

                }

                node.data = tempNode.data;

                node.right = removeNode(node.right, tempNode.data);

                return node;

            } else if (data < node.data) {

                node.left = removeNode(node.left, data);

                return node;

            } else {

                node.right = removeNode(node.right, data);

                return node;
            }

        }
        
        this.root = removeNode(this.root, data);

    }

    isBalanced() {

        return (this.findMinHeight() >= this.findMaxHeight() - 1);

    }

    findMinHeight(node = this.root) {

        if (node == null) {

            return -1;

        }

        let left = this.findMinHeight(node.left);

        let right = this.findMinHeight(node.right);

        if (left < right) {

            return left + 1;

        } else {

            return right + 1;

        }

    }

    findMaxHeight(node = this.root) {

        if(node == null) {

            return -1;

        }

        let left = this.findMaxHeight(node.left);

        let right = this.findMaxHeight(node.right);

        if(left > right) {

            return left + 1;

        } else {

            return right + 1;

        }

    }
    

}

const bst = new BST();



bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

console.log(bst);

bst.remove(4);

console.log(bst.findMin());

console.log(bst.findMax());

bst.remove(7);

console.log(bst.findMax());

console.log(bst.isPresent(4));