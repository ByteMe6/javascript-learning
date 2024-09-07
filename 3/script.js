        const gameButton = document.getElementById('gameButton');
        const startButton = document.getElementById('startButton');
        const scoreDisplay = document.getElementById('score');
        const timerDisplay = document.getElementById('timer');

        let score = 0;
        let timeLeft = 10;
        let gameInterval;
        let isGameActive = false;

        function updateScore() {
            score++;
            scoreDisplay.textContent = `Очки: ${score}`;
        }

        function updateTimer() {
            timeLeft--;
            timerDisplay.textContent = `Час: ${timeLeft}`;
            if (timeLeft <= 0) {
                endGame();
            }
        }

        function startGame() {
            if (!isGameActive) {
                score = 0;
                timeLeft = 10;
                scoreDisplay.textContent = 'Очки: 0';
                timerDisplay.textContent = 'Час: 10';
                isGameActive = true;
                gameButton.disabled = false;
                startButton.disabled = true;
                gameInterval = setInterval(updateTimer, 1000);
            }
        }

        function endGame() {
            clearInterval(gameInterval);
            isGameActive = false;
            gameButton.disabled = true;
            startButton.disabled = false;
            alert(`Гра закінчена! Ваш рахунок: ${score}`);
        }

        gameButton.addEventListener('click', () => {
            if (isGameActive) {
                updateScore();
            }
        });

        startButton.addEventListener('click', startGame);

        // Початково кнопка гри неактивна
        gameButton.disabled = true;