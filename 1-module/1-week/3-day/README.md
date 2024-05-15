# W1D3

-   Polya's
-   Debugging Tips
-   Intro to Arrays
-   Function Expressions
-   Mutability

## 1:1 meetings

-   I will pin my calendy link to the general channel
-   You are free to schedule 1:1's to talk about anything
    -   ask out of scope questions
    -   get additional help
-   I offer 30 minute sessions after class
-   Try to avoid more than 1 in a week to make sure anyone who wants to take advantage of that time can do so.

## Polya's Problem Solving Framework

4 part process for problem solving!

1. Define the problem - what is the prompt asking?
2. Make a plan
3. Execute the plan
4. Refactor

## Debugging Tips

-   Read your error messages
-   `console.log` values you want to test / blocks you want to make sure are running
-   Manually test your code, don't just assume that it will work. Check your edge cases.
-   Plan, plan, plan, and only then start coding. Think about what you need to code before just throwing some random javascript at the problem. Programming is 95% thinking, typing is just to bring those plans into reality.

### Debugging Problems Walkthrough (from homework)

## Intro to Arrays

-   Arrays are useful when you need to hold more than just value
-   Arrays are ordered collections of values
-   Similar to strings; arrays have indices
-   We can access the value by using the index
-   We can use loops to iterate through arrays

### Arrays can hold multiple values

```js
let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

// Arrays can hold strings
let stringArr = ['sunshine', 'hope', 'light'];
console.log(stringArr);

// * arrays can hold different data types at the same time
// * dynamically typed language
let variousData = [1, 'two', true, ['no way is that another', 'array']];
console.log(variousData); // [1, "two", true, ["no way is that another", "array"]]
```

### Indexing an array is similar to strings

```js
let animal3 = 'cats';
console.log(animal3[0]); // c
console.log(animal3[animal3.length - 1]); // s
console.log(animal3.length); // 3

// we are accessing the value at a specific index in an array
let animalArr = ['c', 'a', 't', 's'];
console.log(animalArr[0]); // c
console.log(animalArr[animalArr.length - 1]); // s
console.log(animalArr.length); // 3
```

### Arrays have a length property

```js
let animalArr = ['c', 'a', 't', 's'];
// * has a length property
console.log(animalArr.length); // 3
```

### Arrays have built in methods

-   Array methods are `functions`
-   They evaluate to a `return` value
-   They are called using dot notation on an array
-   Some take in `arguments`

#### .indexOf - attempts to find an element in an array

-   return value is the `index` of the argument if found
-   return value is -1 if argument is not found
-   it takes in an `argument` of what to search for

```js
console.log(animalArr.indexOf('c')); // 0
console.log(animalArr.indexOf('z')); // -1
```

#### .concat - combines two or more arrays into one new array

-   return value is an array, made from the combination of two or more arrays
-   it takes in one or more arrays as `arguments`

```js
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

console.log(nums1.concat(nums2, nums3)); //[1,2,3,4,5,6,7,8,9,10]

// order matters when concatenating
console.log(nums2.concat(nums1, nums3));
```

#### More Methods

Other common methods you will use often: (Go look them up on MDN!)

-   Array.push
-   Array.pop
-   Array.shift
-   Array.unshift
-   Array.slice
-   Array.splice

## Practice: Intro to Array Problems (50m, SOLO)

## Walkthrough: Intro to Array Problems

-   first and last
-   sum array
-   last index
-   minimum value
-   three increasing

## Function Expressions

### Function expression syntax!

-   Another a way to write a `function`
-   We learn about `function declaration` yesterday
-   Storing an `anonymous function` in a `variable` therefore giving it a name to alias it by

### Function Declaration

```js
function sayHello() {
    console.log('hello from say hello 1');
}
```

### Function expression

-   storing an `anon function` in a `variable`
-   `anon function` is a `function` with no name

```js
let sayHello2 = function () {
    console.log('hello from say hello 2');
};
```

## Functions are First Class Citizens / Objects

1. Can be stored in a variable. (right now)
2. Passed into a function as an argument. (next week)
3. Returned from a function. (next week and week 3)

## Mutability

Mutability is the concept of certain pieces of data being able to changed or mutated. Of the datatypes that we've seen so far, only arrays are mutable.

1. Mutable types (can be changed)
    - Arrays
    - Objects (we will learn these later)
2. Immutable Types (cannot be changed)
    - Numbers
    - Strings
    - NaN
    - undefined
    - null

Notice that the mutable types contain data where the immutable types **are** data.

### Reassignment !== Mutation

Reassigning a variable is not the same as mutating a value.

Imagine you have a box with a lego spaceship inside of it.

-   mutation would be reaching into the box and adding/removing a wing from from that spaceship
-   reassignment would be removing the ship entirely and putting a completely different one inside the box
    -   even if its an exact copy, its still a totally different spaceship

### Examples

```js
let arr = [1, 2, 3];
arr[1] = 7;
console.log(arr); //[1,7,3]

let str = 'abc';
str[1] = 'x';
console.log(str); // 'abc';

//reassigning !== mutable
let str = 'abc';
str += 'd'; // str = str + 'd';
console.log(str); // 'abcd'
```

## Practice: Mutability Heading (1h, SOLO)

## Walkthrough: Mutation Heading

-   range
-   select elements in range
-   addition mutator
-   mirror
-   fizzbuzz array
-   choosey endings

## Collaborative Problem Solving

-   From mutability problem set
-   Random student selection
-   One piece of the polyas plan, just one step, as small as you can make it
-   I will code out the plan

## Drilling

Work on problems until EOD
