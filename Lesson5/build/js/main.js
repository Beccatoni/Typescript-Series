"use strict";
// type casting
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'World';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// console.log(myVal);
// be careful TS sees no problem, but there is a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal);
// misleading assertions
// 10 as string
// (10 as unknown) as string
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
