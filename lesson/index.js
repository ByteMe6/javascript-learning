// || - або
// ! = не
// && = І
// !true = false
// !false = true
// true = true
// false = false

console.log(umbrella() && goodWeather())

function umbrella() {
  console.log("Парасолька");
}
function goodWeather() {
  console.log("Гарна погода");
}

console.log(umbrella() && goodWeather())