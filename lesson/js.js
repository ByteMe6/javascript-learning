// Switch - щось схоже на if else
// Якщо у вас є можливість не використовувати Switch ви маєти її використати
// Все що записується за допомогою Switch можна записати за допомогою if ... else  але не навпаки.

const standart = 0;
const silver = 100;
const gold = 250;
const platinum = 500;
const diamond = 1000;

const money = 1001;

// key - що порвінюємо
switch (money) {
  case 0:
    console.log("standart");
    break;
  case 100:
    console.log("silver");
    break;
  case 250:
    console.log("gold");
    break;
  case 500:
    console.log("platinum");
    break;
  case 1000:
    console.log("diamond");
    break;

  default:
    console.log("Бомж");
    break;
}

if (money === standart) {
  console.log("Standart");
} else if (money === silver) {
  console.log("Silver");
} else if (money === gold) {
  console.log("Gold");
} else if (money === platinum) {
  console.log("Platinum");
} else if (money >= diamond) {
  console.log("Diamond");
} else {
  console.log("error");
}
