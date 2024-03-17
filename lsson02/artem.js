//  ╠

const hotel = {
  name: "Resort hotel",
  stars: 5,
  copacity: 100,
};

// console.log(hotel["stars"]);

// Обʼєкти за замовчуванням not iterable(не можна перебрати та отримати значення та ключі)
// for in - спеціальний цикл для перебору обʼєктів(жоден інший цикл не може перебирати обʼєкти оскільки вони (not iterable)
for (const key in hotel) {
  //   const value = hotel[key]; - дозволяє отримати значення з обʼєкту
  const value = hotel[key];
  console.log(value);
}

const book = {
  title: "book",
  author: "Artem",
};

for (const key in book) {
  console.log("value ", book["author"]);
}

// for (const iterator of book) {
// }

// Object.keys(hotel) - властивість яка поверне всі ключі обʼєкта hotel

const keys = Object.keys(hotel);

// Object.values(hotel); - повертає усі значення полів обʼєкту hotel
const values = Object.values(hotel);

//  Object.entries(hotel) повертає у вигляді масивів в масиві пари обʼєкта такі як ключ-значення
const entries = Object.entries(hotel);

console.log(entries);

for (const item of entries) {
  for (const array of item) {
    console.log(array);
  }
}

console.log(values);

for (const item of keys) {
  console.log(hotel[item]);
}
// SPREAD and REST (...)
// ...

function name(...params) {
  // Rest operator - бо він збирає параметри в масив
  console.log(params);
}

name(5, 6, 7, 7, 8, 9, 0);
// як знайти мінімальне значення?
const temperature = [20, 5, 0, 3, 15, -10, 7];
const min = Math.min(...temperature);
console.log(min);
// let m = temperature[0];

// for (let index = 0; index < temperature.length; index++) {
//   if (temperature[index] < m) {
//     m = temperature[index];
//   }
// }
// console.log(m);
const arr = [(1)[(2)[(3)[(4)[(5)[(6)[(7)[(8)[8]]]]]]]]];
