print = console.log;

const age = 10;
const name = "Yura";
const isStudent = true;
const myString = "Think different - Steve Jobs";
const my_num = 6;
const myNumberPlus_ten = my_num + 10;
const myNull = null;

print(age);
print(name);
print(isStudent);
print(myString);
print(myString);
print(myNumberPlus_ten);
print(myNull);

// нижче останні три пункти з *

// Ожидание загрузки страницы

// Определение переменных

// нижче розкоментувавити
// нижче розкоментувавити
// нижче розкоментувавити

let userName = prompt("Please enter your name:", "");
let userNameSpan = document.querySelector(".user");

// Если пользователь ввел имя
if (userName) {
  // Замена текста
  userNameSpan.textContent = userName;
}

//

// Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".

let bad = alert("Тут небезпечно")
let res = confirm("Ви дійсно хочете підтвердити дію?");
if (res) {
  document.querySelector(".okUSE").style.display = "block";
  document.querySelector(".noUSE").style.display = "none";
} else {
  document.querySelector(".okUSE").style.display = "none";
  document.querySelector(".noUSE").style.display = "block";
}


