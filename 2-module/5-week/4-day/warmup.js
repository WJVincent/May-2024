class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
};

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  addToHead(val){
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.length++

    return newNode;
  }

  removeFromHead(){
    if(this.head){
      const oldHead = this.head;

      if(this.length === 1){
        this.head = null;
        this.length--;
        return oldHead;
      }

      const newHead = oldHead.next;
      this.head = newHead;
      this.length--;
      return oldHead;
    }

    return null;
  }

  addToTail(val){
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.length++;
      return newNode;
    };

    const currNode = this.head;

    while(currNode.next){
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  removeFromTail(){
    if(this.head){
      const oldHead = this.head;

      if(this.length === 1){
        this.head = null;
        this.length--;
        return oldHead;
      }

      let currNode = this.head;

      while(currNode.next.next){
        currNode = currNode.next;
      }

      const oldTail = currNode.next;
      currNode.next = null;
      return oldTail;
    }

    return null;
  }


  printListValues(){
    let currNode = this.head;

    while(currNode){
      console.log(currNode.val);
      currNode = currNode.next;
    };
  }
};

class Stack {
  constructor(){
    this.data = new LinkedList();
  }

  push(val){
    this.data.addToHead(val);
    return this.data.length;
  }

  pop(){
    const popped = this.data.removeFromHead();
    return popped;
  }

  peek(){
    return this.data.head.val;
  }

  printAll(){
    this.data.printListValues();
  }
}
