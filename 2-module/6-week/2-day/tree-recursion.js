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


//recursive depth first traversal
const traverse = (root) => {
    if(!root) return;

    traverse(root.left);
    console.log(root.val);
    traverse(root.right);
}

traverse(node4);

/*
        4
      /   \
     2     6
    / \   / \
   1   3 5   7
*/
