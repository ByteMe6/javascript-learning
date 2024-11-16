document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const gallery = document.getElementById('gallery');
    const loadMoreButton = document.getElementById('load-more');
    let page = 1;
    let query = '';
    const API_KEY = '46720151-df3e0447f69496992d48f69c6';
    const PER_PAGE = 12;
    let template;

    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];

    // Загружаем шаблон карточки
    fetch('card.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load card template');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            template = doc.getElementById('card-template');
            console.log('Template loaded successfully'); // Отладочное сообщение
        })
        .catch(error => console.error('Error loading template:', error));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        query = e.target.elements.query.value.trim();
        console.log(`Search query: ${query}`); // Отладочное сообщение
        if (query) {
            page = 1; // Сброс страницы на 1
            gallery.innerHTML = ''; // Очистка галереи
            fetchImages(query, page);
        } else {
            console.log('Empty search query'); // Отладочное сообщение
        }
    });

    loadMoreButton.addEventListener('click', () => {
        console.log(`Current query: ${query}`); // Отладочное сообщение
        if (query) {
            console.log('Load more button clicked'); // Отладочное сообщение
            page += 1; // Увеличение номера страницы
            fetchImages(query, page);
        } else {
            console.log('No query to load more images'); // Отладочное сообщение
        }
    });

    function fetchImages(query, page) {
        const API_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${encodeURIComponent(query)}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`;
        console.log(`Fetching images from: ${API_URL}`); // Отладочное сообщение
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Отладочное сообщение для проверки данных
                if (data.hits.length === 0) {
                    console.log('No images found'); // Отладочное сообщение
                    alert('No images found for your query.'); // Уведомление пользователю
                    return;
                }
                renderImages(data.hits);
                scrollToNewImages();
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    function renderImages(images) {
        if (!template) {
            console.error('Template is not loaded'); // Проверка на наличие шаблона
            return;
        }
        images.forEach(image => {
            const clone = template.content.cloneNode(true);
            const img = clone.querySelector('.card-image');
            img.src = image.webformatURL;
            img.alt = image.tags;

            clone.querySelector('.likes-count').textContent = image.likes;
            clone.querySelector('.views-count').textContent = image.views;
            clone.querySelector('.comments-count').textContent = image.comments;
            clone.querySelector('.downloads-count').textContent = image.downloads;

            // Добавляем AOS атрибут
            clone.querySelector('.photo-card').setAttribute('data-aos', 'fade-up');

            gallery.appendChild(clone);
        });
    }

    function scrollToNewImages() {
        const lastImage = gallery.lastElementChild;
        if (lastImage) {
            lastImage.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    }

    gallery.addEventListener('click', (event) => {
        if (event.target.classList.contains('openBigger')) {
            const imgSrc = event.target.closest('.photo-card').querySelector('.card-image').src;
            modal.classList.add('show'); // Показываем модальное окно с анимацией
            modalImage.src = imgSrc; // Устанавливаем источник изображения
            captionText.innerHTML = event.target.closest('.photo-card').querySelector('h3[data-title]').innerHTML; // Устанавливаем заголовок
        }
    });

    // Закрытие модального окна при нажатии на "x"
    closeModal.onclick = function() {
        modal.classList.remove('show'); // Убираем анимацию
    }

    // Закрытие модального окна при нажатии вне изображения
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show'); // Убираем анимацию
        }
    }

    // Анимация кнопки "Open Bigger"
    const openBiggerButtons = document.querySelectorAll('.openBigger');
    openBiggerButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left; // Позиция курсора относительно кнопки
            const y = e.clientY - rect.top;

            button.style.transform = `rotateY(${(x / rect.width - 0.5) * 30}deg) rotateX(${(0.5 - y / rect.height) * 30}deg)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Сброс анимации
        });
    });
});
