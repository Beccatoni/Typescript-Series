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
userName ='Dave'
console.log(userName);



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

type mathFunction = (a:number, b:number) => number
// interface mathFunction {
//     (a:number, b:number):number
// } 

let multiply: mathFunction = function(c,d){
    return c * d
}


logMsg(multiply(2,5));


// optional parameters

 const addAll = (a:number, b:number, c?:number):
 number =>{
    // type guide
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
    
 }

//  default param value
 const sumAll = (a:number=10, b:number, c:number=2):
 number =>{
    // type guide
   
        return a + b + c
 }

 logMsg(addAll(3,5,6))
 logMsg(addAll(2,3))
 logMsg(sumAll(undefined,3))




//  rest parameters
const total = (...nums: number[]) =>{
    return nums.reduce((prev,curr)=> prev + curr)
}

console.log(total(2,3,4,1));


// never type
const createError = (errMsg: string)=>{
    throw new Error(errMsg);
}

const infinite = () =>{
    let i: number = 1
    while(true){
        i ++
        if(i > 50) break
    }
}
// custom type guard

const isNumber = (value:any):boolean =>{
    return typeof value === 'number'
}
console.log(isNumber(3));


const numberOrString = (value: number | string): string =>{
    if(typeof value === 'string')return 'string'
    if(typeof value === 'number')return 'number'
    return createError('This shoild never happen');
}

