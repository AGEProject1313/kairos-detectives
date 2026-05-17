document.getElementById("submit-btn").addEventListener("click", function() {
    // Codice esistente per la gestione del quiz
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    const answer4 = document.querySelector('input[name="answer5"]:checked');

    if (!answer1 || !answer2 || !answer3 || !answer4) {
        alert("Per favore rispondi a tutte le domande.");
        return;
    }

    const isCorrect =
        answer1.value === "colpevole1" && 
        answer2.value === "complice2" &&  
        answer3.value === "scena2" &&     
        answer4.value === "movente1";

    if (isCorrect) {
        window.location.href = "finale2.html"; 
    } else {
        document.getElementById("error-message").classList.remove("hidden");
    }
});

// Aggiungi la funzione in fondo al file
function hideDisclaimer() {
    const overlay = document.getElementById('disclaimer-overlay');
    overlay.style.display = 'none'; // Nasconde il disclaimer quando si clicca su "Continua"
}
