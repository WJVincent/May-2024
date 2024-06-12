# M2-W5-D3

- Linked Lists

## Challenge Warmup (25m)

This warmup is to get your brains thinking about custom data structures. Think
about ways you could accomplish this task, maybe draw it out before coding!

We won't be answering questions during this challenge, but I will do a walkthrough
after the time is up.

I don't expect anyone to complete this challange, just to work on it and start your
brain thinkng about data a little differently!

```txt
Make a stack data structure

You will need a class that has the following properties and methods

- properties
    - data
    - length
- methods
    - push
    - pop
    - traverse
        - visit each value from top to bottom of the stack
    - search
        - look for a specific value in the stack
        - null if value not found
    - peek
        - look at the value on top of the stack
```

## Intro: Linked Lists

- A linked list is an ordered sequence of nodes
- Each node consists of a value and a pointer to the next node in the list
- Like Arrays, Linked Lists are used to store ordered sequences of values.
- Unlike Arrays, Linked Lists are not using a contiguous block of memory
    - Like objects, linked lists use pointers to reference the location of data rather than the position of that data within its allocated space.
- Unlike Arrays, Linked Lists do not have indices. If you want to access a node you must traverse the list to find that node.

### Linked List Instance

Linked Lists are data structures that represent a linear sequence of "vertices"
(or nodes) and track three important properties: 

- head: first node in the list
- tail: last node in the list
- count: number of nodes in the list

### Node Instance

Each individual instance of a node tracks some other important properties as
well:

- value: value represented by the node 
- next: the next node in the list
- previous: the previous node in the list

### Demo: Singly Linked List

- addToHead
- addToTail
- removeFromHead
- removeFromTail
- traverse

## Practice: Linked Lists Basics Phase 1 (SOLO, 20m)

## Practice: Linked Lists Basics Phase 1 Walkthrough

## Practice: Linked Lists Basics Phase 2 (SOLO, 20m)

## Practice: Linked Lists Basics Phase 2 Walkthrough

## Practice: Linked Lists Basics Phase 3 (SOLO, 20m)

## Practice: Linked Lists Basics Phase 3 Walkthrough

## Long Practice: Linked Lists (Paired)
