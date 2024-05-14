# W1D2

-   Online Lecture Etiquette
-   Lecture Notes Repo
-   Intro to JS
-   Local JS and Git Live Demo
-   Expressions
-   Value Comparison
-   Variables
-   Functions
-   Conditionals
-   Loops

## Online Lecture Etiquette

1. Cameras on unless you have reached out to an instructor and have gotten an ok to be cameras off for the day or have an emergency take place and need to quickly turn the camera off and then back on.
2. Keep microphone muted at all times, unless called on
3. Be Present, both during lectures and pairing. Dont be playing games on your computer, checking social media, or messing with your phone during class time.
4. Make sure your name in Zoom matches your preferred name / pronouns.
5. Be Present, both during lectures and pairing. Dont be playing games on your computer, checking social media, or messing with your phone during class time.
6. Participate
    - Raise your hand to answer questions posed by the lecturer
    - Ask questions if you are confused or want clarification by using the zoom raise hand reaction.
    - Don't be afraid of saying the wrong thing
    - A SWE is `wrong` 95% of the time

## Lecture Notes Repo

[repo-link](https://github.com/WJVincent/Feb-2024)

I will be posting my lecture notes and additional resources into this repository each day.

You can view this in browser or download a local copy.

Do not make any changes to this repo, treat it as a read only directory, any local changes you make will prevent you from pulling down my changes each day.

In order to get the most up to date notes do this at the start of each class.

1. cd into the directory that contains these notes
2. run git pull to get my upstream changes

## Intro to JS

We will be spending a ton of our time here at app academy focusing on javascript in depth. So it is a good idea to have a brief understanding of the history and purpose of the language to give a sense of context to what we are learning.

JavaScript was originally written in 1995 and was created (in its infant form) in just over a week. It was written to be an easy to use and lightweight option for creating dynamic user interactions on web pages in contrast to much bulkier and complex languages.

The name JavaScript was decided on after a couple other options such as Mocha or LiveScript, due in part to the insane marketing push of Java at the time, and JavaScript developers wanting to take part in that name recognition. Seriously, look up the old Java commercials, they are hilarious!

JavaScript is the defacto web programming language today, it has been built from the ground up, since its creation to be purpose built for web development.

Asynchronisity and the built in compatibility of all web browsers is a huge advantage of using JavaScript.

## Local JS and Git Live Demo

We will be using a zoom poll to do all of this as a live code along in the main room. When you are done with the step answer yes to the poll. When at least 95% of the class has answered yes to the poll we will move on to the next step.

If due to a tech setup issue you cannot follow along, I will be making a thread in your discord that you can respond to. We will want to make sure that is dealt with today.

## Expressions

If you think of coding as a language, an expression is like a sentence, a
variable is a noun, and a keyword is a verb. A sentence combines nouns, verbs,
and other elements of language to bring across a single point. It takes words
and produces meaning.

An expression is a statement that **evaluates** to something as opposed to a
value which **is** something, or a keyword that **does** something.

```js
5 + 5; // -> 10

'hello' + ' ' + 'world'; // -> "hello world"

5 === 5; // -> true

5 !== 4; // -> true

1 < 2; // -> true

2 > 1; // -> true
```

## Value Comparison

```js
// Exclusive Comparison
console.log(5 < 9); // true
console.log(5 > 9); // false
console.log('a' < 'b'); // true (dictionary order)
console.log('cat' < 'cats'); // true (dictionary order)

// Inclusive comparison (... or equal to)
console.log(7 <= 10); // true
console.log(10 >= 10); // true
```

-   Equality

    -   `=` is an assignment operator
    -   `==` coerces data to check equality, hard to predict; **do not use**
    -   `===` strict equality
    -   `!==` strict NOT equal

```js
// Equality === and !==
console.log(2 === 2); // true
console.log(2 === 2.1); // false
console.log(2 !== 2.1); // true

// Two equality operators, === and ==
console.log(5 === '5'); // false
console.log(5 == '5'); // true (types are coerced)
console.log([] == 0); // true (can be unpredictable)
console.log([] == '0'); // false (can be unpredictable)
```

## Variables

-   The `=` operator is the `assignment operator`
    -   Left of the `assignment operator`
        -   Creates a space in memory with that name
        -   Think of it like writing a name on a box
    -   Right of the `assignment operator`
        -   The `value` that will be assigned to the namespace
        -   Think of it like the object you put in a box.
-   Three parts of a variable
-   +=, -=, \*=, /=
-   Prefix and Postfix ++/--

    ```js
    let name; // declaration (undefined)

    name = 'Leroy'; // assignment / reassignment

    let name2 = 'Jenkins'; // initialization

    console.log(name, name2);
    ```

## Functions

### What is a function?

-   A function is a procedure of code that will run when called.
-   Writing a function is known as a function declaration or function definition
-   We create functions so we do not have to repeat the same line of code, this allows us to re-use logic
-   Javascript reads top to bottom
-   Function does not run until its called/invoked `functionName()`

### Vocabulary

-   `function declaration` - writing a function (once)
-   `function call` / `invoking` - using a function (once or many times)
-   `parameter(s)` - input(s) to a function when _writing_ a function. A variable
    to be used by the function.
-   `argument(s)` - input(s) to a function when _calling_ a function. The value
    assigned to the parameter variable.
-   `return` what a function 'equals' or _evaluates_ to.

### Naming convention

-   CamelCase - `functionTest`
-   Descriptive names
    -   verb followed by a noun, CRUD `getInfo`, `deleteInfo`, `editInfo`
-   If the return value is a Boolean, the name should be `isValue`
    where Value is whatever we are checking

### Declaration Syntax

Here we are declaring the multiply function

-   We take in two `parameters` `num1` and `num2`
-   `num1` represents the first `argument`
-   `num2` represents the second `argument`

```js
//definition
function multiply(num1, num2) {
    return num1 * num2;
}
```

### Invocation Syntax

Here we are `invoking/calling` the multiply function

-   We are passing `4` as the first `argument`
-   We are passing `5` as the as the second `argument`
    -   The `parameters` will be the variables used to represent these `arguments` passed
-   this will evaluate to the functions return value

```js
multiply(4, 5); // -> 20
```

### Three things to remember about return statements are:

1. Every function call evaluates to its return value.

```js
function functionName() {
    return 'Hello World';
}

functionName(); // -> Hello World
```

2. Every function in JavaScript returns undefined unless a return is specified.

```js
function functionName() {
    // This function has no return
}
functionName(); // -> undefined
```

3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring any code below the return statement.

```js
function functionName() {
    // This function has no return
    return 'Hello World';
    console.log('Will not be reached');
}
functionName(); // -> "Hello World"
```

### Console.log

Use a console.log if you want to see the output of a function

-   `return`: the value a function evaluates to
-   `console.log()`: side effect, prints something to the terminal

```js
console.log(multiply(4, 5)); // 20 will be printed to the terminal
```

-   We are logging what the function evaluates too `20`
-   Which is its `return` value
-   If there is no `return` value
    -   A function evaluates to `undefined`
-   If we do not use a `console.log`
    -   we will see `nothing` printed to the terminal

### Order of execution

Javascript reads top to bottom
Anytime a function is called, js will enter the function and run the code within in the function

```js
// Will not be read until called
function myFunc() {
    console.log('second');
}

console.log('first');
myFunc();
console.log('third');
```

We will see first, second, and third printed to the console in that order.

## Practice Session 1 (SOLO, 1h30m)

-   Intro to Functions Heading
-   Function Parameters Heading
-   String Operators in a Function Heading
-   Math Operators in a Function Heading

## Practice Session 1 Walkthrough

-   Repeat Name (intro to functions problems)
-   Yell (string operators problems)
-   Plus Five (math operators problems)
-   Average of Four (math operators problems)

## Conditionals

Let us control what we decide to do, creates a decision making tree for our code

Conditionals cans be used to control the flow of our program

Conditional statements will act as control for the flow of our apps and functions.

```js
if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}
```

```js
let num = 20;

if (num > 10) {
    console.log('number is greater than 10');
} else if (num < 10) {
    console.log('number is less than 10');
} else {
    console.log('number is 10');
}
```

### Mutually exclusive condition

-   A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should use an if/else statement.
-   You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

```js
let side = 'heads';

if (side === 'heads') {
    console.log('heads');
} else {
    console.log('tails');
}
```

## Practice Session 2 (SOLO, 35m)

-   Conditionals Header

## Practice Session 2 Walkthrough

-   is Five
-   Odd Num Only
-   Valid Substring

## loops

Loops provide us a way to repeat behavior a set number of times.

-   We can use that behavior to progress through data structures and take a look at individual elements.
-   Loops consist of 3 main components:
    -   Initial Expression
    -   Condition for which we keep looping
    -   Step towards completing the loop/meeting the condition

There are may use cases of loops!

-   counting numbers
-   progressing through strings/arrays
    -   we loop through these data types to get information
    -   arrays can hold user information that we may need to access to print to the string

### While loops

-   `let i = 0`; initial expression, where to start
-   `i <= 5`; condition to be met
-   `i++`; increment i by 1, step to completing the loop
-   Remember `index's` start at `0`
-   Print every number between 0 up to 5 an increments of 1

```js
let i = 0;

while (i <= 5) {
    console.log(i);

    i++;
}
```

### For loop

-   `let i = 0`; initial expression, where to start
-   `i <= 5`; condition to be met
-   `i++`; increment i by 1, step to completing the loop
-   Remember `index's` start at `0`
-   Print every number between 0 up to 5 an increments of 1

```js
for (let i = 0; i <= 5; i++) {
    console.log(i); // 0 1 2 3 4 5
}

let word = 'hello world'
for(let i = 0; i < word.length; i++){
    console.log(i);
    console.log(word[i]);
}
```

### When to use?

    -   For loop: Use when a loops duration is based on a defined length.
    -   While loop: Use when a loops duration is based on a unknown or undefined length.

## Practice Session 3 (SOLO, 1hr)

-   Start on the Basic Loops Heading

## Practice Session 3 Walkthrough

-   Log Between
-   Elements of Odd Indices Reversed
-   Second Half
-   Log Between Stepper

## Drilling

-   Continue with Basic Loops Heading
