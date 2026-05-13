// Codice segreto sviluppatore di 20 caratteri (alfanumerico e simboli)
const correctCode = "DinastiaLavinia1";

// Seleziona gli elementi della pagina
const submitButton = document.getElementById('submit-code');
const devCodeInput = document.getElementById('dev-code');
const message = document.getElementById('message');

// Aggiungi l'evento click per verificare il codice
submitButton.addEventListener('click', () => {
    const enteredCode = devCodeInput.value;
    
    if (enteredCode === correctCode) {
        // Codice corretto: reindirizza a dinastia.html
        window.location.href = 'dinastia.html';
    } else {
        // Codice errato: mostra il messaggio di errore
        message.textContent = "Codice non riconosciuto";
        message.style.color = "red";  // Cambia il colore del messaggio
    }
});
