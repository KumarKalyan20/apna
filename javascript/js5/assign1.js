//Ans1  Create a pgm that generates a random number representing a dice roll. [the number should b/w 1 and 6].

let dice =Math.floor(Math.random() * 6) + 1;
console.log(dice);
 
//Ans2 
        // Create an object representing a car that stores the following properties for the car:name,model,color,
          //print car's name.

let car = {
    name:"Maruthi Suzuki",
    model:"Maruthi Suzuki Dzire",
    color:"white",
};
console.log(car.name);


//Ans3   Create an object person with name, age and city.
        // Edit city's change it to "New York",
        // Add a new property country and set the united states.

 let person ={
    name:"kalyan",
    age:21,
    city:"bengaluru",
 };
 person.city = "New York";
 person.country="United States";
 console.log(person);