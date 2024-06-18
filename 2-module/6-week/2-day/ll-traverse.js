class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const nodeA = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

const DFS = (root) => {
    const stack = [root];

    while(stack.length){
        const curr = stack.pop();
        console.log(curr.val);
        if(curr.next) stack.push(curr.next);
    }
}

const BFS = (root) => {
    const q = [root];

    while(q.length){
        const curr = q.shift();
        console.log(curr.val);
        if(curr.next) q.push(curr.next);
    }
}

// DFS(nodeA);
// BFS(nodeA);
