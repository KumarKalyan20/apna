const favmovie ="salaar";
const guess =prompt("guess my favorite movie");
  while (guess != favmovie) {
    if(guess == "quit") {
      console.log("you quit");
      break;
    }
    guess = prompt("wrong guess.please try again");
  }

   if(guess == favmovie) {
    console.log("congrats!!");
   }
   

   //Break Keyword
   // let i=1;
   // while(i<=5) {
   //   if(i == 3) {
   //      break;
   //   } 
   //  console.log(i);
   
   //  }

  //  let fruits = ["mango", "apple", "banana","litchi","orange"];

  //  for(let i=0; i<fruits.length; i++) {
  //   console.log(i, fruits[i]);
  //  }

   //Nested Loops with Nested Array

  //  let heroes = [
  //       ["prabhas", "allu arjun", "ntr"]
  //       ["iranman", "wonder women", "flash"]
  //  ]

  //  for(let i=0; i<heroes.length; i++) {
  //    console.log(i, heroes[i], heroes[i].length);
  //    for(let j=0; j<heroes[i].length; j++) {
  //        console.log(`j=${j}, ${heroes[i][j]}`);
  //    }
  //      }

  let student = [["kalyan",88], ["shiva",99],["jeethu",77]];

  for(let i=0; i<student.length; i++) {
     console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++) {
      console.log(student[i][j]);
    }
  }

  //for loop
  let fruits = ["mango", "apple", "banana","litchi","orange"];
   for(i of fruits) {
    console.log(i);
   }

   for(char of "apna") {
    console.log(char);
   }

   //Nested for loop
   
   let heroes = [["prabhas", "allu arjun", "ntr"], ["iranman", "wonder women"]]
   
     for(list of heroes) {
       for(name of list) {
         console.log(name);
       }
     }