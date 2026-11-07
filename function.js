// ()

// const { number } = require("framer-motion");

console.log("Hello World!");
// alert()
// prompt();


// function abcd() {
//     console.log("Hello!");
//     return "Muzamil";
// }
// console.log(abcd());

// efg(2,3);

// function efg(num1 = 0, num2 = 0) {
    
//     console.log(num1 + num2)
// }


// let abc = function () {
//     console.log("Muzamil")
// }
// abc();


// let age = 30;
// console.log(age);


// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.

function addTwoNumbers(first, second) {
    return first + second
}
// console.log(addTwoNumbers(4,7));

let sum = addTwoNumbers(4,7);
console.log(sum)

let h1 = document.querySelector("#heading");
h1.innerHTML = "Muzamil";

// 2. Get the value from an input with id "name Input" and display it inside a div with id
let inp = document.querySelector("#nameInput");
let div = document.querySelector("#result");
function input(){
    div.innerHTML = inp.checked 
}
console.log(inp);


let h3 = document.querySelector("#h3");

h3.style.color = "red"