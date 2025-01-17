//Ans1 write a JS prgm to deletd all occurence of element 'num'in a given array.

let arr =[1,2,3,4,5,6,2,3];
let num =2;

 for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i,1);
    }
 }
 console.log(arr);

//Ans2 write a js prg to find the no of digits in a number.

let number = 287152;
let count = 0;

let copy = number;

while (copy > 0) {
    count++;
copy = Math.floor(copy/10);
}
console.log(count);

//Ans3 write a js prg to find the sum of digits in a number.
 
let numbers =287152;
let sum =0;

let copys = numbers;

while(copys > 0) {
    digit = copys % 10;
    sum+= digit;
    copys = Math.floor(copys/10);
}
console.log(sum);

//Ans4 print the factorial of number n.

let n =5;
let factorial = 1;
 
for(let i=1;i<=n;i++) {
    factorial *= i;
}

console.log(`factorial of ${n} is ${factorial}`);

//Ans5  find largest number in array.

let array =[2,5,4,28,66,45,33,19,18,55];
let largest =0;

for(let i=0; i<array.length; i++) {
    if(largest < array[i]) {
        largest = array[i];
    }
}
console.log(largest);