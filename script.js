let body = document.querySelector("body");
let count = document.querySelector("#count");
let btn = document.querySelector("#btn")
btn.onclick = () => {
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.innerText = "Switch to light mode";

    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.innerText = "Switch to dark mode";

    }
}

let counter = 0;
count.innerText = counter;

const increment = () => {
    count.innerText = ++counter;
}
 const decrement = () => {
    count.innerText = --counter;
 }
