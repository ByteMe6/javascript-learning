import axios from 'axios';

document.addEventListener("DOMContentLoaded", () => {
  const api = "46720151-df3e0447f69496992d48f69c6";
  const find = "laptop";
  const editorsChoice = true;

  const imgElements = [
    document.querySelector(".imgFP1"),
    document.querySelector(".imgFP2"),
    document.querySelector(".imgFP3"),
    document.querySelector(".imgFP4"),
    document.querySelector(".imgFP5"),
    document.querySelector(".imgFP6"),
    document.querySelector(".imgFP7"),
    document.querySelector(".imgFP8")
  ];

  const imagesPerPage = 8;
  let currentPage = 1;
  let totalPages = 1;
  let imageData = [];

  function loadImages() {
    axios.get(`https://pixabay.com/api/`, {
      params: {
        key: api,
        q: find,
        editors_choice: editorsChoice,
        per_page: 40
      }
    })
    .then(response => {
      if (response.data.hits && response.data.hits.length > 0) {
        imageData = response.data.hits;
        totalPages = Math.ceil(imageData.length / imagesPerPage);
        updateImages();
      } else {
        console.log("Данные не найдены или пустой ответ");
      }
    })
    .catch(error => {
      console.error('Ошибка при загрузке изображений:', error);
    });
  }

  function updateImages() {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    imgElements.forEach((imgElement, index) => {
      const image = imageData[startIndex + index];
      imgElement.src = image ? image.webformatURL : "404.jpg";
    });

    // Отключение кнопок в зависимости от текущей страницы
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  // Найдите кнопки по классу
  const prevButton = document.querySelector('.btn.btn-secondary:first-of-type');
  const nextButton = document.querySelector('.btn.btn-secondary:last-of-type');

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateImages();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateImages();
    }
  });

  loadImages();
});
