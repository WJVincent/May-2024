# M1-W2-D2

-   Reference vs Primitives
-   Array Methods
    -   forEach
    -   map
    -   filter
    -   find
    -   reduce
-   Rest and Spread
-   Destructuring

## Reference vs Primitive

`Primitive`

```js
let age = 10;
let numberOfFingers = age;
age = numberOfFingers + 1;
console.log(age, numberOfFingers);
```

<table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 10  |
| #002 | NOF | 10  |

</td><td>

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 11  |
| #002 | NOF | 10  |

</td></tr> </table>

`Reference`

```js
let biff = {
    type: 'dog',
    age: 10,
};
let buster = biff;
buster.age = 0;
console.log(biff, buster);
```

<table>
<tr>
  <th>Before</th>
  <th>After</th>
</tr>
<tr><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 10    |
| #004 | buster | #003  |

</td><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 0     |
| #004 | buster | #003  |

</td></tr> </table>

## Callbacks

### First Class Functions

1. Stored in a variable
2. --> Passed into a function as an argument <--
3. returned from a function

### What is a callback function?

-   A callback function passed into another function as an argument

### What is a higher order function

-   A function that has a function as its input or returns a function

## Array Methods

`forEach`

-   RUN THIS FUNCTION for each element in an array
-   Does NOT have return value

`map`

-   Make a new array
-   RUN THIS FUNCTION for each element in the array
-   Push the return value of the function into the array
-   Return the array

`filter`

-   Make a new array
-   RUN THIS FUNCTION for each element in the array
-   Push the element into the array if the return value evaluates to true
-   Return the array

`find`

-   RUN THIS FUNCTION for each element in the array
-   Return the first element that matches the testing function.

`reduce`

-   No Default Accumulator

    -   Make an accumulator and set it to the zeroeth element of the array
    -   RUN THIS FUNCTION for each element in the array, starting at the first index
    -   The return value of the function becomes the new accumulator
    -   return the final accumulator

-   Default Accumulator
    -   Make an accumulator and set it to the second parameter given to you
    -   RUN THIS FUNCTION for each element in the array, starting at the zeroeth index
    -   The return value of the function becomes the new accumulator
    -   return the final accumulator

## Array Methods Demo

-   my for each
-   my map
-   my filter
-   my every

## Rest and Spread

-   Rest Parameter takes the `rest` of the arguments and puts them into an array and single parameter

    ```js
    let makeThemBig = function (...strings) {
        //console.log(Array.isArray(strings));
        let result = [];

        for (let i = 0; i < strings.length; i++) {
            let string = strings[i];
            let upperString = string.toUpperCase();
            result.push(upperString);
        }

        return result.join(' ');
    };

    console.log(makeThemBig('hello', 'world'));
    console.log(makeThemBig('hello'));
    console.log(
        makeThemBig('Hello', 'world,', "how's", 'it', 'going', 'today?')
    );
    ```

-   Spread Operator takes some data and `spreads` it out of it's containing brackets.

    ```js
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let arr3 = [0, arr1, arr2];
    let arr4 = [0, ...arr1, ...arr2];
    console.log(arr3);
    console.log(arr4);

    let firstName = 'william';
    let charArr = [...firstName];
    console.log(charArr);

    let obj1 = { name: 'Mylo' };
    let obj2 = { animal: 'elephant', game: 'Dota 2' };
    let obj3 = { obj1, obj2, movie: 'Fantastic Mr. Fox' };
    let obj4 = { ...obj1, ...obj2, movie: 'Fantastic Mr. Fox' };
    console.log(obj3);
    console.log(obj4);
    ```

## Practice Session 2 (45m)

-   Rest and Spread Heading

## Practice Session 2 Walkthrough

-   Rest and Spread Heading

## Destructuring

Destructuring is just matching a pattern.

It is never necessary, but can be used to make your code cleaner.

```js
// array destructuring
let [game, player] = ['Mass Effect', 'William'];
console.log(game, player);

//swapping values
console.log('game: ', game, '/ player: ', player);
[player, game] = [game, player];
console.log('game: ', game, '/ player: ', player);

//object destructuring
let person = 'Emily';
let obj = { person: 'Caleb', animal: 'elephant' };
let { person: person2, animal } = obj;

console.log(person, person2, animal);

// rest property
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [first, second, ...rest] = myArr;
console.log({ first, second, rest });

let myObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
};

let { a, b, ...rest } = myObj;

console.log('a: ', a);
console.log('b: ', b);
console.log('rest: ', rest);
```

## Practice Session 3 (45m)

-   Destructuring Arrays and Objects Heading

## Practice Session 3 Walkthrough

## Callbacks Project (1hr cycles)
