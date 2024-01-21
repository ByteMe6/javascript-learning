// || - або
// ! = не
// && = І
console.clear;
// !true = false
// !false = true
// true = true
// false = false

// console.log(umbrella() && goodWeather())

// function umbrella() {
//   console.log("Парасолька");
// }
// function goodWeather() {
//   console.log("Гарна погода");
// }

// if ("artem", "", false) {
//   console.log("Правда")
// } else {
//   console.log("Фальшивка")
//   // console.log(false)
// }

let user = 5000000000

const lochSub = 200
const ultra = 500
const MEGASUPERULTRA = 10000
if (user >= lochSub){
  console.clear;
 console.log("ви можете купити лох підписку")
}
if (user >= ultra){
  // console.clear;
 console.log("ви можете купити нормальну підписку")
}
if (user >= MEGASUPERULTRA){
  // console.clear;
 console.log("ви можете купити гарну підписку")
}
if (user < lochSub)  {
  // console.clear;
  console.log(" ви хуже лоха. ви бомж")
}