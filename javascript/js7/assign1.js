// Ans1 Write an arrow function named arrayAverage that accepts  an array of numbers and returns the average of those numbers.

let arr = [1, 2, 3, 4, 5, 6];

const arrayAverage = (arr) => {
    let total= 0;
    for(let number of arr) {
        total += number;
    }
    return total/ arr.length;
};
console.log(arrayAverage(arr));

//QS2  Write an arrow function namedisEven()that takes a single number as argument and return if it is even or not.

let num = 4;

const isEven = (num) => num % 2 == 0;

//Qs3 

const object = {
    message:'Hello World!',

    logMessage() {
        console.log(this.message);

    }
};

setTimeout(object.logMessage,1000);

//Qs4

let length = 4;
function callback() {
    console.log(this.length);
}

const object1 = {
    length: 5,
    method(callback) {
        callback();
    },
};

object1.method(callback, 1, 2);