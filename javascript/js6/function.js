function hello() {
   console.log("hello");
}
hello();

function printName() {
    console.log("Apna College");
    console.log("Kumar Kalyan");
}
printName();

function print1to5() {
    for (let i=1;i<=5;i++) {
        console.log(i);
    }
}
print1to5();

function isAdult () {
    let age = 15;
    if(age >= 18) {
        console.log("He is Adult");
    } else {
        console.log("Not a Adult");
    }
}

isAdult();

//Create a Function that prints a poem,
function printPoem() {
    console.log("Twinkle Twinkle,little star");
    console.log("how I wonder what you are");
}
printPoem();

//Create a Function to roll a dice & always the value of the dice (1 to 6). Ans//

function rollDice() {
  let rand = Math.floor(Math.random() *6) + 1;
  console.log(rand);
    
}
rollDice();
rollDice();

//Functions with Arguments//
function printName1(name) {
    console.log(name);
}
printName1("jeethu");

function printInfo(name, age) {
   console.log(`${name}'s age is ${age}`);
}
printInfo("kalyan",21);
printInfo("chethu");
printInfo(15);

// function sum(a,b) {
//     console.log(a+b);
// }
// sum(23,7);

//Create a Function that gives the average of 3 numbers. Ans//

function calAvg(x, y, z) {
    avg=(x+y+z)/3;
    console.log(avg);
}
calAvg(10,20,30);

//Create a Function that prints the multiplication table of a number//

function printTable(n) {
   for(let i=n; i<=n*10; i+=n) {
    console.log(i);
   }
}
printTable(5);

function sum(a,b) {
 console.log("hello");
 console.log("everyone");
   return a+b;
}

// let s = sum(15,53);//this is also right//
 console.log(sum(15,53));

 function oldPerson(age) {
    if(age>=65){
        return  "oldman";
      } else {
        return "not oldman";
      }
      console.log("bye bye");
 }
 oldPerson(77);

 //Create a Function that returns the sum of numbers from 1 to n.

 function getSum(n) {
    let sum=0;

    for(let i=1; i<=n; i++) {
        sum +=i;
    }
    return sum;
 }

 getSum(4);

 //Create a Function that returns the concentration of all strings in an array//

 let str = ["hi", "hello", "bye", "!"];

 function concat(str) {
    let result = "";

    for(let i=0; i<str.length; i++) {
        result += str[i];
    }

    return result;
 }