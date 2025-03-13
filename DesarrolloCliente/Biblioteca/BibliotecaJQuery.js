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
$(document).ready(function() {
// Parsear el JSON simulado
const users = JSON.parse(jsonResponse);

// Capturar el botón de búsqueda y el contenedor de libros
const searchButton = $('#searchButton');
const booksContainer = $('#books');

// Manejar el evento de búsqueda
$('#searchButton').click(function() {
    // Obtener el nombre de usuario
    const username = $('#username').val();

    // Limpiar el contenedor de libros
    $('#books').empty();


    // Buscar al usuario en la "base de datos" simulada
    //let user = null; // Inicializamos user como null

   /* const user = users.find(function(u) {
        return u.username === username;
    });*/

    const user = users.find(u => u.username === username);

  /*  for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            user = users[i]; // Si encontramos al usuario, lo asignamos
            break; // Salimos del bucle una vez encontrado
        }
    }*/


    // Mostrar resultados según el estado del usuario
    if (user) {
        if (user.books.length === 0) {
            $('#books').text('No has leído ningún libro aún.');
        } else {
            user.books.forEach(book => {
                $('#books').append(`
                    <div class="book">
                        <h3>${book.title}</h3>
                        <p>Autor: ${book.author}</p>
                        <div class="rating">${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}</div>
                    </div>
                `);
            });
        }
        
    } else {
        $('#books').text('Usuario no encontrado.');
    }
});
});
