// 1) Написати скрипт відкриття та закриття модального вікна по кнопці.(розмітка  є у NewDz.html)
const modalButtons = document.querySelectorAll('[data-action="openmodal"], [data-action="closemodal"]');
const backdrop = document.querySelector('.js-backdrop');
const modal = document.querySelector('#modal');

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

    if (action === 'openmodal') {
      openModal();
    } else if (action === 'closemodal') {
      closeModal();
    }
  });
});

backdrop.addEventListener('click', closeModal);

function openModal() {
  document.body.classList.add('show-modal');
  // Or, alternatively, using the provided CSS class:
  // modal.classList.add('openedModal');
}

function closeModal() {
  document.body.classList.remove('show-modal');
  // Or, alternatively, using the provided CSS class:
  // modal.classList.remove('openedModal');
}
// 3) Напиши скрипт в якому
// є три радіобатони зі значенями кольрів.
// При обиранніна будь якого колір
// фону боді змінюється відповідно(розмітка форми є 
//у NewDz.html)
const red = document.querySelector("#red");
const white = document.querySelector('#white');
const green = document.querySelector("#green");

red.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});

white.addEventListener("click", function() {
  document.body.style.backgroundColor = "white";
});

green.addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});

// 4) Напиши скрипт який, при наборі тексту в 
// інпут input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// якщо інпут порожній, в спані повинен відображатися рядок
 // 'незнайомець'.(розмітка форми є у NewDz.html)

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function() {
  nameOutput.textContent = nameInput.value || "незнайомець";

});


// 5)Напиши скрипт, який би при втраті фокуса на інпут,
 // перевіряв його вміст на правильну кількість символів.
 // (розмітка форми є у NewDz.html)
// Скільки символів має бути в інпут, вказується в його 
// атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає 
// зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і 
// invalid.(стилі  є у NewDz.html)

// Отримуємо інпут, який потрібно перевірити
const validationInput = document.getElementById("validation-input");

// Отримуємо довжину, яка повинна бути в інпуті
const length = validationInput.dataset.length;

// Додаємо слухач події "втрата фокуса" на інпут
validationInput.addEventListener("blur", () => {
  // Отримуємо вміст інпуту
  const value = validationInput.value;

  // Перевіряємо, чи відповідає вміст інпуту заданій довжині
  const isCorrect = value.length === length;

  // Якщо вміст інпуту відповідає заданій довжині, то встановлюємо клас "valid"
  if (isCorrect) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});




// 6) Напиши скрипт, який реагує на зміну
 // значення input#font-size-control (подія input)
  // і змінює інлайн-стиль span#text оновлюючи властивість 
  // font-size. В результаті при перетягуванні повзунка 
  // змінюватиметься розмір тексту.

// Отримуємо повзунок, який потрібно відстежувати
const fontSizeControl = document.getElementById("font-size-control");

// Отримуємо текст, розмір якого потрібно змінювати
const text = document.getElementById("text");

// Додаємо слухач події "зміна значення" на повзунок
fontSizeControl.addEventListener("input", () => {
  // Отримуємо значення повзунка
  const value = fontSizeControl.value;

  // Встановлюємо розмір тексту в залежності від значення повзунка
  text.style.fontSize = `${value}px`;
});



















