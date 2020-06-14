"use strict";

if(4 == 9) {
    console.log("OK!");
} else {
    console.log("ERROR BLYAT!");
}

console.log("***");

let num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Too much!");
} else {
    console.log("OK!!!");
}

console.log("***");

(num === 500) ? console.log("Norm!") : console.log("Oshibka, yopta");

console.log("***");

switch (num) {
    case 49:
        console.log("Ты чё быканул что ли блять");
        break;
    case 100:
        console.log("Может ещё раз попробуешь чепушилка?");
        break;
    case 500:
        console.log("То, что блять надо");
        break;
    default:
        console.log("Господь Господь. И Иесус наш Христос");
        break;
}

console.log("***");