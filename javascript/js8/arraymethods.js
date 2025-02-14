 let arr = [1, 2, 3, 4, 5];

arr.forEach(function(el) {
    console.log(el);
});


 function print(el) {
    console.log(el);
 }

 arr.forEach(print);

let students= [{
    name:"kalyan",
    marks:95,
},
 {
    name:"manoj",
    marks:86,
},
 {
    name:"jeethu",
    marks:70,
 },
];

let gpa = students.map((el) => {
    return el.marks / 10;
});

// arr.forEach((student) => {
//     console.log(student);
// });

//Map & Filter

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el*2;
})

//Filter method

let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10,12, 11];

let ans = nums.filter((el) => {
    // return  el % 2 == 0; //even -> true, odd ->false
    return el < 5
});

// Every & sum

[2, 4, 6].every((el) => el%2 == 0);