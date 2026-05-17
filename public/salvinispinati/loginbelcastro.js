document.addEventListener("DOMContentLoaded", function() {
    // Elementi del DOM
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const loginSection = document.getElementById('login-section');
    const documentsSection = document.getElementById('documents-section');
    const btnDocs = document.getElementById('btn-docs');
    const btnTestamento = document.getElementById('btn-testamento');

    // Gestione del login
    loginBtn.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === 'admin' && password === 'admin') {
            loginSection.classList.add('hidden');
            documentsSection.classList.remove('hidden');
            loginError.style.display = 'none';
        } else {
            loginError.style.display = 'block';
        }
    });

    // Mostra il pulsante "Testamento" quando si clicca su "I miei documenti"
    btnDocs.addEventListener('click', function() {
        btnTestamento.classList.remove('hidden');
    });

    // Apertura del PDF "Testamento"
    btnTestamento.addEventListener('click', function() {
        const pdfPath = 'salvinispinati/testamento.pdf';
        
        fetch(pdfPath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                window.open(pdfPath, '_blank');
            } else {
                alert("Il documento non è disponibile.");
            }
        })
        .catch(error => {
            alert("Errore durante l'apertura del documento.");
        });
    });
});
