const API_URL = 'http://localhost:3001/movies';
let currentEditId = null;

// GET - отримання всіх фільмів
async function getMovies() {
    try {
        const response = await fetch(API_URL);
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// POST - додавання нового фільму
async function addMovie() {
    const movie = {
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        director: document.getElementById('director').value,
        year: parseInt(document.getElementById('year').value)
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        if (response.ok) {
            clearForm();
            getMovies();
        }
    } catch (error) {
        console.error('Error adding movie:', error);
    }
}

// PUT - повне оновлення фільму
async function updateMovie(id) {
    const movie = {
        title: document.getElementById('editTitle').value,
        genre: document.getElementById('editGenre').value,
        director: document.getElementById('editDirector').value,
        year: parseInt(document.getElementById('editYear').value)
    };

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        if (response.ok) {
            closeModal();
            getMovies();
        }
    } catch (error) {
        console.error('Error updating movie:', error);
    }
}

// PATCH - часткове оновлення фільму
async function patchMovie(id, updates) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        });
        if (response.ok) {
            closeModal();
            getMovies();
        }
    } catch (error) {
        console.error('Error patching movie:', error);
    }
}

// DELETE - видалення фільму
async function deleteMovie(id) {
    if (confirm('Are you sure you want to delete this movie?')) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                getMovies();
            }
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    }
}

// Допоміжні функції
function displayMovies(movies) {
    const tbody = document.getElementById('moviesTableBody');
    tbody.innerHTML = '';
    
    movies.forEach(movie => {
        const row = `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.director}</td>
                <td>${movie.year}</td>
                <td>
                    <button onclick="openEditModal('${movie.id}')">Edit</button>
                    <button onclick="deleteMovie('${movie.id}')">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function openEditModal(id) {
    currentEditId = id;
    const modal = document.getElementById('editModal');
    modal.style.display = 'block';
    
    // Заповнюємо поля поточними даними
    fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .then(movie => {
            document.getElementById('editTitle').value = movie.title;
            document.getElementById('editGenre').value = movie.genre;
            document.getElementById('editDirector').value = movie.director;
            document.getElementById('editYear').value = movie.year;
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
            closeModal();
        });
}

function closeModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
    currentEditId = null;
}

function saveEdit() {
    if (currentEditId) {
        updateMovie(currentEditId);
    }
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('director').value = '';
    document.getElementById('year').value = '';
}

// Завантажуємо фільми при запуску сторінки
getMovies();

// Робимо функції доступними глобально
window.getMovies = getMovies;
window.addMovie = addMovie;
window.deleteMovie = deleteMovie;
window.openEditModal = openEditModal;
window.closeModal = closeModal;
window.saveEdit = saveEdit;
