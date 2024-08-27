// Функция для генерации случайного ID (имитация nanoid)
function generateId(length = 21) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Функция для получения или создания пользовательского ID
function getUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = generateId();
        localStorage.setItem('userId', userId);
    }
    return userId;
}

// Функция для сохранения данных формы в localStorage
function saveFormData() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const userId = getUserId();
    localStorage.setItem('formData', JSON.stringify({ fname, lname }));
    updateIdBox(userId);
}

// Функция для загрузки данных формы из localStorage
function loadFormData() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        document.getElementById('fname').value = formData.fname || '';
        document.getElementById('lname').value = formData.lname || '';
    }
    const userId = getUserId();
    updateIdBox(userId);
}

// Функция для обновления отображения ID в idBox
function updateIdBox(id) {
    document.querySelector('.idBoxId').textContent = id;
}

// Загрузка данных при загрузке страницы
document.addEventListener('DOMContentLoaded', loadFormData);

// Обработчик события отправки формы
document.querySelector('.kForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем отправку формы
    saveFormData(); // Сохраняем данные
});