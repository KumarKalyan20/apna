// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++) { 
//     smallImages[i].src = "assets/spiderman_img.png"
//     console.log(`value of image no. ${i} is changed.`);
// }

//  console.dir(document.querySelectorAll("p"));

//  console.dir(document.querySelector("#description"));

//  console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));


let links = document.querySelectorAll('.box a');

for (link of links) {
    link.style.color = "purple"; //inline style
}

// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "purple";
// }

 