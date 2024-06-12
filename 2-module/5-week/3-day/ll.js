class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LL {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    addToHead(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    removeFromHead(){
        if(!this.head) throw new Error('no');

        const oldHead = this.head; 
        this.head = this.head.next;

        this.length--;
        return oldHead.val;
    }

    addToTail(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
        } else {
            let curr = this.head;

            while(curr.next){
                curr = curr.next;
            }

            curr.next = newNode;
        }

        this.length++;
        return this;
    }

    addToTailRec(val, curr=this.head){
        if(!curr){
            const newNode = new Node(val);
            this.head = newNode;
            this.length++;
            return this;
        }

        if(!curr.next){
            const newNode = new Node(val);
            curr.next = newNode;
            this.length++;
            return this;
        }

        return this.addToTailRec(val, curr.next);
    }

    removeFromTail(){
        if(!this.head) throw new Error('nope');

        let curr = this.head;
        let prev = null;

        while(curr.next){
            prev = curr;
            curr = curr.next;
        }

        if(!prev){
            this.head = null;
        } else {
            prev.next = null;
        }

        this.length--;
        return curr;
    }

    traverse(){
        if(!this.head) return;
        let curr = this.head;

        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
    }

    traverseRec(curr=this.head){
        if(!curr) return 'done';
        console.log(curr.val);
        return this.traverseRec(curr.next);
    }

    search(target, curr=this.head){
        if(!curr) return false;
        if(curr.val === target) return true;
        return this.search(target, curr.next);
    }
}

const ll = new LL();
ll.addToHead('william');
ll.addToHead('trevor');
ll.addToTailRec('geoffrey');
console.log(ll.search('william'));
