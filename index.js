// Завдання 1: "Порівняння кількох промісів"

function delayedPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), delay);
    });
}

// Створюємо масив промісів з різними значеннями та затримками
const promises = [
    delayedPromise("Перший", 2000),
    delayedPromise("Другий", 1000),
    delayedPromise("Третій", 3000),
    delayedPromise("Четвертий", 1500),
    delayedPromise("П'ятий", 2500)
];

console.log("Початок виконання Promise.all");

Promise.all(promises)
    .then(results => {
        console.log("Всі проміси виконано!");
        console.log("Результати:", results);
    })
    .catch(error => {
        console.error("Сталася помилка:", error);
    });

// Завдання 2: "Змагання промісів"

function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; // від 1000 до 5000 мс
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ value, delay });
        }, delay);
    });
}

// Створюємо масив промісів з випадковими затримками
const racePromises = [
    randomDelay("Червоний"),
    randomDelay("Синій"),
    randomDelay("Зелений"),
    randomDelay("Жовтий"),
    randomDelay("Фіолетовий")
];

console.log("Початок змагання промісів");

Promise.race(racePromises)
    .then(result => {
        console.log(`Переміг ${result.value} із затримкою ${result.delay} мс!`);
    })
    .catch(error => {
        console.error("Сталася помилка:", error);
    });