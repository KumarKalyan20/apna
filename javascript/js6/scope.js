let sum = 54; //Global Scope

function calSum(a, b) {
    let sum = a+b; //Function Scope
    console.log(sum);
}

calSum(2,4);
console.log(sum);

//BLOCK SCOPE

// for(let i=1; i<=5; i++) {
//     console.log(i); //block scope
// }

// console.log(i);

let age = 25;
if(age >= 18) {
    let str = "adult";
    console.log(str);
}

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {  //function scope
        let a =10;
        console.log(x);
        console.log(y);
    }
    console.log(a);
    innerFunc();
}

//Practice Qs  What will be the output?

let greet = "hello"; //global scope

function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }

    innerGreet();
}
console.log(greet);
changeGreet();

//Function Expression

let name = "shradha";
let x = 5;

const add= function(a,b) {
    return a+b;
    
}
 let hello = function() {
    console.log("hello");
 }

 hello = function() {
    console.log("good morning");
 }