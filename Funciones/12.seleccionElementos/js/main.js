'use strict'

//seleccion por id
const section1 = document.getElementById('sec1');
console.log(section1);
section1.innerHTML = "Desde <b>Javascript</b>";
/* section1.textContent = "Otra vez"; */


//seleccion por class 
const section2 = document.getElementsByClassName("sec2");
console.log(section2);

//seleccion por name 
const section3 = document.getElementsByName("section3");

console.log(section3);;

//seleccion por etiqueta 
const label = document.getElementsByTagName("p");
console.log(label);

//querySelector

const myMain = document.querySelector("#container");
const sec1 = document.querySelector(".sec1");
const myh1 = document.querySelector("h1");
const todo =document.querySelectorAll("p");
console.log(myMain,sec1,myh1,todo);

myElementi.innerHTML="Esto es un div creado desde js";
