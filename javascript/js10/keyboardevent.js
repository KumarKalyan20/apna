let btn = document.querySelector("button");

// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });


// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    // console.log("key = ", event.key);

    console.log("code = ", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
     if(event.code == "keyU") {
        console.log("character moves up");
     } else if (event.code == "keyD") {
        console.log("character moves down");
     }
     else if (event.code == "keyL") {
        console.log("character moves left");
     }
     else if (event.code == "keyR") {
        console.log("character moves right");
     }
    // console.log("key was pressed");
});
// inp.addEventListener("keyup", function () {
//     console.log("key was released");
// });