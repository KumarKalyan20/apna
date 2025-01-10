//Ans1
let array = [7,9,0,-2];
let num=3;
 let answer =array.slice(0,n);
 console.log(answer);
 
 //Ans2
let array1 = [7,9,0,-2];
let num1=3;
 let answer1 =array1.slice(array1.length-n);
 console.log(answer1);

 //Ans3
 let str =("please enter a string");
 if(str.length ==0){
    console.log("string is empty");
 } else{
    console.log("string is not empty");
 }

 //Ans4
 let str1 ="ApNaCoLLEgE";
 let idx = 3;
 
 if(str1[idx] == str1[idx].toLowerCase){
    console.log("character is lowercase");
 } else {
    console.log("character is not lowercase");
 }

 //Ans5
 let str2 = prompt("please enter a string");
 console.log(`original string = ${str2}`);
 console.log(`string without space = ${str2.trim()}`);

 //Ans6
 let array2 =["hello",'a',23,55,86];
 let item = 55;

 if(array2.indexOf(item) !=-1) {
    console.log("element exits in array");
 } else {
    console.log("element doesn't exits in array");
 }