const favmovie ="salaar";
const guess =prompt("guess my favorite movie");
  while((guess != favmovie) && (guess != "quit")) {
    console.log("wrong");
    guess = prompt("wrong guess.please try again");
  }

   if(guess == favmovie) {
    console.log("congrats!!");
   }
   else {
    console.log("you quit");
   }

   //Break Keyword
   // let i=1;
   // while(i<=5) {
   //   if(i == 3) {
   //      break;
   //   } 
   //  console.log(i);
   
   //  }