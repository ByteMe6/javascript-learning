document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');

  gallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery__image')) {
      e.preventDefault();
      modal.style.display = "block";
      modalImg.src = e.target.dataset.source;
    }
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
  });

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});