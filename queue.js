class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
q.enqueue(12);
q.enqueue(10);
q.enqueue(13);
q.enqueue(14);
console.log(q.dequeue());
console.log(q.dequeue());