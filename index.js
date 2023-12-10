// "use strict";

// Властивість - характеристика, яка нас описує


const hi = "Hello, world!"; // пєрємєна
console.log(hi.length) // длинна нашей переменной

// length = довжина
console.log(hi) // просто наша перемнная

// console;
//  Метод = виконати дію

// log = показує щось в консолі 

// console.clear() // очищает консоль

// console.log(hi.toUpperCase()) // переводит все в верхний регистр
// console.log(hi.toLowerCase()) // переводит все в нижний регистр
// console.log(hi.indexOf(hi)) // знаходит первое в чем то


// -------------------------СУВОРИЙ РЕЖИМ----------------------------------------------------
// штука яка забороняє нам використовувати старі фічі та старий архаінчний синатксис
// "use strict";
// x = 10 // поганий синтаксис

// console.log("x") // x
// console.log(x) // 10


// -------------------------Змінні і типи----------------------------------------------------
const a = 1;
let b = "Hello, world!";
var c = true;
let ab = b + ", " + a + ", " + c
console.log(a + ", " + b + ", "+ c);
console.log(ab);

// const = нземінна пєрємєнная така одна. використовівапти можна!
//  let = зміннювана пєрємєная, використовувати можна
//  var = зміннювана пєрємєна, але дуже архаї і нагружає комп. виокристовувати не рекоменується

// змнінна - це комірка памʼяті куди ми записуємо якусь інофрмацію
//  в змінних НЕ ОБОВʼЯЗКОВО змінюється дані

// capitalize = не менять  

const str = "hello, world! 2"
console.log(str)

// const str_test = hello // error (no "" find)
// const str_test = String("hI") //no error
//console.log(str_test)

const null_test = null
console.log(null_test)
// || - логічний опоратер або
// && - логічний опоратер і

// console.log(null_test || "null")
// console.log(null_test && "null")

// NaN = Not a Number                  (not a num)
