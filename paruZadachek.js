// Створіть програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.
// const num = parseInt(Math.random() * 10)
const num = 1
console.log(num)
const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const text = document.querySelector(".text")

console.log(btn)
console.log(inp.value)

    btn.addEventListener("click", onCLick)

   function onCLick() {
console.log(inp.value)

                if (Number(inp.value) === num){
            text.textContent = "Ах ти! Правильно"
        }
        else{
            text.textContent = "Хаха я виграв! ти не прав! 👎"
        }
    }