//3) Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
const select1 = document.getElementById("firstSelect");

select1.addEventListener("change", onSelect);

function onSelect() {
  const peshka = document.getElementById("firstP");

  const value1 = select1.value;

  switch (value1) {
    case "sik":
      peshka.textContent = "Сік";
      break;

    case "kava":
      peshka.textContent = "Кава";
      break;

    case "chay":
      peshka.textContent = "Чай";
      break;

    default:
      peshka.textContent = "Ничего не выбрано";
  }
}
// 4)Створити розмітку  з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
function myFunction() {
  const select2 = document.getElementById("select");
  const value2 = select.value.toLowerCase();

  let text = document.getElementById("text");

  switch (value2) {
    case "понедельник":
    case "вторник":
    case "среда":
    case "четверг":
    case "пятница":
      text.textContent = "Это рабочий день";
      break;

    case "суббота":
    case "воскресенье":
      text.textContent = "Это выходной день";
      break;
  }
}

// 5)Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.
const z3p = document.querySelector("#z3peshka");
const but3 = document.getElementById("but3");

but3.addEventListener("click", clc);

function clc() {
const inp3 = Number(document.getElementById("input3").value)

  switch (inp3) {
    case 1:
      z3p.textContent = "January, 21";
      break;

    case 2:
      z3p.textContent = "February, 28/29";
      break;

    case 3:
      z3p.textContent = "March, 31";
      break;
    case 4:
      z3p.textContent = "April, 30";
      break;
    case 5:
      z3p.textContent = "May, 31";
      break;
    case 6:
      z3p.textContent = "June, 30";
      break;
    case 7:
      z3p.textContent = "July, 31";
      break;
    case 8:
      z3p.textContent = "August, 31";
      break;
    case 9:
      z3p.textContent = "September, 30";
      break;
    case 10:
      z3p.textContent = "October, 31";
      break;
    case 11:
      z3p.textContent = "November, 30";
      break;
    case 12:
      z3p.textContent = "December, 31";
      break;
    default:
      break;
  }
}
// 7)Створити розмітку  з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" - "стоп", якщо "зелений" - "йти", якщо "жовтий" - "чекати".

// 8)Створити розмітку  з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.
