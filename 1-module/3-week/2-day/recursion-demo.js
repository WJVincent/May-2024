/*
Log every number from 1..N
Sum to N: Sum all the numbers from 1..N
Log every element in an array
Sum every element in an array
Reverse the elements in an array
Reverse a string
Make an array of a range of nums from start..stop
*/

const logToN = (n) => {
    if(n === 0) return;
    console.log(n);
    logToN(n - 1);
}

const sumToN = (n) => {
    if(n === 0) return 0;
    return n + sumToN(n - 1);
}

const logArr = ([head, ...rest]) => {
    if(!head) return;
    console.log(head);
    logArr(rest);
};

const sumArr = (arr) => {
    if(arr.length === 0) return 0;
    return arr[0] + sumArr(arr.slice(1));
}

const revArr = (arr) => {
    if(arr.length === 0) return [];
    // return [arr[0], ...revArr(arr.slice(1))];
    return [...revArr(arr.slice(1)), arr[0]];
}

const revStr = (str) => {
    if(str.length === 0) return '';
    return revStr(str.slice(1)) + str[0];
}

const rangeArr = (start, stop) => {
    if(start > stop) return [];
    return [start, ...rangeArr(start + 1, stop)];
}

console.log(rangeArr(1, 10));