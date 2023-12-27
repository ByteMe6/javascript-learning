// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
let result = 5+5+"5"
console.log(result)


let email = "tsapiy.yurka@gmail.com"
function checkEmail(email) {
    // Перевіряє наявність символу @ за допомогою indexOf
    if (email.indexOf("@") > -1) {
      // Рахує довжину рядка email - кількість символів
      const count = email.length;
      console.log(`Email містить символ @, ${count} символів`);
    } else {
      console.log("Email не містить символ @");
    }
  }
  
  // Запитує email у користувача
  // Перевіряє отриманий email
  checkEmail(email);


  // Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
let my = "My"
let name_text = " name"
let is_text = " is:"
let fullName = my + name_text + is_text + " Victor"
console.log(fullName)

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
const userName = "Loch"
const payment = 30000000000000
let valuta = "Гривня"
valuta = "гривень"
console.log(`Дякуємо, ${userName}! До сплати ${payment} ${valuta}`)