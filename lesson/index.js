// Объявляем переменную `counter` и инициализируем ее значением 0.
let counter = 0;
let counterNo = 11
// Получаем элемент DOM с идентификатором "btn".
const button = document.getElementById("btn");

// Добавляем обработчик события `click` к элементу `button`.
// Обработчик события будет вызываться при нажатии на кнопку.
button.addEventListener("click", onClick);

// Функция, которая будет вызываться при нажатии на кнопку.
function onClick(event) {

  // Увеличиваем значение переменной `counter` на 1.
  counter += 1;
  counterNo -= 1;

  // Выводим в консоль сообщение "Ти клікнув Кнопку".
  // console.log("Ти клікнув Кнопку");
  console.log(event.target.textContent)
  // console.log(event)
  // console.log(event.type)
  console.log(event.currentTarget)
  console.log(counter)

  // Если значение переменной `counter` равно 1, то удаляем обработчик события `click`.

if(counter >= 11){
button.removeEventListener("click", onClick);
// button.style.display = "none";
console.log(counter);

}

    event.target.textContent = `ти тикнув ${counter} разів. програв. в тебе ще ${counterNo}`
}
// Выводим в консоль значение переменной `counter`.
// console.log(counter);
 
// e = обʼєкт події