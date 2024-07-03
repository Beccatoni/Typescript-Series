"use strict";
let stringArray = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = '';
guitars.unshift('Jim');
let test = [];
let bands = [];
// tuple
let myTuple = ['Fafa', 4, true]; // more strict than an array
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple.push(6);
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    pro1: 'Dave',
    pro2: true
};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
// enums
//"Unlike most TypeScript features, Enums are not a 
//type-level addition to Javascript but something
//added to the language and runtime"
