

// signUp - функція яка як параметр приймає інші функція така функція називається функцією вищого порядку

const { toUpper, toLower } = require("lodash");

function signUp(filterUser) {
const filteredUser = filterUser();
}

// колбек - це функція яка сама по собі ніколи не відпрацьовує. ПРоте вона відпрацьовує інших функціях та передається туди як параметр
function getInfo() {
console.log("Отримали інформацію");
}
function filterUser(info) {
const userInfo = info();
console.log("Юзери пофільтровані боти видалені");
}

const repeatLog = function (n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
};
function findName(name, test) {
let result = "Людина додік";
if (test(name)) {
  result = `${name} привіт. ти не додік. \n${name} але тупий`;
}
return result;
}

function test(name) {
if (name === "artem".toLowerCase()) {
return true;
}else{
return false;
}
}

console.log(findName("artEm".toLowerCase(), test));


