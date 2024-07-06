// Type aliases
// interfaces are more of objects and types are more of javascript 
// types

type StringOrNumber = string | number

type StringOrNumberArray = (string | number)[]


type Guitarist = {
    name?: string,
    active: boolean,
    albums: StringOrNumberArray
}

type UserId = StringOrNumber

// Literal types
let myName: 'Dave'

let userName: 'Dave'|'John'|'Amy'
userName ='Amy'


// functions
const add = (a:number,b:number):number =>{
    return a + b
}

const logMsg = (message:any):void =>{
    console.log(message)
}

logMsg('Hello here!');
logMsg(add(2,3));

let subtract = function(c:number, d:number):
number{
 return c - d
}

// type mathFunction = (a:number, b:number) => number
interface mathFunction {
    (a:number, b:number):number
} 

let multiply: mathFunction = function(c,d){
    return c * d
}


logMsg(multiply(2,5));


