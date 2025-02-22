// visibility modifiers
class Coder {
    secondLang!: string
    constructor(
        public readonly name:string,  
        public music: string,
        private age: number,
        protected lang: string = 'Typescript' 
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge(){
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)

console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang);


class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music:string,
        age: number,
        
    ){
        super(name, music, age)
        this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);
// /////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string):string
}

class Guitarist implements Musician{
    name: string
    instrument: string
    constructor(name:string, instrument:string){
        this.name = name
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${this.instrument}`
    }
}

const Page =  new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));
// ///////////////////////////////////////////////

class Peeps {
    static count : number = 0

    static getCount():number{
        return Peeps.count
    }
    public id: number

    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log();







