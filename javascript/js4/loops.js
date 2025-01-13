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