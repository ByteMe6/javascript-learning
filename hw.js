// Завдання 1
// В HTML є список категорій ul#categories
// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4
// Порахувати і вивести в консоль кількість категорій в ul#categories
const categoriesCount = document.querySelectorAll(
  "ul#categories li.item"
).length;
console.log(`У списку ${categoriesCount} категорії.`);

// Для кожної елемента li.item в списку ul#categories, знайти і вивести в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li)
const categories = document.querySelectorAll("ul#categories li.item");

categories.forEach((category) => {
  const title = category.querySelector("h2").innerText;
  const itemsCount = category.querySelectorAll("li").length;
  console.log(`Категорія: ${title}
Кількість елементів: ${itemsCount}`);
});

// Завдання 2
// В HTML є пустий список ul#ingredients.
// В JS є масив рядків.
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.getElementById("ingredients");

const ingredientsLi = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...ingredientsLi);

// Завдання 3
// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML()
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.getElementById("gallery");

const galleryItems = images.map((image) => {
  return `
    <li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}" class="gallery-image">
    </li>
  `;
});
gallery.insertAdjacentHTML("beforeend", galleryItems.join(""));
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.
gallery.classList.add("gallery");

// Завдання 4
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
const counterValue = document.querySelector(".counter-value");
let count = 0;

const increment = () => {
  count++;
  counterValue.textContent = count;
};

const decrement = () => {
  count--;
  counterValue.textContent = count;
};

const decrementButton = document.querySelector(".decrement-button");
const incrementButton = document.querySelector(".increment-button");

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

// Завдання 5
// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "незнайомець";
  } else {
    nameOutput.textContent = nameInput.value.trim();
  }
});

// 6

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символів"
// />
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// const input = document.getElementById('validation-input');
// const dataLength = input.dataset.length;

// input.addEventListener('blur', () => {
//   if (input.value.length === parseInt(dataLength)) {
//     input.classList.add('valid');
//     input.classList.remove('invalid');
//   } else {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
//   }
// });
// not working

// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
document.addEventListener("DOMContentLoaded", function () {
  const fontSizeControl = document.getElementById("font-size-control");
  const text = document.getElementById("text");

  if (fontSizeControl && text) {
    fontSizeControl.addEventListener("input", () => {
      text.style.fontSize = `${fontSizeControl.value}px`;
    });
  }
});

// Завдання 8 - додаткове, виконувати не обов'язково
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.
document.addEventListener("DOMContentLoaded", function () {
  const boxesContainer = document.getElementById("boxes");
  const renderBtn = document.querySelector('button[data-action="render"]');
  const destroyBtn = document.querySelector('button[data-action="destroy"]');
  const input = document.querySelector("#controls input");

  function createBoxes(amount) {
    const boxSize = 30;
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      box.style.width = `${boxSize + i * 10}px`;
      box.style.height = `${boxSize + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  renderBtn.addEventListener("click", () => {
    const amount = Number(input.value);
    createBoxes(amount);
  });

  destroyBtn.addEventListener("click", destroyBoxes);
});
