let id:number = 12;
let sum:number = id +=2
console.log(sum)
let company:string = "microsoft";
let isPublished:boolean = true;
let x:any = 'Hello';
x = false;

//initialize
let age:number;
age = 26

//type of arrays
let myArr:number[] = [2,3, 4, 5];
let strArr: string[] = ["hello", "world"];
let myStrArr:Array<string> = ["hello", "world"]; // alternatively you can do it this way with generics 

myArr.push(6,7)

let newArr:Array<any> = [true, 1, 5, "k"]

//tuples - the values should be assigned in the order defined
let person: [number, string, boolean] = [1, "Eliud", false]
console.log(person)
console.log(`${person[0]} ${person[1]} is a ${person[2] ? "" : "not"} employee`);

//array tuples
let staff: [number, string, boolean] [];
staff = [
    [1,"John",false],
    [2,"Jane",true],
];

//union - if you want a variable to hold more than one type
let fullName: string | number = "John Doe";
fullName = 23;

function greet (name:string) {
    console.log("Hello " + name.toUpperCase())
}

greet('eliud');

//this function will accept either a string or number as the arguement
//however you cannot apply methods that are specific to one data type on the parameters
//as such you have to put a condition
function salute (badge:string | number) {
    if(typeof badge === "string") {
        console.log("Good morning " + badge.toUpperCase());
    }
    else{
        console.log("Hello Your badge number is: " + badge);
        }
}

salute(12)
salute("karuga")
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
}
  
welcomePeople(["Alice", "Bob", "Charlie"]);
welcomePeople("Charlie");

//return annotation 
function getLength(input: string | string[]) : number {
    return typeof input ==="string" ? input.length : input.map(val => val.length).reduce((a , b )=>
    a+b );
};

console.log(getLength("hello"));
console.log(getLength(["kim", "chloe", "Kris"]))

function addition (num1: number, num2:number) : number{
    return num1 + num2 ;
}

console.log(addition(2, 18))

//arrow function
const subtraction = (num1: number, num2: number): number =>  num1 - num2;
console.log(subtraction(30, 4));

//void return used with union type when the return value isnt a particular data type
function printMessage(message: number | string) : void {
    console.log(message);
}

printMessage("This is Void Return")

//enums is a special type of "class" used to store a group of constants. They are named with the first character uppercase
//they accomodate/accept either string or numeric values
//by default enums will initialize the first value to zero and sequentially add 1 to subsequent constants
enum Color {
    Red =1, 
    Green, 
    Blue, 
    White,
};

console.log(Color.Blue)

enum Directions {
    Up ='North',
    Down='South',
    Left='West',
    Right='East',
}

console.log(Directions.Down);

//objects literals - typescript implicintly infers the data type of the values of an object. But you can
//be explicit about it by using TypeScript’s type annotations.

let student:{id:number, name:string}  = {
    name:'Wesley Smith',
    id:3,
}

//cleaner way with type assertion
type Book = {title: string, author: string, price:number};
const book1: Book = {
    title:"The Hobbit",
    author:"JRR Tolkien",
    price:9.99,
}

console.log(book1.title)




//objects as parameter
let personb= {
    name:"John Doe",
    age:35,
    occupation:"Software Engineer",
};
const greetperson = (pb: {name:string; age:number; occupation:string}) => {
    console.log(`Hello ${pb.name}, you are ${pb.age} years old and work as a ${pb.occupation}.`);
}

greetperson(personb);

const reading = ({title, author, price}:Book) => {
    console.log(`I am reading ${title}, written by ${author}.`)
}
reading(book1);

//type assertion -when you want to override a certain variable type. however keep in mind type doesnt 
//necessarily change the inherent data type of a value 
let b: any = "yes"
let zy = <string>b
//let zy = b as string
console.log(zy)
let y: any = 4;
console.log(y as number)

//Type Guards - use when we have union types that need to be treated differently based on their actual type
if(typeof b === 'string'){
    console.log('This is a string');
    }else if(typeof b === 'boolean'){
        console.log('this is a boolean');
        } else{
            console.log('This is something else');
            }

let something = "a string";
if (typeof something === 'string'){
    let strLength = (something as String).length;
    console.log(strLength);
} else {
    console.log("This is not a string!");
}

//more on functions - functions that return promise 
const fetchData = (): Promise<string> => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('done'), 2000);
    })
}

fetchData().then((data:string) => {console.log(data)}).catch((error) =>console.log(error));
//more example
type ApiResponse = {
    
    userId:number,
    title:string,
    id:number,
    completed:boolean,
}

/*const getData = (): Promise<ApiResponse []> => {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then((res) => {
        if(!res.ok) {
            throw new Error('Network Error!!')
        }
        return res.json()
    }).then((data:ApiResponse[]) => {return data}) .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
    });
};

getData().then((todos:ApiResponse[]) => {todos.map((todo)=> {console.log(todo.title)})
}).catch(error => {console.log(error)})*/
//using async and await instead of then and catch

interface Cat {
    fact: string;
    // Add other properties as needed
}
/*const catFact = async ():Promise<void> => {
    try { 
        const res = await fetch('https://catfact.ninja/fact?max_length=60');
        if (!res.ok) {throw new Error(`HTTP error! status: ${res.status}`)};
        const data : Cat = await res.json();
        //do something with the data
        console.log(data.fact)
    } catch (error) {
        console.log('There was an error -:', error);
    }
} 

catFact();*/

//Interfaces - just like types they are used to store data 
interface Person{
    firstName:string;
    lastName:string;
    age?: number;
    id?:string | number;
}

let person1:Person={
    firstName:"John",
    lastName:"Doe",
    id:"card"
}

//main differences - types can be used with unions while interfaces cant 
type Animal = "dog" | "cat";
//interface is ideal for objects data types. It doesnt support primitives
//interface has read-only 
interface Student {
    age?:number;
    readonly id:number;
}

let studentb:Student={
    age:25,
    id:34
}

//studentb.id =45, //cannot reassign id cause its a read-only property

//interface to define function 
interface MathFunc{
    (y: number, x: number): number
}

const adding: MathFunc = (y:number, x:number): number => y + x
adding(9, 4);

//with interfaces you can extend just like in regular JS classes 
interface Cattle {
    name:string;
    count:number;
}

interface Cows extends Cattle {
    color: string;
}




//Type guards - used when you have union types or interfaces that extend each other
function printAnimalDetails(animal: Animal, details: Person) {
    switch (animal) {
        case "dog":
            if ("age" in details) {
                console.log(`${details.firstName} is ${details.age} years old`);
            } else {
                console.log(`${details.firstName} does not provide his age`)
            };
            break;
        default:
            console.log(`I do not know how to handle ${animal}s yet`);
    }
};
printAnimalDetails("dog",person1);
//classes 
class Car { 
    
    model: string;
    year: number;
    private price:number;
    constructor(model: string, year: number, price:number){
        this.model = model
        this.year = year
        this.price=price
    }
   getPrice(){
    return `${this.model}, made in ${this.year}, costs $${this.price}`
   }
    
}

const myCar1 = new Car("Audi", 2023, 2000);
console.log(myCar1)
myCar1.model = "BMW"
console.log(myCar1)
//you can set some values of the classes to private/protected
//if you try to access them outside of the class it will give an error
//console.log(myCar1.price)
// to access a private property value, you typically create a method within the class that provides this information.
console.log(myCar1.getPrice());

//you can implement interface in a class
interface Icar{
    owner :string;
    color:string;
   register():string;
}

class Vehicles implements Icar {
    //owner: string;
    //color: string;
//TypeScript provides a shortcut to automatically generate properties from the constructor parameters using access modifiers (like public, private, protected)
    constructor( public owner:string, public color:string) {
        this.owner = owner;
        this.color = color;
    }
    register() {
        return `Registered to ${this.owner} with color ${this.color}`
        }
}
let car1 = new Vehicles('John Doe', 'Red');
console.log(car1.register())

//extending classes 
class Motors extends Vehicles {
    engine:string;
    constructor(owner:string, color:string, engine:string) {
        super(owner, color)
        this.engine = engine;
    }
}

const motor1 = new Motors("Eliud", "blue", "V12");
console.log(motor1.color);

//generics 
//generics is like a placeholder that allows you to define your type ambingously, which then you 
//later define the type a explicitly 
const getArray = (items: any[]) : any []=> {  
    return new Array().concat(items)
}

const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(["Eliud", "kay", "kange", "wan"]);
strArray.push("shaun")