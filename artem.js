//обʼєкт = це складний тип данних(єдиний)
// обʼєкт створюється за допомогою {}фігурних дужок
// Чому складний тип данних томущо там багато може бути інших типів данних.
//Складні типи даних зберігаються за посиланням
const user = {
    nickName: "Grinch",
    height: 180,
    weight: 80,
    subscribe: true,
    stillNewYear() {
      console.log("New Year is end");
    },
  };
  
  const header = {
    // atributes:
    // textContent:
    // styles:
  };
  let abc = 4;
  
  abc = 5;
  
  const body = document.body;
  // querySelector =   то є метод який дозволяє нам знайти будь який html тег за будь якою ознакою
  
  //querySelector завжди ми всередину маємо передавати строку з ознакою за якою ми шукаємо [] = селектор атрибуту  . = селектор класу # = селектер id
  //  Я хочу знайти елемент з ознакою класс button
  // якщо не знаходить елемент повертає null
  const button = document.querySelector(".button");
  console.log(button);
  button.textContent = "Надіслати грощі.Ви банкрот";
  
  const img = document.querySelector(".img-fluid");
  
  console.log(img);
  img.src =
    "https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";
  img.alt = "picture";
  
  console.log(img);
  
  // ЩО таке DOM та обʼєктна модель документу
  // BOM надає можливість отримати інформацію з браузера (бажані мови, мова за замовчуванням, назву браузера) // console.log(Navigator.getBattery); https://developer.mozilla.org/ru/docs/Web/API/Navigator
  //  js це розширення мови - EcmaScript
  
  //Навігація по DOM -
  // querySelector() = дає нам можливість знайти будь який елемент з DOM - дерева
  // в дужки маємо передати строку з маркером з яким шукати
  // # . []
  
  const section = document.querySelector("#section");
  // Батьківський елeмент
  console.log(section.parentElement);
  // parentNode child Nodes = дуже рідкі у використанні слугують для того щоб знаходити дитячі елементи
  console.log(section.parentNode);
  console.log(section.childNodes);
  // textNode
  console.log(section.firstChild);
  // firstElementChild = повертає нам саме перший дитячий тег який ми зустрічаєм
  console.log(section.firstElementChild);
  // lastElementChild = повертає нам саме перший дитячий тег який ми зустрічаєм
  console.log(section.lastElementChild);
  // textNode
  console.log(section.lastChild);
  
  // якщо сусід є то повертає нам теги минулого сусіда
  console.log(section.previousElementSibling);
  // Якщо елемент не знаходиться повертає null стосується усих вище зазначених елементів
  // якщо сусід є то повертає нам теги наступного сусіда
  console.log(section.nextElementSibling);
  console.log(section.nextSibling);
  console.log(section.previousSibling);
  
  // сусіди
  // батькіські елементи
  // текстові елементи
  // дитячі елементи
  
  // Пошук елементів
  
  // Властивості та атрибути
  const image = document.getElementById("img");
  
  console.log(image.src);
  console.log(image.alt);
  
  image.src =
    "https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg";
  image.alt = "ТУТ ПУСТО";
  
  const link = document.querySelector("#link");
  
  link.href = "../style.css";
  
  console.log(link.href);
  
  const input = document.querySelector(".form-control");
  
  console.log(input.value);
  
  input.value = "Кіт!";
  
  const text = document.querySelector("#text");
  
  console.log(text.textContent);
  
  text.textContent = input.value;
  
  //classlist
  // classList = усі класи які є у елемента
  console.log(text.classList);
  
  text.classList.remove("p");
  text.classList.remove("d");
  text.classList.remove("f");
  text.classList.remove("a");
  
  console.log(text.classList);
  
  text.classList.add("active");
  console.log(text.classList);
  // text.classList.remove("active");
  //replace()замінює першу строку("active") на другу("normal")
  text.classList.replace("active", "normal");
  
  // Style = дозволяє додавати інлайнові стилі
  
  // Якщо у властивості є більше ніж одне слово
  text.style.backgroundColor = "tomato";
  text.style.fontSize = "24px";
  text.style.textAlign = "center";
  
  console.log(text.style);