document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.startButton');
    const hoursInput = document.querySelector('.hours');
    const minutesInput = document.querySelector('.minutes');
    const secondsInput = document.querySelector('.seconds');
    let timerInterval;
    let timeLeft = 0;

    // Создаем div для сообщений один раз при загрузке страницы
    let messageDiv = document.getElementById('message');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'message';
        document.body.appendChild(messageDiv);
    }

    function updateDisplay() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        const message = `Осталось: ${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        messageDiv.textContent = message;
        console.log(message);
    }

    function startTimer() {
        clearInterval(timerInterval);
        
        // Получаем значения из полей ввода и конвертируем их в секунды
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        timeLeft = hours * 3600 + minutes * 60 + seconds;
        
        if (timeLeft <= 0) {
            messageDiv.textContent = 'Пожалуйста, введите корректное время';
            return;
        }

        updateDisplay();
        startButton.textContent = 'Перезапустить';

        timerInterval = setInterval(function() {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
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
    messageDiv.textContent = 'Введите время и нажмите "Начать"';
});