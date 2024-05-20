# W2D1

- Assessment
- Arrow Functions
- POJO's
- Iterating through Objects

## Assessment (1h49m)

## Arrow Functions

Arrow functions are another syntax available to us when declaring functions.

Sometimes arrow functions are also called fat arrow functions, this name comes from comparing two ways to make an arrow

`->` vs `=>`

```js
function declaration() {}

let expression = function () {};

let arrow = () => {};
```

There are a couple things that make arrow functions distinct from other methods of function declaration. One is how they handle context (we will learn about the later in the course), the second is the ability to implicitly return.

```js
//explicit return
let plusFive = (num) => {
  return num + 5;
};

//implicit return
let plusFive = (num) => num + 5;
```

If we do not include curly brackets for the function body, we can implicity return the evaluation of a **single expression** from the function.

## POJO's

An object is an unordered reference data type that is at the core of JavaScript
functionality. Objects store `values` at specific reference points called `keys`

```js
let dog = {
  name: "Cali",
  age: 5,
  breed: "mixed",
  size: {
    heightInFt: 3,
    weightInLbs: 45,
  },
};

//how would I print the first name?

//how would I add a location key with the value of 'TN'?

//how would I change her age to 1001?

//how would I print her weight?
```

### Dot Notation

Keys are almost always strings (they can also be symbols, but that is much further into the weeds than you need to be currently) and so rather than always needing to key into an
object using bracket notation `object[key]` you can use dot notation
`object.key`.

```js
let obj = {
  first: "a",
  second: "b",
  third: "c",
};

console.log(obj.first, obj["first"]);
```

### Using Variables as Keys

Often when programming the goal is to write functions and processess that can be
generalized, one way to accomplish this goal is to use variables. This is a
common pattern when working with objects.

When using variables as keys you cannot use dot notation and must use bracket
notation.

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[someVariable]);
console.log(obj[some + variable]);
console.log(obj[time.toLowerCase()]);
```

### Checking if a key exists

- obj[key] !== undefined
- key in obj

```js
let myObj = {
  one: 1,
  two: 2,
  three: 3,
};

console.log(myObj["one"] === undefined);
console.log(myObj["five"] === undefined);

console.log("one" in myObj);
console.log("five" in myObj);
```

## Practice Session 1 (1h)

- Plain-Old Javascript Object Heading

## Iterating through Objects

`For In Loops`

```js
let obj = {
  name: "William",
  pet: "Cali",
  os: "linux",
};

for (let key in obj) {
  let val = obj[key];

  console.log("key ", key);
  console.log("val ", val);
}
```

`Object.values()`

```js
let obj = {
  name: "William",
  pet: "Cali",
  os: "linux",
};

let vals = Object.values(obj);
console.log(vals);
```

`Object.keys()`

```js
let obj = {
  name: "William",
  pet: "Cali",
  os: "linux",
};

let keys = Object.keys(obj);
console.log(keys);
```

`Object.entries()`

```js
let obj = {
  name: "William",
  pet: "Cali",
  os: "linux",
};

let entries = Object.entries(obj);
console.log(entries);
```

## Practice Session 2 (40m)

- Iterating Through Objects Heading

## Practice Session Walkthrough

- Array of Objects
- Nested Array of Objects
- Using Object.entries

## Pojo Basics Project (Until EOD)
