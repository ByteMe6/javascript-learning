
// 1)Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let a = [1, 35, 89];
console.log(a);
a[1] = 10;
console.log(a);
// 2)Створити масив із трьох рядків. Додати до масиву ще декілька рядків.
let b = ["Hello", ",", "world"];
console.log(b);
b.push(";", "How", "are", "you?");
console.log(b);
// 3)Створити скрипт який поверне суму всіх чисел в масиві.
// я для прикладу візьму свій масив а
aSum = a[0] + a[1] + a[2]; // 1 + 10 + 89 = 100
console.log(aSum);
// 4)Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let c = [1, 45, 3, 4, 100];
for (i=0; i<c.length; i++) {
    console.log(c[i]);
}
// 5)Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
let d = ["12345", "123", "abcdefgh", "Hello, world!", "1"]
let d2 = []
if (d[0].length > 5){
    d2.push(d[0])
}
if (d[1].length > 5){
    d2.push(d[1])
}
if (d[2].length > 5){
    d2.push(d[2])
}
if (d[3].length > 5){
    d2.push(d[3])
}
if (d[4].length > 5){
    d2.push(d[4])
}
console.log(d2)
// 6)Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let e = [1,2,3,4,5,6,7,8,9,0] // виводимо 9
eMax = Math.max(...e)
console.log(eMax)
// 7)Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
// використовувати буду масив е
let f = []; // create an empty array to store the even numbers

for (let i = 0; i < e.length; i++) { // loop through the array
  if (e[i] % 2 === 0) { // check if the number is even
    f.push(e[i]); // add the even number to the array f
  }
}

console.log(f);