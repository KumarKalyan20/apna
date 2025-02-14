let nums = [1, 2, 3, 4];
let finalval = nums.reduce((result, el) =>{
    console.log(result);
     return result + el;
});
console.log(finalval);