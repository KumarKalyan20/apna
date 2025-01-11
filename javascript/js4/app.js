// for (let i=1;i<=5;i++){
//     console.log(i);
// }
// //print all odd no (1 to 15)

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }
//print all Even no (1 to 10)

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }
// console.log(backward);

// for(let i=10; i>=2; i=i-2){
//     console.log(i);
// }
//Infinite Loops

// for(let i=1; i>=0; i++){
//     console.log(i);
// }

//Print Multiplication table for 5

// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }
// let n = prompt("write your number");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

for(let i=1; i<=3; i++)
{
     console.log(`outer Loop ${i}`)
    for(let j=1; j<=3; j++)
    {
        console.log(j);
    }
}

//While Loop

let i=1;
while(i<=20) {
    console.log(i);
     i=i+2;
}