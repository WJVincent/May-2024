# M2-W6-D2

- sorting long practice
- binary trees
- binary search trees

## Custom Sorting Project (Paired, 1.5h)

If you finish early go ahead and dig into the trees related homework.

## Intro to Trees (30m)

![graphs](./graphs.png)

- A Graph is a collection of nodes and any amount of edges between those nodes
  (Linked Lists and Trees are subtypes of graphs).
- A Tree is a graph that doesn't have any cycles, each node must have only one
  parent.
- A Binary Tree is a Tree where nodes have at most two children.

### Terms

- Node: An element in a graph
- Edges: The connections between nodes, also called a pointer.
- Root: The ultimate parent, the node of a tree that can access all other nodes
  through edges. The root cannot have a parent.
- Parent/Child: A Parent node points to a child node.
- Neighbors: The connections to a given node.
- Subtree: A Tree whose root node is a child of another node in the tree.
- Internal Node: A node that has children and has a parent, also called a branch
  node.
- Leaf: A node that does not have any children. An outer node.
- Path: A series of nodes that can be traversed through edges.
- Level: The number of edges between a node and the root node.
- Height: The number of edges between the root node and the bottom-most node.

### Constructing a Simple Tree

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;

console.log(a);

/*
        a
      /   \
     b     c
    / \   /
   d   e f
*/
```

## Tree Traversal/Search

Binary Search Trees are an optimized Binary Tree

- Every node to the left must be less than the parent node.
- Every node to the right must be greater than the parent node.
- In the case of an equal node there are three possible implementation choices.
  - Discard the duplicate node (like a set)
  - Place the duplicate node on the left branch
  - Place the duplicate node on the right branch.

This structure allows for O(log n) search, insertion, and deletion.

- Traversal: The process of visiting or evaluating every node in a tree.
- Search: A traversal that stops when you find what you were looking for.

```js
//Boilerplate Binary Search Tree
/*
        4
      /   \
     2     6
    / \   / \
   1   3 5   7
*/

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
```

```js
//recursion access order example

const eachEl = (arr) => {
    if(!arr.length) return; 
    console.log(arr[0]);
    eachEl(arr.slice(1));
    // console.log(arr[0]);
}

eachEl([1,2,3,4,5]);
```

### Pre-order Traversal

Access each value as you traverse the tree before recursing.

1. Print the current node
2. Recursively call left subtree
3. Recursively call right subtree

The order would be: `4 -> 2 -> 1 -> 3 -> 6 -> 5 -> 7`

### In-Order Traversal

Access each value in order as you traverse.

1. Recursively call left subtree
2. Print the current node
3. Recursively call the right subtree

The order would be: `1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7`

### Post-order Traversal

Access each value as you traverse after recursing.

1. Recursively call the left subtree
2. Recursively call the right subtree
3. Print the current node

The order would be: `1 -> 3 -> 2 -> 5 -> 7 -> 6 -> 4`

### Depth First vs. Breadth First Traversal

All of the above traversal orders are actually under the depth first umbrella.
While the order of printing changes, the sequence of accessing the nodes is the
same.

It starts at the root and walks down the left subtree until it hits a leaf node.
Then it goes back up and traverses the right subtree. The repeats until all the
nodes have been visited.

It traverses until it hits a dead end and then backtracks to the next branch.

## Demo: Breadth First / Depth First Iterative Pattern

This pattern is true for all graph structures
The logic for find neighbors changes and the thing you are doing changes but the core logic is static.

- stack for Depth first, queue for Breadth first
- while the stack/queue has length loop
    - take the next element out of the stack/queue
    - Do the thing.
    - find neighbors and put them into the stack/queue

## Practice: Binary Search Tree pt1 (Solo, 25m)

## Binary Search Tree pt1 Walkthrough

## Practice: Binary Search Tree pt2 (Solo, 25m)

## Binary Search Tree pt2 Walkthrough

## Practice: Binary Search Tree pt3 (Solo, 25m)

## Binary Search Tree pt3 Walkthrough

## Binary Search Tree pt4 (Solo, 25m)

## Binary Search Tree pt4 Walkthrough

## Binary Trees Long Practice (Paired)
