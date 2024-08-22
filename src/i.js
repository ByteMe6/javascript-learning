import Handlebars from "handlebars";
let template = document.querySelector("#temp").innerHTML.trim()
const shablon = Handlebars.compile(template)
document.body.insertAdjacentHTML("beforeend", shablon( {
        name: "ByteMe6 ->",
        text: "Ви всі лохи!!"
    }))
console.log(template)