// Функция, которая будет вызываться при клике на кнопку
function handleButtonClick() {
    alert('Кнопка была нажата!');
    // Здесь вы можете добавить любой код, который должен выполняться при нажатии кнопки
}

// Ждем, пока документ полностью загрузится
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку по классу
    const button = document.querySelector('.button-73');
    
    // Добавляем обработчик события клика
    button.addEventListener('click', handleButtonClick);
});