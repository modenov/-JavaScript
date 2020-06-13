"use strict"; /* Использование строгого режима */

/* Блок "Основы" */
let number = 5; /* Числовая переменная */
const leftBorderWidth = 1; /* Константа */
let isBoy = true; /* Булева переменная */
let str = "Привет, Мир! Я пишу на JS!"; /* Строчная переменная */
let none; /* Создание переменной undefined — без указания значения */

/* Блок "Вывод данных в консоль": */
console.log(number);
console.log(leftBorderWidth);
console.log(isBoy);
console.log(str);
console.log(none);

/* Создание объекта "Вова"*/
const obj = {
    name: "Vova",
    age: 31,
    isMarried: false
};

/* Вывод имени объекта "Вова" в консоль */
console.log(obj['name']);

/* Блок "Создание массива и вывод его в консоль" */
let arr = ['vova.jpg', 'orange.png', 31, false, 'Just My Photo'];
console.log(arr[1]);

/* Общение с пользователем */
/* alert('Hello!');

const result = confirm("Are you here?");
console.log(result); */

/* const answer = prompt('Вам есть 18?', '18');
console.log(answer); */

/* const answer = +prompt('Вам есть 18?', '18');
console.log(answer + 5); */

/* Массив с ответами */
const answers = []; /* Объявили пустой массив */

/* Сам массив: */
/* answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', ''); */

console.log(answers); /* Запись ответов в массив */
console.log(typeof(answers)); /* Запись в консоль: object */

/* document.write(answers); */ /* Можно записать ответы в документ, но сейчас не используется */

/* Интерполяция */
const category = 'vovusique';
console.log(`https://modenov.ru/${category}/all`);

const user = "Vova";
alert(`Hello, ${user}`);

