let i = 0;

const intervalId = setInterval(() => {
    console.log(`Пройшло ${i + 1} секунд`);
    count++;

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Таймер зупинено");
    }
}, 1000);