# M2-W4-D3

- Context
- Bind, Call, Apply
- Arrow Functions Context

## Context

The keyword `this` exists in every function and it evaluates to the object that is currently invoking that function.

This means that the value of `this` relies entirely on where a function is invoked rather than where it is written.

```js
class Dog {
    constructor(name){
      this.name = name;
    }
  
    bark(){
      console.log(this);
    }
};

const cali = new Dog('Cali');
let caliBark = cali.bark;
  
//called with context
cali.bark();


// save function with context but called on the global scope
//context has a runtime binding not a lexical binding
caliBark(); 

// the function is called via the setTimeout
// its this binding is the timeout object, not cali
setTimeout(cali.bark, 1000); 

//this works, cali is calling bark directly
setTimeout(() => cali.bark(), 2000);
```

## Context Practices (SOLO, 20m)

- Exercise: Context in Regular Functions

## Exercise: Context in Regular Functions Walkthrough

## Bind, Call, Apply

```js
class Dog {
  constructor(name){
    this.name = name;
  }

  bark(){
    console.log(`${this.name} says bark!`)
  }

  play(toy){
    console.log(`${this.name} likes to play with a ${toy}`)
  }
};

const cali = new Dog('Cali');
const caliBark = cali.bark;

caliBark() //Error -> the method lost its context [Function: bark]

//1. bind allows us to permanantly attach a context to a particular function

const boundCaliBark = caliBark.bind(cali);
boundCaliBark();
console.log(boundCaliBark); // [Function: bound bark]

//2. Call and Apply allow temporary attaching a context to a function
const play = cali.play

//call, (C)omma Seperated Args
play.call(cali, 'stick');

//apply, (A)rray of Args
play.apply(cali, ['ball']);
```

## Bind, Call, Apply Practices (SOLO, 50m)

- Practice: Bind
- Practice: Call and Apply

## Bind, Call, Apply Practice Walkthrough

## Arrow Functions and Context

Arrow functions do not have their own binding to `this`. 

They are not bound to a context at runtime like other functions.

Their context is defined by their lexical environment, so `this` is defined by their definition rather than at runtime, similar to a closure.

```js
class Dog {
  constructor(name){
    this.name = name;
  }

  delayedBark(){
    setTimeout(function(){
      console.log(this);
      console.log(`${this.name} says bark!`)
    }, 1000)
  }

  arrowDelayedBark(){
    setTimeout(() => {
      console.log(this);
      console.log(`${this.name} says bark!`)
    }, 1000)
  }
}

const cali = new Dog('Cali');

cali.delayedBark(); //timeoutObject Context -> runtime binding
cali.arrowDelayedBark(); //Dog {name: "Cali"} Context -> lexical binding
```

## Arrow Functions Practices (SOLO, 25m)

- Arrow Functions Review and Context Quiz
- Practice: Arrow Functions and Context

## Practice: Arrow Functions and Context Walkthrough

## Long Practice: Context (Paired)
