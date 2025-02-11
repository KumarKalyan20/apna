//  Ans1    Write a Javascript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6,7];
let num=5;

//elements larger than a number num
function getElements(arr,num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] >num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);

// Ans2   Write a Javascript function to extract unique characters from a string.
         //Example:str="abcdabcdefgggh" ans="abcdefgh"

let str ="abcdabcdefgggh";
//function to get string with unique elements

function getUnique(str) {
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {

        //if current character is not added, then add it in ans.
        //Otherwise it is a duploicate.

          ans += currChar;
        }
    }

    return ans;
}

getUnique(str);

//Ans3  write a Javascript function that accepts a list counrty names as input and return the longest country name as output.
  //Example : country = ["Australia", "Germany", "United States of America"]
        // output :"United States of America"

let country =["Australia", "Germany", "United States of America"];

 function longestName(country) {
    let ansIdx = 0;
    for (let i=0; i< country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }

     return country[ansIdx];
 }

 longestName(country);

 //Ans4   Write a Javascript function to count the number of vowels in a String argument.
 
  let str1 = "apnacollege";

  function countVowels(str1) {
    let count = 0;
    
    for (let i=0; i<str1.length; i++) {
       if (
       str1.charAt(i) == "a" ||
       str1.charAt(i) == "e" ||
       str1.charAt(i) == "i" ||
       str1.charAt(i) == "o" ||
       str1.charAt(i) == "u" 
         ) {
            count++;
         }

    }
    return count;
  }


  //Ans5 Write a Javascript function to generate a random number within a range(start,end).

  let start = 100;
  let end = 200;

  function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() *diff) + start;
  }