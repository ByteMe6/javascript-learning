// -------------------------EVENTS-------------------
// 1) Розбір ДЗ/ кахут
// 2) Ивенти(які вони бувають та як зними працювати)
// addEventListener()
// removeEventListener()
// 3)Івенти форм,інпутів...(Присвятити час різновидам івентів)
// Відправка форми, отримання значення інпута, перевикористання отриманих значень

// ЯК ДОДАТИ Слухач подій

// const button = document.querySelector("#button");

// Подія click
// button - звернення до елементу на якому ми бажаємо відслідковувати івенти
// addEventListener() - метод який дозволяє нам повісити слухач подій який кожного разу коли відбудеться вказана подія буде тригеритись
// "click" = назва події яку ми відслідковуємо
// onClick = функція, яка реагує на подію

// Змінна - це комірка в пам'яті твого компухтера в яку він записує інформацію

// let,const ,var = 3 ключові слова для створення змінної
//

// let = ключове слово яке означає,що данні які збережені у цій комірці памʼяті можуть бути зміненені
// const = ключове слово яке означає ,що данні які ми збережемо за допомогою нього будуть незмінними
// var - застаріла конструкція яка вишла з використання
// let name = "Nikita";
// const
// var

let counter = 0;
let something = 10;
const button = document.getElementById("button");

button.addEventListener("click", onClick);

function onClick(event) {
  // e = обʼєкт події(Стан сторінки на момент події)
  // e.target = це посилання на елемент на якому відбулась подія

  console.log(event.target.textContent);
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.type); // повертає назву події яка відбулась
  event.target.textContent = `Ти клікнув ${
    counter + 1
  } 
  // кількість разів,яка тобі залишилось клікнути ${something - 1} `;
  counter += 1;
  something -= 1;
  console.log("Ти клікнув на кнопку");

  if (counter === 10) {
    button.removeEventListener("click", onClick);
  }
}

console.log(counter);

const div = document.querySelector("#container");
console.log(div);

div.addEventListener("click", onClickk);

function onClickk(event) {
  // e.target = це посилання на елемент на якому відбулась подія
  console.log(event.target);
  // e.currentTarget = повертає елемент на який встановлено слухач події(addeventlistener)
  console.log(event.currentTarget);
}

const input = document.querySelector("#input");
const buttonText = document.querySelector("#buttonText");

input.addEventListener("input", onInput);

function onInput(event) {
  const inputValue = event.target.value;
  buttonText.textContent = event.target.value;
}

const form = document.querySelector("#form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  // ЩОб ОТРИМАТИ ЗНАЧЕННЯ ІНПУТА,
  // ЗНАЙТИ ІНПУТ
  // Дописати .value
  //form.elements = дозволяє отримати доступ до усіх полів форми(якщо html тегам дати атрибут name то до елементів у формі можна звертатись не за індексами а за іменами)
  //   console.log(form.elements.name.value);
  //   console.log(form.elements.nickname.value);
  const name = form.elements.name.value;
  const nickname = form.elements.nickname.value;

  console.log(name, nickname);
}

input.addEventListener("focus", onFocus);
// Focus відпрацьовує коли елемент обрано
function onFocus(event) {
  //   input.style.color = "green";
  input.classList.add("green");
}

input.addEventListener("blur", onBlur);
//blur відпрацьовує коли елемент втрачає фокус (обрали інакший елемент)
function onBlur(event) {
  input.classList.remove("green");
}