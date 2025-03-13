const jsonResponse = `
[
    {
        "username": "Fabian",
        "books": [
            { "title": "1984", "author": "George Orwell", "rating": 5 },
            { "title": "To Kill a Mockingbird", "author": "Harper Lee", "rating": 4 }
        ]
    },
    {
        "username": "mario",
        "books": []
    }
]
`;

// Parsear el JSON simulado
const users = JSON.parse(jsonResponse);

// Capturar el botón de búsqueda y el contenedor de libros
const searchButton = document.getElementById('searchButton');
const booksContainer = document.getElementById('books');

// Manejar el evento de búsqueda
searchButton.addEventListener('click', () => {
    // Obtener el nombre de usuario
    const username = document.getElementById('username').value;

    // Limpiar el contenedor de libros
    booksContainer.innerHTML = '';

    // Buscar al usuario en la "base de datos"
    let user = null; // Inicializamos user como null

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            user = users[i]; // Si encontramos al usuario, lo asignamos
            break; // Salimos del bucle una vez encontrado
        }
    }


    // Mostrar resultados según el estado del usuario
    if (user) {
        if (user.books.length === 0) {
            booksContainer.textContent = 'No has leído ningún libro aún.';
        } else {
            user.books.forEach(book => {
                // Crear un elemento para cada libro
                const bookDiv = document.createElement('div');
                bookDiv.classList.add('book');
                bookDiv.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Autor: ${book.author}</p>
                    <div class="rating">${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}</div>
                `;
                booksContainer.appendChild(bookDiv);
            });
        }
    } else {
        booksContainer.textContent = 'Usuario no encontrado.';
    }
});
