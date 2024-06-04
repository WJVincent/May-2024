# M2-W4-D2

- CommonJS Modules
- OOP

## Questions Reminder

A reminder that we have switched to the discord question channel to improve our question asking abilities.

If you don't know how to formulate a good question, we can help you to do so, just ask! :)

## CommonJS Modules

Overview

- up until now we've put all our code in single JS file
- as code base gets larger we'll want to break our code up into multiple files
- each file containing a logical unit of code that defines a module.

Modules

- a module is just a javascript file
- local module: defined within your project
- core modules: native modules contained within Node.js
  - don't have to npm install
  - ex: `path`, `readline`, `fs`
- third party modules: imported using npm

Module systems

- recent node versions contain two different systems
  1.  CommonJS (legacy system)
  2.  ES Modules (newer system)
- conceptually similar
- syntax/implementation details differ

The Module Object

- each module in node has access to a `module` object
- represents current module
- contains number of properties with info about current module

The `module.exports` Property

- object used to export items from the module

To Export a Single Item:

- set `module.exports` equal to that item
- OR
- define property for that item on the `module.exports` obj

Common JS Modules:

```js
// animal.js
class Dog {}
class Cat {}
module.exports = { Cat, Dog };
// or
// module.exports = { Cat: Cat, Dog: Dog }
// or
// module.exports.Cat = Cat;
// module.exports.Dog = Dog;

// shelter.js
class Shelter {}
module.exports = Shelter;

// index.js
const { Cat, Dog } = require("./animal");
const Shelter = require("./shelter");
```

## Practice : CommonJS Modules (SOLO, 20m)

## Walkthrough: CommonJS Modules

## OOP

### What is OOP

- approach for breaking down large, complex products into simple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code

### The Big Picture

- group data and related actions / behaviors together
- treat as single entity within a larger system

### Simple Comparison of Programming Paradigms

```js
//procedural code
let nums = [1,2,3,4,5];

for(let i = 0; i < nums.length; i++){
    nums[i] = nums[i] * 2;
}

console.log(nums);

//functional code
let nums2 = [1,2,3,4,5];
const doubleNums = ([head, ...tail]) => {
    if(!head){
        return [];
    }

    return [head*2, ...doubleNums(tail)];
}

console.log(doubleNums(nums2));

class NumClass {
    constructor(nums){
        this.nums = nums;
    }

    double(){
        this.nums = this.nums.map(num => num * 2);
    }
}

const numInstance = new NumClass([1,2,3,4,5]);
numInstance.double();
console.log(numInstance.nums);
```

### 4 Pillars of OOP

#### Encapsulation

- the practice of bundling related properties and behaviors into
  one class
- each class has a purpose and is responsible for keeping track of
  properties related to that purpose and providing the methods
  necessary to manage those properties

#### Inheritance

- mechanism that passes traits of a parent class to its descendants
- prevents duplication of code

#### Polymorphism

- provides a way to perform a single action in different forms by
  calling the same method on different objects
- OVERRIDING VS OVERLOADING:
  - overriding refers to the fact that you can create instance methods with the same name in child classes and the last defined method (the method defined in the child class) will be the one executed
  - overloading refers to defining an instance method in a child class with the same name, but that takes in different variables. 
  - Javascript does NOT support overloading, but does support overriding.

#### Abstraction

- the idea of hiding code implementation behind interfaces
- implemented to hide unnecessary data and withdraw relevant data

### Example Code

```js
//defines a class
class Animal {
  //the constructor is used to create new instances of the class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //an instance method.
  //any instance of Animal can use this function
  speak() {
    console.log(`${this.name} says "animal sound"`);
  }

  print() {
    console.log({ name: this.name, age: this.age });
  }
}

//inheritance - Dog inherits from Animal
class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.tricks = [];
  }

  //polymorphism - overriding
  speak() {
    console.log(`${this.name} says "bark"`);
  }

  learnTrick(trick) {
    this.tricks.push(trick);
    return `${this.name} learned a new trick: ${trick}`;
  }

  doTrick(trick) {
    if (this.tricks.includes(trick)) {
      return `${this.name} ${trick}`;
    } else {
      return `${this.name} has confusion`;
    }
  }
}

class Cat extends Animal {
  //constructor is implicit
  //we are using the Animal constructor without changes
  speak() {
    console.log(`${this.name} says "meow"`);
  }
}
```

## Practice: Class Syntax (Solo, 20m)

## Walkthrough: Class Syntax

## Practice: Inheritance (Solo, 20m)

## Walkthrough: Inheritance

## Practice: Polymorphism (Solo, 20m)

## Walkthrough: Polymorphism

## Long Practice Time (Paired, Until EOD)

- Friendly and Evil Dragons (do this first)
- Manager and Employee Salaries (do this only after you are confident on the first practice)
- Adventure Project (avoid this practice unless feeling extremely confident, there are a lot of issues with the instructions and practice as a whole)
