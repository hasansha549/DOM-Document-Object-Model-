// 01-   getElementByID()
// document.getElementById("ID1");
// ID1.innerHTML = "Earning";

// 02-  getElementsByClassName()

// let className1 = document.getElementsByClassName("className1")[0];
// className1.innerHTML = "Computer Tranining Center";
// console.log(className1);
// 03- getElementByName()
// let Heading5 = document.getElementsByName("Heading5");

// Heading5.innerHTML = "Hello World";
// console.log(Heading5);

// 04-  getElementByTagName()

// let H1 = document.getElementsByTagName("h1");
// H1.innerHTML = "Heading One Is Changed";
// console.log(H1);

// 05-  QuarrySelector()
let h1 = document.querySelectorAll("#ID1");
h1.innerHTML = "Hello World";
console.log(h1);

// 1

// let ID1 = document.getElementById("ID1");
// ID1.innerHTML = "Hello World";
// console.log(ID1);

// 2

// let className1 = document.getElementsByClassName("className1")[2];
// className1.innerHTML = "Earning Zone Charfassion, Bhola";
// console.log(className1);

// 3

let Zone = document.getElementsByName("Heading5")[2];
Zone.innerHTML = "Charfassion, Bhola";

// 4

// let Zone = document.getElementsByTagName("h5")[4];
// Zone.innerHTML = "Bhola Barishal"

// 5
// let Earning = document.querySelector(".className1")[2];
// Earning.innerHTML = "Our Industry";
