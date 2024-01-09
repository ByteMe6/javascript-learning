// 1. Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення
// текстового поля.
// 2. Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
// 3. Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати
// доступ до зображення та додати новий атрибут "alt" з описом зображення.
// 4. Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
const but1 = document.querySelector("#but1")
const inp1 = document.querySelector("#inp1")
console.log(but1 + inp1)
// console.log(inp1.value);
// 2. Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
const kartinka = document.querySelector("#kartinka")
const zagolovok = document.querySelector("#zagolovok")

kartinka.src = 
    "https://lokalise.com/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/10/Google_Translate_featured_blog_post_visual-1-scaled.jpg.webp";

// 3. Створити розмітку з посиланням та зображенням. 
// За допомогою JavaScript отримати доступ до посилання та змінити
//  значення атрибута "href" на нову URL-адресу. Також отримати
// доступ до зображення та додати новий атрибут "alt" з описом 
// зображення.
const s = document.querySelector("#s")
const kartinka2 = document.querySelector("#kartinka2")

s.href = "https://prom.ua/brands/Silka"; 

kartinka2.alt = "22343у"


// 4. Створити розмітку зі списком елементів. 
// За допомогою JavaScript отримати доступ 
// до першого елемента списку та змінити його 
// вміст на новий текст.

const list = document.getElementById("list");
const firstListItem = list.getElementsByTagName("li")[0];
firstListItem.innerHTML = "New text";