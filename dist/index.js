"use strict";
let id = 12;
let sum = id += 2;
console.log(sum);
let company = "microsoft";
let isPublished = true;
let x = 'Hello';
x = false;
//initialize
let age;
age = 26;
//type of arrays
let myArr = [2, 3, 4, 5];
let strArr = ["hello", "world"];
let myStrArr = ["hello", "world"]; // alternatively you can do it this way with generics 
myArr.push(6, 7);
let newArr = [true, 1, 5, "k"];
//tuples - the values should be assigned in the order defined
let person = [1, "Eliud", false];
console.log(person);
console.log(`${person[0]} ${person[1]} is a ${person[2] ? "" : "not"} employee`);
//array tuples
let staff;
staff = [
    [1, "John", false],
    [2, "Jane", true],
];
//union - if you want a variable to hold more than one type
let fullName = "John Doe";
fullName = 23;
function greet(name) {
    console.log("Hello " + name.toUpperCase());
}
greet('eliud');
//this function will accept either a string or number as the arguement
//however you cannot apply methods that are specific to one data type on the parameters
//as such you have to put a condition
function salute(badge) {
    if (typeof badge === "string") {
        console.log("Good morning " + badge.toUpperCase());
    }
    else {
        console.log("Hello Your badge number is: " + badge);
    }
}
salute(12);
salute("karuga");
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["Alice", "Bob", "Charlie"]);
welcomePeople("Charlie");
//return annotation 
function getLength(input) {
    return typeof input === "string" ? input.length : input.map(val => val.length).reduce((a, b) => a + b);
}
;
console.log(getLength("hello"));
console.log(getLength(["kim", "chloe", "Kris"]));
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(2, 18));
//arrow function
const subtraction = (num1, num2) => num1 - num2;
console.log(subtraction(30, 4));
//void return used with union type when the return value isnt a particular data type
function printMessage(message) {
    console.log(message);
}
printMessage("This is Void Return");
//enums is a special type of "class" used to store a group of constants. They are named with the first character uppercase
//they accomodate/accept either string or numeric values
//by default enums will initialize the first value to zero and sequentially add 1 to subsequent constants
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["White"] = 4] = "White";
})(Color || (Color = {}));
;
console.log(Color.Blue);
var Directions;
(function (Directions) {
    Directions["Up"] = "North";
    Directions["Down"] = "South";
    Directions["Left"] = "West";
    Directions["Right"] = "East";
})(Directions || (Directions = {}));
console.log(Directions.Down);
//objects literals - typescript implicintly infers the data type of the values of an object. But you can
//be explicit about it by using TypeScript’s type annotations.
let student = {
    name: 'Wesley Smith',
    id: 3,
};
const book1 = {
    title: "The Hobbit",
    author: "JRR Tolkien",
    price: 9.99,
};
console.log(book1.title);
//objects as parameter
let personb = {
    name: "John Doe",
    age: 35,
    occupation: "Software Engineer",
};
const greetperson = (pb) => {
    console.log(`Hello ${pb.name}, you are ${pb.age} years old and work as a ${pb.occupation}.`);
};
greetperson(personb);
const reading = ({ title, author, price }) => {
    console.log(`I am reading ${title}, written by ${author}.`);
};
reading(book1);
//type assertion -when you want to override a certain variable type. however keep in mind type doesnt 
//necessarily change the inherent data type of a value 
let b = "yes";
let zy = b;
//let zy = b as string
console.log(zy);
let y = 4;
console.log(y);
//Type Guards - use when we have union types that need to be treated differently based on their actual type
if (typeof b === 'string') {
    console.log('This is a string');
}
else if (typeof b === 'boolean') {
    console.log('this is a boolean');
}
else {
    console.log('This is something else');
}
let something = "a string";
if (typeof something === 'string') {
    let strLength = something.length;
    console.log(strLength);
}
else {
    console.log("This is not a string!");
}
//more on functions - functions that return promise 
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 2000);
    });
};
fetchData().then((data) => { console.log(data); }).catch((error) => console.log(error));
const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then((res) => {
        if (!res.ok) {
            throw new Error('Network Error!!');
        }
        return res.json();
    }).then((data) => { return data; }).catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    });
};
getData().then((todos) => {
    todos.map((todo) => { console.log(todo.title); });
}).catch(error => { console.log(error); });
//using async and await instead of then and catch
