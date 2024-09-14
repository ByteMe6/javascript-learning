document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.button');
    let timerInterval;
    let timeLeft = 30 * 1; // 5 минут в секундах (легко изменить)
    const originalTime = timeLeft; // Сохраняем начальное время для сброса

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const message = `Осталось: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        let messageDiv = document.getElementById('message');
        if (!messageDiv) {
            messageDiv = document.createElement('div');
            messageDiv.id = 'message';
            document.body.appendChild(messageDiv);
        }
        messageDiv.textContent = message;
        console.log(message);
    }

    function startTimer() {
        clearInterval(timerInterval);
        timeLeft = originalTime; // Сброс к начальному времени
        updateDisplay();
        startButton.textContent = 'Перезапустить';

        timerInterval = setInterval(function() {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                let messageDiv = document.getElementById('message');
                messageDiv.textContent = 'Время вышло!';
                startButton.textContent = 'Начать';
                
                // Воспроизведение звука
                const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
                audio.play().catch(e => console.error('Ошибка воспроизведения звука:', e));
            }
        }, 1000);
    }

    if (startButton) {
        startButton.addEventListener('click', startTimer);
    } else {
        console.error('Кнопка "Начать" не найдена');
    }

    // Инициализация дисплея
    updateDisplay();
});