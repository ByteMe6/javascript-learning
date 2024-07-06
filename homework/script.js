// Выбираем элементы DOM
const sliderN1 = document.querySelector(".slider__input");
const imgN1 = document.querySelector(".slider__image");

// Начальное значение слайдера
let inputValueN1 = Number(sliderN1.value);

// Функция debounce
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Функция обновления размера изображения
function updateImageSize(value) {
    const size = Math.max(3, Math.round(3 + (value / 100) * 297));
    imgN1.style.width = `${size}px`;
    imgN1.style.height = `${size}px`;
    console.log(`Размер изображения обновлен: ${size}px`);
}

// Создаем отложенную версию функции обновления
const debouncedUpdateImageSize = debounce(updateImageSize, 50);

// Устанавливаем начальный размер
updateImageSize(inputValueN1);

// Добавляем слушатель события
sliderN1.addEventListener("input", (event) => {
    inputValueN1 = Number(event.target.value);
    debouncedUpdateImageSize(inputValueN1);
    console.log(`Значение слайдера: ${inputValueN1}`);
});

console.log("Скрипт инициализирован");
