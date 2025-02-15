let nums = [1, 2, 3, 4];
let finalval = nums.reduce((result, el) =>{
    console.log(result);
     return result + el;
});
console.log(finalval);

//Maximum in Array

let arr = [1, 2, 3, 4, 6,77, 45,8];

// let max =-1;
// for (let i=0; i < arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

let max = arr.reduce((max, el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(max);