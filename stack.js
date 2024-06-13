class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let prevFirst = this.first;
            this.first = newNode;
            this.first.next = prevFirst;
        }

        return ++this.size;
    }
    pop() {
        if (!this.size) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}