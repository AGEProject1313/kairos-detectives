document.addEventListener("DOMContentLoaded", function() {
    const resultElement = document.getElementById("result");
    const personButtons = document.querySelectorAll(".person-btn");
    const personDetailsSection = document.getElementById("personDetailsSection");
    const selectedPerson = document.getElementById("selectedPerson");
    const requestButtons = document.querySelectorAll(".request-options button");
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const textContainer = document.getElementById("textContainer");
    const locationButtons = document.querySelectorAll(".location-btn");  // Aggiunto per i sopralluoghi
    let requestInProgress = false;  // Per bloccare le richieste per 60 secondi

    document.getElementById("victimItemsBtn").addEventListener("click", function() {
        window.open('oggetti.jpg', '_blank');
    });
    
    // Mostra la sezione nascosta con i pulsanti di richiesta per una persona
    personButtons.forEach(button => {
        button.addEventListener("click", function() {
            const person = this.textContent;
            selectedPerson.textContent = person;
            personDetailsSection.style.display = "block";
        });
    });

    // Gestione dei clic sui pulsanti di richiesta
    requestButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (requestInProgress) {
                resultElement.textContent = "Richiesta in corso, attendere 1 minuto...";
                return;  // Blocca ulteriori richieste
            }

            const action = this.textContent;
            const person = selectedPerson.textContent;

            // Reset messaggi e nascondi elementi
            resultElement.textContent = "";
            textContainer.style.display = "none";

            if (action === "Interrogatorio") {
                handleInterrogatorio(person);
            } else if (action === "Precedenti penali") {
                handlePrecedentiPenali(person);
            } else if (action === "Documenti depositati") {
                handleDocumentiDepositati(person);
            }
        });
    });

    // Gestione dei clic sui pulsanti di sopralluogo
    locationButtons.forEach(button => {
        button.addEventListener("click", function() {
            const location = this.textContent;
            handleSopralluogo(location);
        });
    });

    function handleInterrogatorio(person) {
        switch(person) {
            case "Paolo Bonetti":
                playAudio("interrogatoriopaolo.mp3");
                resultElement.textContent = "Provvederemo ad organizzare l'interrogatorio, sarà disponibile in questo portale a breve!";
                blockRequests();
                break;
            case "Alina Daarie":
                playAudio("interrogatorioalina.mp3");
                resultElement.textContent = "Provvederemo ad organizzare l'interrogatorio, sarà disponibile in questo portale a breve!";
                blockRequests();
                break;
            case "Lavinia Morisio":
                playAudio("interrogatoriolavinia2.mp3");
                resultElement.textContent = "Provvederemo ad organizzare l'interrogatorio, sarà disponibile in questo portale a breve!";
                blockRequests();
                break;
            case "Silvana Conti":
                resultElement.textContent = "Questa persona è deceduta, non è possibile procedere con un interrogatorio.";
                break;
            case "Massimo":
            case "Alessia":
            case "Serge":
            case "Lorenzo":
            case "Arturo":
                resultElement.textContent = "Non abbiamo elementi probatori a sufficienza per interrogare questa persona.";
                break;
            default:
                resultElement.textContent = "Non abbiamo elementi probatori a sufficienza per interrogare questa persona.";
        }
    }

    function handlePrecedentiPenali(person) {
        switch(person) {
            case "Paolo Bonetti":
                openDocument("casellariopaolo.pdf");
                resultElement.textContent = "Apertura del documento per Paolo Bonetti.";
                blockRequests();
                break;
            case "Lorenzo Bartoli":
                openDocument("casellariolorenzo.pdf");
                resultElement.textContent = "Apertura del documento per Lorenzo Bartoli.";
                blockRequests();
                break;
            case "Massimo":
            case "Alessia":
            case "Serge":
            case "Alina Daarie":
            case "Silvana Conti":
            case "Lavinia Morisio":
            case "Arturo":
                resultElement.textContent = "Non è presente alcun risultato nel casellario giudiziario della persona richiesta.";
                break;
            default:
                resultElement.textContent = "Non è presente alcun risultato nel casellario giudiziario della persona richiesta.";
        }
    }

    function handleDocumentiDepositati(person) {
        switch(person) {
            case "Silvana Conti":
                openDocument("denuncia.pdf");
                resultElement.textContent = "Apertura del documento per Silvana Conti.";
                blockRequests();
                break;
            case "Massimo":
            case "Alessia":
            case "Serge":
            case "Paolo Bonetti":
            case "Alina Daarie":
            case "Lavinia Morisio":
            case "Lorenzo Bartoli":
            case "Arturo":
                resultElement.textContent = "Non è presente alcun documento nel database.";
                break;
            default:
                resultElement.textContent = "Non è presente alcun documento nel database.";
        }
    }

    function handleSopralluogo(location) {
        switch(location) {
            case "Camera Patronale":
                openImage("camerapatronale.png");
                break;
            case "Camera Silvana":
                openImage("camerasilvana.png");
                break;
            case "Camera Alessia":
                openImage("cameraalessia.png");
                break;
            case "Capanno":
                openImage("capanno.jpeg");
                break;
            case "Cucina":
                openImage("cucina.png");
                break;
            case "Camera Serge":
                openImage("cameraserge.png");
                break;
            default:
                resultElement.textContent = "Nessuna immagine disponibile per la posizione selezionata.";
        }
    }

    function playAudio(file) {
        audioSource.src = file;
        audioPlayer.load();  // Ricarica il lettore con il nuovo file
        audioPlayer.play();
        
        // Blocca ulteriori richieste mentre l'audio è in riproduzione
        requestInProgress = true;
        audioPlayer.onended = () => {
            requestInProgress = false;  // Sblocca dopo la fine della riproduzione
        };
    }

    function openDocument(file) {
        window.open(file, "_blank");
    }

    function openImage(file) {
        window.open(file, "_blank");
    }

    function documentExists(person) {
        // Simulazione di controllo documento per persona
        const validDocuments = ["Paolo Bonetti", "Lorenzo Bartoli", "Silvana Conti"];
        return validDocuments.includes(person);
    }

    function blockRequests() {
        requestInProgress = true;
        setTimeout(() => { 
            requestInProgress = false;
            resultElement.textContent = "";  // Resetta il messaggio dopo lo sblocco
        }, 60000);  // 60 secondi di blocco
    }
    // Sezione per i nuovi pulsanti degli esami specifici
const requestEsameAutopticoButton = document.getElementById("requestEsameAutoptico");
const requestEsameTossicologicoButton = document.getElementById("requestEsameTossicologico");
const esameAutopticoMessage = document.getElementById("esameAutopticoMessage");
const esameTossicologicoSection = document.getElementById("esameTossicologicoSection");
const chemicalFormulaInput = document.getElementById("chemicalFormulaInput");
const submitFormulaButton = document.getElementById("submitFormula");
const esameTossicologicoMessage = document.getElementById("esameTossicologicoMessage");

// Gestione del click su "Richiedi esame autoptico"
requestEsameAutopticoButton.addEventListener("click", function() {
    esameAutopticoMessage.style.display = "block";
    esameTossicologicoSection.style.display = "none";
    esameTossicologicoMessage.style.display = "none";
});

// Gestione del click su "Richiedi esame tossicologico"
requestEsameTossicologicoButton.addEventListener("click", function() {
    esameAutopticoMessage.style.display = "none";
    esameTossicologicoSection.style.display = "block";
    esameTossicologicoMessage.style.display = "none";
});

// Verifica della formula chimica
submitFormulaButton.addEventListener("click", function() {
    const formula = chemicalFormulaInput.value.trim();
    const validFormulas = [
        "KMnO4 + C3H8O3",
        "KMnO4+C3H8O3",
        "KMnO4 +C3H8O3",
        "KMnO4+ C3H8O3"
    ];

    if (validFormulas.includes(formula)) {
        esameTossicologicoMessage.textContent = "L'esame tossicologico ha dato esito positivo, nel cadavere è stato trovato un quantitativo della sostanza KMnO4 + C3H8O3 sufficiente a provocare il decesso.";
        esameTossicologicoMessage.style.color = "green";
    } else {
        esameTossicologicoMessage.textContent = "Siamo spiacenti, gli elementi che hai inserito non sono utili a procedere.";
        esameTossicologicoMessage.style.color = "red";
    }
    esameTossicologicoMessage.style.display = "block";
});

});
