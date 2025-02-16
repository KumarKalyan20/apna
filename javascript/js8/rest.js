// function sum(...args) { //arguments
 
//     for(let i = 0; i < args.length; i++) {
//         console.log("you gave us: ", args[i]);
//     }
// }

// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }

function sum(...args) {

    return args.reduce( (sum, el) => sum + el); 
}

function min(msg, ...args) {

     console.log(msg);
    return args.reduce((min, el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    });
}

//Destructring

let names = ["tony", "bruce", "peter", "steve", "abc", "xyz"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, ...others] = names;

//Destructring Objects

const student = {
    name:"kalyan",
    class:10,
    age:16,
    subjects: ["english", "kannada", "hindi", "social", "science", "maths"],
    username: "karan123",
    password: "abcd",
    city: "Bengaluru",
};

let { username: user, password: secret, city = "Bengaluru" } = student;
