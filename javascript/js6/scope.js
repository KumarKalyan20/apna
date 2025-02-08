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

