//queue w/ll
// - enqueue
// - dequeue
// - peek
// - print traversal

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    removeFromHead(){
        if(!this.head) return null;
        
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return oldHead.val;
    }

    addToTail(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;
    }

    printAll(){
        if(!this.head) console.log('empty list');

        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

class Queue {
    constructor(){
        this.data = new LL();
    }

    enqueue(val){
        this.data.addToTail(val);
        return this.data.length;
    }

    dequeue(){
        const res = this.data.removeFromHead();
        return res;
    }

    peek(){
        return this.data.head.val;
    }

    traverse(){
        this.data.printAll();
    }
}
