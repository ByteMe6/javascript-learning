// хтмл файлику немає менлінь робити можете створити або як я використати квоку
// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
const friends = ["Mango", "Poly", "Kiwi", "loch ostanniy"];
let string = "";
let i = 0;
for (i = 0; i < friends.length; i++) {
  if (i === friends.length - 1) {
    string += friends[i];
  } else {
    string += friends[i] + ", ";
  }
}

console.log(string);
// 👉 Потім через join()
let stringi = "";
stringi = friends.join(" ta(vsi lochi) ");
console.log(stringi);

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
  " Карточка-1",
  "Карточка-2",
  " Карточка-3",
  "Карточка-4",
  " Карточка-5",
  // тут пʼятий індекс
];
console.log(cards);
cards.splice(5, 0, "1"); // додав карточку
console.log(cards);
cards.splice(4, 1); // видалив карточку
console.log(cards);
cards.splice(4, 1, "Карточка 5 змінена"); // змінив карточку
console.log(cards);
// коментаіїрі писала не іішка а я

const cardIoRemove = "Карточка-3";
cards.splice(3, 1);
console.log(cards);
// 4. Додати
cards.push("Карточка-6");
console.log(cards);
// 5. Оновити
cards.splice(3, 1, "Карточка 4-changed"); // змінив карточку

console.log(cards);