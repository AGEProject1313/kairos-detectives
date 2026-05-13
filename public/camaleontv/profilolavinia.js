// Seleziona tutte le immagini dei film
const films = document.querySelectorAll('.film');

// Aggiungi un evento click a tutti i film tranne watch1
films.forEach(film => {
    film.addEventListener('click', () => {
        window.location.href = 'login-fallito.html'; // Reindirizza a login-fallito.html
    });
});

// Aggiungi un evento click a watch1 per aprire il video
watch1.addEventListener('click', () => {
    window.location.href = 'docubelcastro.mp4'; // Apri il video docubelcastro.mp4
});
