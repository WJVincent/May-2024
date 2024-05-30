# W3D4

- The event loop
- Async
- setTimeout / setInterval
- Readline && userInput

## The Event Loop

### Call Stack: Last In First Out - (LIFO)

- The call stack is the structure used in the JavaScript runtime to track the execution of function calls.
- We call the items placed onto the call stack stack frames
- When a function is called, a new frame is pushed onto the stack.
- When a function evaluates, the frame on the top of the stack is popped off the stack.

### Message Queue: First In First Out - (FIFO)

- Exists to track the handling of events.
- New items are added to the back of the line (enqueue).
- Items are removed from the front of the line (dequeue).
- Async code that is called in your program, is handed over to the runtime, allowing your program to continue running its synchronous code.
- When the runtime resolves the async code, it enqueues a message to the message queue.
- When the call stack finishes its last stack frame, the next message is dequeued, added to the call stack, and processed.

### Sync vs. Async

- Sync: If code is synchronous, that means that there is an inherent order among the commands and this order of execution is guaranteed.
- Async: If code is asynchronous, that means that there is no guarantee in the order that commands are executed. Asynchronous is the opposite of synchronous.

## setTimeout && setInterval

```js
/* 
setTimeout
params
1. a callback function
2. a delay in ms
3. any args to be passed into the callback function


setTimeout(function, delay, arg1, arg2..argN)
global.setTimeout(function, delay, arg1, arg2..argN)
*/

const hello = (name) => {
    console.log(`hello ${name}`);
};

setTimeout(hello, 1000, 'Geoffrey');

setTimeout(() => {
    console.log('without a prewritten function');
}, 1000);

/*
setInterval

same args as setTimeout, it just runs repeatedly until cleared
*/

let count = 0;

const interval = setInterval(() => {
    if(count === 5){ 
        clearInterval(interval)
        console.log(interval);
    } else {
        hello('Geoffrey');
        count++;
    }
}, 1000);

console.log(interval);
```

## Timeout Project p1 (Solo, 30m)

## Timeout Project p1 Walkthrough

## Timeout Project p2 (Solo, 30m)

## Timeout Project p2 Walkthrough

## Readline Demo

- starting the interface
- asking a question
- asking a second question based on the first question
- using answers from both questions
- closing the interface

## Guessing Game Project (Paired)

This project is a good time to flex your problem solving muscles. You will be starting the project from scratch, there is no starter provided. If you get through all of the guided portions, think of ways you can improve the program. There are many ways to improve this project, have some fun with it! 