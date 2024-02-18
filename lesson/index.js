// Вивчимо методи масивів
// Навчимося робити з рядка масив та навпаки(split,join)
// Перевірки на існування елементу в масиві (indexOf , includes)
// Дізнаємося як можна додати елементи в масив та вирізати або видалити один або декілька елементів.(shift,unshift,pop,push,slice,splice)

const { concat } = require("lodash");

// Навчимося об’єднувати декілька масивів в один (concat)
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const num3 = [11, 12, 13, 14, 15];
const num12 = num1.concat(num1);
const num123 = [...num1, ...num2, ...num3];
console.log(num12);
console.log(num123);

const myStudents = ["Yura", "Oleksandr", "Artem", "Vladislav", "Mykyta"]
const tupiStudents = ["Tupiy Vasya", "Tupiy Kolya", "Tupiy debil"]
const iTupiINormalniStudents = myStudents.concat(tupiStudents);


console.log(myStudents)
console.log(tupiStudents)
console.log(myStudents + tupiStudents)
console.log(iTupiINormalniStudents)