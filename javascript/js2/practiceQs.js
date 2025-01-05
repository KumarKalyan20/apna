let size="L";

if(size ==="XL"){
    console.log("price is Rs. 250");
} 
else if(size ==="L"){
    console.log("price is Rs. 200");
}
else if(size ==="M"){
    console.log("price is Rs. 100");
}
else {
    console.log("price is Rs. 50");
}

//Nested If statement

// let marks = 45;

// if(marks >=33){
//     console.log("Pass");
//     if (marks >=80){
//         console.log("Grade : O");
//     } else{
//         console.log("Grade : A");
//     }
// }else{
//     console.log("Better luck next time!");
// }


//Logical Operator

let marks=70;

if((marks>=35 && marks<=80) || !false){
    console.log("pass");//pass
    console.log("A+");//A+
}

// PracticeQs Example

let num=12;

if((num%3===0) && ((num+1 == 15) || (num-1 == 11 ))){
    console.log("safe");
} else{
    console.log("unsafe");
}

//-----//
let str="apple";

if((str[0]=='a') && (str.length>3)){
    console.log("Good string");
} else {
    console.log("Not a good string");
}

//Truthy & Falsy

if(undefined){
    console.log("it has true value");
} else {
    console.log("it has false value");
}

//---
let string="";

if(string) {
    console.log("string is not empty"); 
} else {
    console.log("string is empty");
}

// Switch Statement 

let car="rolls rays";

switch (car){
    case "bmw":
        console.log("car is bmw");
        break;
    case "volvo":
        console.log("car is volvo");
        break;
    case "kia":
        console.log("car is kia");
        break;
    default :
        console.log("Not a car");
}
//Another example switch

let day=7;

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday, fun day");
        break;

    default:
        console.log("Wrong Day");

}

//alert & prompt

// alert("this is a simple alert!");
console.log("this is a simple log");
console.log("this is an error msg");

 let firstname = prompt("enter First name:");
 let lastname = prompt("enter Second name:");
 let msg = "Hello " + firstname +"" + lastname + "!";
 alert(msg);