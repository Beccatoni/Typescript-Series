// type casting

type One = string
type Two = string | number
type Three = 'hello'

let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'World'
let e = <string | number >'world'

const addOrConcat = (a:number, b:number, c:'add'|'concat'):number|string=>{
    if(c==='add') return a+b
    return '' + a + b
}

let myVal:string = addOrConcat(2,2,'concat') as string
// console.log(myVal);

// be careful TS sees no problem, but there is a string is returned
let nextVal:number = addOrConcat(2,2,'concat') as number
console.log(nextVal);

// misleading assertions
// 10 as string
// (10 as unknown) as string

// The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')
img.src
myImg.src 


