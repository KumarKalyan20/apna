//Qs1  Square and sum the array elements using the arrow function and then find the average of the array

let nums = [1, 2, 3, 4, 5, 6];

let square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce ((acc, cur) => acc + cur, 0);

let avg = sum /nums.length;
console.log(avg);

//Qs2  Create a new array using the map function whose each element is equal to the original array.

let numbers = [2, 4, 6, 8, -2, -4];

console.log(numbers.map((number) => number + 5));

//Qs3 Create a new array whose elements are in uppercase of words present in the original array.

let strings = ["kalyan", "jeethu", "mahi", "chethu"];

console.log(strings.map((string) => string.toUpperCase));

//Qs4  Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// the function should return a new array with the original array values and all of the additional arguments doubled..

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((v) => v * 2),];

doubleAndReturnArgs([1, 2, 3], 4, 4); //[1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4);  //[2, 20, 8]


//qS5  Write a function called mergeObjects that accepts two objects and return a new object which contain 
// all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

mergeObjects ({ a: 1, b: 2}, {c: 3, d: 4 }); //{a:l, b:2, c:3, d:4}
