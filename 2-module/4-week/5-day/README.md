# W4D5

- Custom Errors
- ES5 Classes
- PA
- PA Walkthrough
- Kahoot

## Custom Errors

Creating a custom error is just extending the Error class to inherit the behavior and then hooking up the stack trace so everything works as expected.

```js
give it all the same params as you would a normal error
class MyCustomError extends Error{
    constructor(...params){
        super(...params);
        if(Error.captureStackTrace) Error.captureStackTrace(this, MyCustomError);
        this.name = 'MyCustomError';
    }
}

throw new MyCustomError('something went wrong :(');

class ErrorWithCustomFields extends Error{
    constructor(extraMsg, ...params){
        super(...params);
        if(Error.captureStackTrace) Error.captureStackTrace(this, ErrorWithCustomFields);
        this.name = 'ErrorWithCustomFields ';
        this.extraMsg = extraMsg;
        this.date = new Date();
    }
}
```

## ES5 Classes

```js
//class constructor
function Animal(name) {
    this.name = name;
}

Animal.prototype.breathe = function() {
    console.log(`${this.name} breathes.`);
}

function Dog(name) {
    this.name = name;
}

//inheritance
Dog.prototype = new Animal("");

Dog.prototype.bark = function() {
    console.log(`${this.name} Barks.`);
}


//static method && variables
Dog.info = function(dog) {
    if (dog instanceof Dog) {
        console.log(`the dogs name is ${dog.name}`);
    } else {
        console.error('not dog');
    }
}

Dog.isCool = true;

const cali = new Dog("Cali");

cali.bark();
cali.breathe();
console.log(Dog.isCool);
Dog.info(cali);


// monkey patching
Array.prototype.type = 'array';

const arr = [];
console.log(arr.type)
```

## PA

## PA Walkthrough

## Kahoot
