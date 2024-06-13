// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    pop() {
        if (!this.head) return undefined;
    
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
    
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    
        return current;
    }

    shift() {
        if (!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let currentNode = this.head;
        while (index) {
            currentNode = currentNode.next;
            index--;
        }

        return currentNode;
    }

    set(index, val) {
        let currentNode = this.get(index);

        if (currentNode) {
            currentNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index === this.length) return !!this.push(val);
        else if (index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        else if (index === this.length - 1) return this.pop();
        else if (index === 0) return this.shift();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev;
        let counter = 0;
        
        while (counter < this.length) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            counter++;
        }

        return this;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList();
list.push("Hello");
list.push("How");
list.push("Are");
list.push("You?");
list.push("Goodbye");

