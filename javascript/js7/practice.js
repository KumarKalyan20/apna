//Write an Arrow function that return the square of a number 'n',

// const square = (n) => {     //this is also write code
//     return n*n;
// }
// console.log( square (3) );

const square = (n) => (n * n);
 console.log( square (4));

 //Write a function that prints "Hello world" 5times at intervals of 2s each.

 let id = setInterval( () => {
         console.log("Hello World");
    },2000);
 
    setTimeout( () => {
        clearInterval(id);
        console.log("clear interval ran");
    }, 10000);
