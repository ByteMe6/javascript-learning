let data = {}

let checkboxPre = document.querySelector("#cb1-6").checked
let input = document.querySelector("#inp-1-0").value
let form = document.querySelector(".form")
let tasks = document.querySelector(".tasks")


form.addEventListener("submit", saveData)

function saveData(r) {
    r.preventDefault()
    input = document.querySelector("#inp-1-0").value
    checkboxPre = document.querySelector("#cb1-6").checked

    console.log(checkboxPre + " " + input)
    data.completed = checkboxPre
    data.task = input
    tasks.insertAdjacentHTML("beforeend", `Зроблено: ${data.completed} <br/> Завдання: ${data.task} <br/><br/> `)
    localStorage.setItem("data", JSON.stringify(data))
}
document.addEventListener('DOMContentLoaded', loadFormData);
function loadFormData() {
    const dataa = localStorage.getItem("data")
    const parseDataa = JSON.parse(dataa)

    // parseDataa.innerHTML()
    tasks.insertAdjacentHTML("beforeend", `Зроблено: ${parseDataa.completed} <br/> Завдання: ${parseDataa.task} <br/><br/> `)
    console.log(tasks)
}