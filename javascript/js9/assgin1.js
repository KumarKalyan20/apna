//Create a new input and button element on the page using Javascript only. Set the text button to "Click me"; Ans1

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Add following attributes to the element:
//- Change placeholder value of the to "username"
//- Change the id of button to "btn"  Ans2

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Access the btn using the querySelector and button id, Change the button background color to blue and text color to white. Ans3

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Create an h1 element on the page and set text to "DOM Practice" underlined.
//change its color to purple..  Ans4

let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice </u>";
document.querySelector("body").append(h1);

//Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold. Ans5

let para1 = document.createElement("p");
para1.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para1);


