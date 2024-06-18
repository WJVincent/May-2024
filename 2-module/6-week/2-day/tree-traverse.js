class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);

node4.left = node2;
node4.right = node6;
node2.left = node1;
node2.right = node3;
node6.left = node5;
node6.right = node7;
/*
        4
      /   \
     2     6
    / \   / \
   1   3 5   7
*/

const BFT = (root) => {
    const q = [root];

    while(q.length){
        const curr = q.shift();
        console.log(curr.val);

        if(curr.left) q.push(curr.left);
        if(curr.right) q.push(curr.right);
    }
}

const DFT = (root) => {
    const s = [root];
    
    while(s.length){
        const curr = s.pop();
        //do the thing
        console.log(curr.val);

        if(curr.right) s.push(curr.right);
        if(curr.left) s.push(curr.left);
    }
}

// BFT(node4);
DFT(node4);
