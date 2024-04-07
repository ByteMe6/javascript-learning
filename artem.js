// Impera

const number = [1, 2, 3, 4, 5];

const filteredNums = [];

for (let index = 0; index < number.length; index++) {
  if (number[index] > 2) {
    filteredNums.push(number[index]);
  }
}

console.log(filteredNums);

// Declarate

const numberDeclarate = [1, 2, 3, 4, 5];

// filter - це метод перебору циклу який
// 1) повертає новий масив
// 2) повертає відфільтрований масив за умовою

// Чисті функції - це функції які при роботі з масивом не замінюють його початкові значення
// const filteredDeclarateNums = numberDeclarate.filter(function (value) {
//   return value > 2;
// });
filteredDeclarateNums = numberDeclarate.filter((value) => value > 2);

console.log(numberDeclarate);

console.log(filteredDeclarateNums);

// dirty func

// Функції які змінюють початкові дані над якими функція проводить роботу

// plusNum -  Працює з масивом який ми прислали та працює з значеннями в масиві
const plusNum = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i] += value;
  }
};

plusNum(numberDeclarate, 20);

console.log(numberDeclarate);

// pure func

// Функції які не змінюють початкові значення
// plus - створює новий масив result
// пушить в нього необхідні нові значення
// Повертає новий масив result у зовнішній код
const plus = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + value);
  }

  return result;
};

const newArray = [1, 2, 3, 4, 6];

const plusNumns = plus(newArray, 2000);

console.log(newArray);

console.log(plusNumns);

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

// foreach - перебирає масив, нічого не повертає.Може змінювати поточні данні

// foreach = for з світу методів перебору масивів
// array - це масив на якому ми викликаємо метод перебору (foreach)
// index - індекс поточного елементу в масиві
// number - поточне значення масиву
newArray.forEach((number, index, array) => console.log(number, index, array));

// майже всі, методи перебору - це чисті функції
// map - це метод перебору масивів який
// 1) Повертає новий масив тієї ж довжини, що ї той на якому був викликаний
// 2) Чиста функція
// 3) Може використовуватись для трансформації масиву
const qwe = newArray.map((number) => number + 10);

console.log(newArray);
console.log(qwe);

// filter

// filter -  це метод перебору масиву який
// 1) повертає новий масив відфільтрований за умовою

const filter = newArray.filter((item) => item > 2);
console.log(filter);
console.log(newArray);

// find

// find - дозволяє знайти один елемент серед багатьох
// 1) find коли знаходить перший елемент який задовольняє умову припиняє перибирати масив
// якщо елемент не знайдено отримаєм undefined
// Повертає перший збіг
const four = newArray.find((item) => item === 4);
console.log(four);

// every

// Перевіряє чи пройшли перевірку ВСІ елементи масиву тоді every повертає true ЯКЩО ХОЧА Б ОДИН НЕ ПРОЙШОВ ПОВЕРТАЄ FALSE
// Метод повертає true або false

const con = [1, 2, 3, 4, 10000];
console.log(con.every((item) => item <= 10));
// some

// Перевіряє чи пройшов перевірку ХОЧА Б ОДИН елемент масиву тоді some повертає true ЯКЩО ВСІ НЕ ПРОЙШЛИ ПОВЕРТАЄ FALSE
console.log(con.some((item) => item <= 10));