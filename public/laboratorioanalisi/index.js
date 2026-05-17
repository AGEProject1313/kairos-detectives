let hackStartTime = null;
const hackDuration = 15 * 60 * 1000; // 15 minutes in milliseconds
let intervalId;
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// Funzione per generare lettere casuali nei campi username e password
function randomizeFields() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    usernameField.value = generateRandomString(6);
    passwordField.value = generateRandomString(6);
}

// Genera una stringa casuale di una lunghezza specificata
function generateRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Check login
function checkLogin() {
    document.getElementById('error-message').style.display = 'block';
}

// Start hacking process only when button is clicked
function startHacking() {
    const currentTime = new Date().getTime();
    
    // Save the start time only after clicking the button
    hackStartTime = currentTime;
    localStorage.setItem('hackStartTime', hackStartTime);

    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('start-hack').style.display = 'none';

    intervalId = setInterval(updateProgressBar, 1000);
    setInterval(randomizeFields, 500); // Cambia le lettere ogni mezzo secondo
}

// Update progress bar and remaining time
function updateProgressBar() {
    const currentTime = new Date().getTime();
    const savedStartTime = localStorage.getItem('hackStartTime');
    const elapsedTime = currentTime - savedStartTime;

    if (elapsedTime >= hackDuration) {
        // Hacking process completed
        document.getElementById('progress').style.width = '100%';
        document.getElementById('hack-message').textContent = 'Hacking completato. Accesso consentito.';

        clearInterval(intervalId);
        
        // Mostra 6 asterischi nei campi
        document.getElementById('username').value = '******';
        document.getElementById('password').value = '******';

        // Dopo un breve ritardo, reindirizza alla pagina successiva
        setTimeout(() => {
            window.location.href = 'belcastro.html'; // Cambia l'URL con la tua pagina successiva
        }, 1000);
    } else {
        // Calculate progress
        const progressPercent = (elapsedTime / hackDuration) * 100;
        document.getElementById('progress').style.width = progressPercent + '%';

        // Calculate remaining time
        const remainingTime = Math.ceil((hackDuration - elapsedTime) / 1000);
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        document.getElementById('remaining-time').textContent = `Tempo rimanente: ${minutes}m ${seconds}s`;
    }
}

// On page load, check if the brute force process has already started
window.onload = function() {
    const savedStartTime = localStorage.getItem('hackStartTime');
    if (savedStartTime) {
        const currentTime = new Date().getTime();
        if (currentTime - savedStartTime < hackDuration) {
            document.getElementById('progress-container').style.display = 'block';
            document.getElementById('start-hack').style.display = 'none';
            updateProgressBar();
            setInterval(randomizeFields, 500);
            intervalId = setInterval(updateProgressBar, 1000);
        }
    }
};
