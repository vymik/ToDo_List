"use strict";

let button = document.querySelector('#enter');
let input = document.querySelector('#userinput');
let list = document.querySelector("ul");
let li = document.querySelectorAll('li');
let after = window.getComputedStyle(
    document.querySelector("li"), ':after'
);


let inputLength = () => input.value.length;
let createToDoElement = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
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

let markElementChecked = (ev) => {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('done');
    }
}

let removeElement = (eve) => {
    if(eve.target.tagName === 'LI'){
        eve.target.classList.add('close');
    }
}



button.addEventListener("click", addToDoElementAfterClick);

input.addEventListener("keypress", addToDoElementAfterKeypress);

list.addEventListener("click", markElementChecked);

list.addEventListener("dblclick", removeElement);