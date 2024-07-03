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

type Guitarist = {
    name: string,
    active: boolean,
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




// enums
//"Unlike most TypeScript features, Enums are not a 
//type-level addition to Javascript but something
//added to the language and runtime"





