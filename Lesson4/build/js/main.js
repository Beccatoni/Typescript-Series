"use strict";
// Type aliases
// interfaces are more of objects and types are more of javascript 
// types
// Literal types
let myName;
let userName;
userName = 'Dave';
console.log(userName);
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello here!');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a:number, b:number):number
// } 
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 5));
// optional parameters
const addAll = (a, b, c) => {
    // type guide
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//  default param value
const sumAll = (a = 10, b, c = 2) => {
    // type guide
    return a + b + c;
};
logMsg(addAll(3, 5, 6));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
//  rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(2, 3, 4, 1));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 50)
            break;
    }
};
// custom type guide
const isNumber = (value) => {
    return typeof value === 'number';
};
console.log(isNumber(3));
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This shoild never happen');
};
