"use strict";

let button = document.querySelector('#enter');
let input = document.querySelector('#userinput');
let ul = document.querySelector("ul");
let li = document.querySelectorAll('li');
let after = window.getComputedStyle(
    document.querySelector("ul"), ':after'
);

let inputLength = () => input.value.length;
let createToDoElement = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

let addToDoElementAfterClick = () => {
    if(inputLength() > 0){
        createToDoElement();
    } 
}

let addToDoElementAfterKeypress = (event) => {
    if(inputLength() > 0 && event.keyCode === 13){
        createToDoElement();
    } 
}

button.addEventListener("click", addToDoElementAfterClick);

input.addEventListener("keypress", addToDoElementAfterKeypress);

ul.addEventListener("click", (ev) => {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('done');
    }
});