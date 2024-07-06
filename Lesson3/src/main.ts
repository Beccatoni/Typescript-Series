let stringArray = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArray[0] =  ''

guitars.unshift('Jim');

let test = []
let bands: string[] = []

// tuple

let myTuple: [string, number, boolean] = ['Fafa', 4, true] // more strict than an array
let mixed = ['John', 1, false];

mixed = myTuple
myTuple.push(6)


// objects
let myObj: object
myObj = []
console.log(typeof myObj);
myObj = bands
myObj = {};

const exampleObj = {
    pro1:'Dave',
    pro2: true
}

// when to use interface and type
// interface Guitarist  {
//     name: string,
//     active: boolean,
//     albums: (string | number)[]
// }
// add a question mark in front of a property to make it optional

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name:'Eddie',
    active: false,
    albums:[1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp

const greetGuitarist = (guitarist:Guitarist) =>{
return guitarist.name? `Hello ${guitarist.name.toUpperCase()}!`: `Hello!`
}

console.log(greetGuitarist(jp));



// enums
//"Unlike most TypeScript features, Enums are not a 
//type-level addition to Javascript but something
//added to the language and runtime"

enum Grade {
    U=1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);






