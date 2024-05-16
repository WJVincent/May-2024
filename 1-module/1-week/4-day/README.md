# Week 1 Day 4

-   Slice/Splice/Split/Join
-   Nested Loops
-   Nested Arrays
-   Helper Functions

# Array Methods: Slice/Splice/Split/Join

```js
/*
Slice

1. Does not mutate input array
2. returns a copy of a portion of an array into a new array
3. from start to end exclusive 

array.slice(start, end);

start - index at which to start the subsection of the array
end - index at which to end the subsection of the array
*/

let sliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let noArgs = sliceArr.slice(); //the whole array
let oneArg = sliceArr.slice(4); //[5,6,7,8,9]
let twoArg = sliceArr.slice(4, 7); //[5,6,7]

// ------------------------------------------------

/*
Splice

1. Mutates input array
2. changes the contents by removing or replacing elements in place

array.splice(start, deleteCount, item1, item2, itemN)

start - index at which to start changing the array
deleteCount - number of items to remove from the start index
item1, ...itemN - elements to add to the input array
*/
let spliceArr = ['James', 'William', 'Jeffrey', 'Blake', 'Kristen'];

spliceArr.splice(1, 1);

console.log(spliceArr);

// ------------------------------------------------

/*
Split

1. Does not mutate input string
2. Splits a string into a new array

string.split(separator, limit)

separator - The pattern describing where each split should occur
limit - an number specifying a limit on the number of elements in the array
*/
let splitStr = 'this is an input string';

let strArr = splitStr.split(' ');

console.log(strArr);

// ------------------------------------------------

/*
Join

1. Does not mutate input array
2. Joins an array into a new string

array.join(separator)

separator - A substring to insert into the return string in-between each element
*/
let stringsArr = ['this', 'is', 'an', 'input', 'string'];

let joinedArr = stringsArr.join(' ');

console.log(joinedArr);
```

## Nested Loops

```js
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}
```

`Pairs In Arrays`

```js
let dogs = ['belka', 'strelka', 'laika', 'dezik'];

for (let i = 0; i < dogs.length; i++) {
    let dog1 = dogs[i];
    for (let j = 0; j < dogs.length; j++) {
        let dog2 = dogs[j];
        console.log(dog1, dog2);
    }
}
```

`Unique Pairs In Arrays`

```js
let dogs = ['belka', 'strelka', 'laika', 'dezik'];

for (let i = 0; i < dogs.length; i++) {
    let dog1 = dogs[i];
    for (let j = i + 1; j < dogs.length; j++) {
        let dog2 = dogs[j];
        console.log(dog1, dog2);
    }
}
```

## Nested Arrays / 2D Arrays

```js
let nestedArray = [
    ['cat', 'dog', 'hamster', 'horse'],
    ['William', 'Kate', 'Caleb', 'Maggie'],
    ['Water', 'Fire', 'Earth', 'Air'],
];

//Values are grabbed in the same exact way as a 1D array
let outerValue = nestedArray[2]; // ['Water', 'Fire', 'Earth', 'Air']
let innerValue = outerValue[1]; // 'Fire'

//alternatively
let innerValue = nestedArray[2][1]; // 'Fire'
```

## Helper Functions

### What is a helper function?

-   function that performs part of the computation of another function
-   Can call a function from another function

### Why would helper functions be useful?

-   Decompose problems - which is the process of breaking down a larger problem into its smaller sub-problems.
-   Break down problems into chunks that are manageable
-   Use abstraction to manage complexity of program by hiding some implementation
-   Makes code more readable, more obvious what each part does, clean!

### Sometimes we'll need to solve problems that can be broken down into smaller problems.

-   Consider the transactions a person may make with their bank account.
-   Rather than encapsulating all of the activities within a single
-   function, we can instead write some helper functions to handle individual actions.

```js
let balance = 10;

// sub problems
let transaction = function (type, amount) {
    if (type === 'withdraw') {
        balance = withdraw(balance, amount);
    } else if (type === 'deposit') {
        balance = deposit(balance, amount);
    } else {
        console.log('You did not choose a valid transaction type');
    }

    return 'Balance: ' + balance;
};

// sub problems specific handles only withdraw
let withdraw = function (initialBalance, amount) {
    if (initialBalance - amount > 0) {
        console.log('Withdrawing:', amount);
        initialBalance -= amount;
    } else {
        console.log('Unable to complete transaction, not enough funds');
    }
    return initialBalance;
};

// only handles deposit
let deposit = function (initialBalance, amount) {
    if (amount < 10000) {
        console.log('Depositing:', amount);
        initialBalance += amount;
    } else {
        console.log(
            'UNABLE TO COMPLETE TRANSACTION, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY'
        );
    }
    return initialBalance;
};

console.log(transaction('ASDFASD', 100)); // You did not choose a valid transaction type
console.log(transaction('withdraw', 9)); // withdrawing 9,  balance of 1
console.log(transaction('withdraw', 6)); // unable to complete funds
console.log(transaction('deposit', 96)); // depositing 96, balance of 97
console.log(transaction('deposit', 1000000000000000)); //unable to complete transaction
```

## Practice Sessions (Repeat, 1h)

-   Alternate between Nested Loops and Helper Function Problem Sets
-   Demo two-ish problems after each set
