//Check if all numbers in our array are multiples of 10 or not.

let nums = [10, 20, 30, 40, 50];

let ans = nums.every ((el) => el%10 == 0);

console.log(ans);

//Create a function to find min number in an array.

let arr = [10, 4, 7, 8, 2, 46];

// let min = 50;

// for (let i=0; i<arr.length; i++) {
//     if(min >arr[i])
//       min = arr[i];
//     } 

//     console.log(min);         //this code is also Right

//using Reduce Method

function getMin(arr) {
    let min = arr.reduce((min, el) =>{
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}

//Default parameters

function sum(b, a = 2) {
    return a + b;
}

sum(1, 3); //4
sum(1); //a = 1, b = undefined

//Spread
// let arr = [1, 2, 3, 4, 5];

// Math.min(...arr);

// console.log(...arr);

//Spread (Array) Literals

let array = [1, 2, 3, 4, 5]; //val
let obj1 = { ...array }; //obj ->key:val

let obj2 = { ..."hello"};

// let newArray = [...array];

// let chars = [..."hello"];
 
// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let number= [...odd, ...even];

 const data = {
    email: "ironman@gmail.com",
    password:"abcd",
 };

 const dataCopy ={ ...data, id: 123, country: "India"};