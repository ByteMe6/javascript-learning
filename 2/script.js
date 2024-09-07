  const square1 = document.getElementById('square1');
        const square2 = document.getElementById('square2');
        const square3 = document.getElementById('square3');

        let size = 50;
        let verticalPosition = 10;
        let horizontalPosition = 130;

        function animate() {
            // Анімація розміру (червоний квадрат)
            size = size === 50 ? 100 : 50;
            square1.style.width = `${size}px`;
            square1.style.height = `${size}px`;

            // Анімація вертикального положення (зелений квадрат)
            verticalPosition = verticalPosition === 10 ? 200 : 10;
            square2.style.top = `${verticalPosition}px`;

            // Анімація горизонтального положення (синій квадрат)
            horizontalPosition = horizontalPosition === 130 ? 300 : 130;
            square3.style.left = `${horizontalPosition}px`;

            console.log("Анімація виконана"); // Для відладки
        }

        // Запускаємо анімацію кожну секунду
        setInterval(animate, 1000);

        // Викликаємо функцію animate відразу для перевірки
        animate();