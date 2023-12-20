let celsium = 35
let forengeyt = celsium * 1.8 + 32
console.log(`зараз: ${celsium}°C, ${forengeyt}°F`)
// let bad = alert("Тут небезпечно")
// let res = confirm("Ви дійсно хочете підтвердити дію?");
// if (res) {
//   document.querySelector(".okUSE").style.display = "block";
//   document.querySelector(".noUSE").style.display = "none";
// } else {
//   document.querySelector(".okUSE").style.display = "none";
//   document.querySelector(".noUSE").style.display = "block";
// }

let tempP = `зараз: ${celsium}°C, ${forengeyt}°F`

// Изменить содержимое элемента
// const change = document.querySelector(".temp");
document.querySelector(".temp").textContent = "зараз: " + celsium +"°C, "+ forengeyt +"°F"
