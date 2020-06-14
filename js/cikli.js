"use strict";
/* Цикл первого вида */
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

console.log("***");

/* Цикл второго вида */
do {
    console.log(num);
    num++;
}
while (num < 61);

console.log("***");

/* Цикл третьего вида с i */
for (let i = 1; i < 8; i++) {
    console.log(i);
}

console.log("***");

/* Цикл третьего вида с num */
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

console.log("***");

/* Прекращения цикла на каком-то из параметров */
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}

/* Пропуск параметра цикла в цикле без остановки цикла */
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}