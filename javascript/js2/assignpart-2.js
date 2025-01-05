//Ans 1

let num="50";
if(num % 10 == 0){
    console.log("number is good");
} else {
    console.log("number is bad");
}

//Ans 2
// let name = prompt("please enter your name");
// let age = prompt("please enter your age");
// alert(`${name} is ${age} years old.`);

//Ans 3

 let quarter=3;

 switch (quarter){
       case 1:
      console.log("January, February,March");
      break;
       case 2:
      console.log("April,May,June");
       break;
       case 3:
      console.log("July,August,September");
      break;
       case 4:
      console.log("October,November,December");
      break;
      default :
    console.log("Not A Quarter");
 }
 
 //Ans 4

 let str="apples";
  if((str[0] == "a" || start ['A']) && (str.length > 5)) {
    console.log("golden string");
  } else {
    console.log("not a golden string");
  }

  //Ans 5

  let a=6;
  let b=11;
  let c=10;

  if(a > b) {
     if(a > c) {
          console.log(a, " is largest");
     } else {
          console.log(c, "is largest");
       }
  }
   else {
    if(b > c){
        console.log(b,"is largest");
    } else {
        console.log(c,"is largest");
    }
  }
  //(Bonus)

  let num1 = 32;
  let num2 = 47852;
  
  if ((num1%10) == (num2%10)) {
    console.log("numbers have the same last digit which is", num1%10);
  } else {
    console.log("numbers don't have the same last digit");
  }