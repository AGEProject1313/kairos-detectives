function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (email === "m.belcastro@waterweb.com" && password === "KOMOREBI") {
        // Nasconde il messaggio di errore
        errorMessage.style.display = 'none';
        // Reindirizza alla pagina loginbelcastro.html
        window.location.href = "loginbelcastro.html";
    } else {
        // Mostra il messaggio di errore
        errorMessage.style.display = 'block';
    }
}


function showDocumentList() {
    document.getElementById('document-list').classList.remove('hidden');
}

function openDocument() {
    // Mostra l'anteprima del documento all'interno della pagina
    document.getElementById('document-preview').classList.remove('hidden');
}
