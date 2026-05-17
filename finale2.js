document.getElementById("submit-btn-final").addEventListener("click", function() {
    // Ottieni i valori selezionati dal form
    const answer1Final = document.querySelector('input[name="answer1-final"]:checked');
    const answer2Final = document.querySelector('input[name="answer2-final"]:checked');

    // Verifica che tutte le risposte siano selezionate
    if (!answer1Final || !answer2Final) {
        alert("Per favore rispondi a tutte le domande.");
        return;
    }

    // Sequenza corretta: Nylon professionale, Manomissione del condizionatore
    const isCorrectFinal =
        answer1Final.value === "lift2" && // Nylon professionale
        answer2Final.value === "ice1"; // Manomissione del condizionatore

    if (isCorrectFinal) {
        document.getElementById("error-message-final").classList.add("hidden"); // Nascondi il messaggio di errore
        document.getElementById("success-message-final").classList.remove("hidden"); // Mostra il messaggio di successo
    } else {
        document.getElementById("error-message-final").classList.remove("hidden");
        document.getElementById("success-message-final").classList.add("hidden"); // Nascondi il messaggio di successo in caso di errore
    }
});
