let btns = document.querySelectorAll("button");

for(btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function() {
        console.log("you double clicked me!");
    });


    // btn.onmouseenter = function() {
    //     console.log("you enterted a button");
    // }
    // console.dir(btn);
}

function sayHello() {
    alert("Hello!");
}

//Event Listner

function sayName() {
    alert("Apna College");
}


