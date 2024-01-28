// 1)Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні - "Не всі поля заповнені".
const field1 = document.querySelector("input[name='field1']");
const field2 = document.querySelector("input[name='field2']");
const button = document.querySelector("input[type='submit']");

const polya = document.getElementById("polya");

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (field1.value && field2.value) {
    polya.textContent = "Ти все заповнив гуляй.ГРошиків нє вєрнєм";
  } else {
    polya.textContent = "Ти не все заповнив .віддай гроші";
  }
});

// 2)Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні - "Сума менша або дорівнює 10".
function checkSum() {
  const field12 = document.querySelector("input[name='field12']");
  const field22 = document.querySelector("input[name='field22']");

  const sum = Number(field12.value) + Number(field22.value);

  if (sum > 10) {
    document.getElementById("sumResult").textContent = "Сума більша за 10";
  } else {
    document.getElementById("sumResult").textContent =
      "Сума менша або дорівнює 10";
  }
}

// 3)Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні - "Текст не містить слово JavaScript".

// ct
const ct = document.getElementById("ct");

ct.addEventListener("click", checkText)

function checkText() {
  const text = document.querySelector("#jsTXT").value;
  console.log(text)

const incl = "js"
const porivnanya = text.toLowerCase()
console.log(porivnanya)
  if (porivnanya.includes("js")) {
    document.getElementById("result").textContent =
      "Текст містить слово js";
  } else {
    document.getElementById("result").textContent =
      "Текст не містить слово js";
  }
}
// 4)Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні - "Число не входить в діапазон від 10 до 20".
const numberInput = document.querySelector(".number-input");
const checkButton = document.querySelector(".check-button");
const result = document.getElementById("results");

checkButton.addEventListener("click", function (e) {
  e.preventDefault();

  const number = numberInput.value;

  if (number > 10 && number < 20) {
    result.textContent = "Число в діапазоні";
  } else {
    result.textContent = "Число поза діапазоном";
  }
});
// 5)Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні - виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let valid = true;

  if (name.length < 3) {
    valid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    valid = false;
  }

  if (password.length < 6) {
    valid = false;
  }

  if (valid) {
    window.location = "https://www.example.com";
  } else {
    document.getElementById("error").textContent = "Помилка введення даних";
  }
}
