// Configurazione Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCnlgVpUDyzn5b0iLhEcrwVXtxVL_muSCg",
    authDomain: "kairos-detectives.firebaseapp.com",
    databaseURL: "https://kairos-detectives-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kairos-detectives",
    storageBucket: "kairos-detectives.appspot.com",
    messagingSenderId: "224723062370",
    appId: "1:224723062370:web:8a2c92a43b3d3746860b3b"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);

// Controllo dello stato di autenticazione all'avvio della pagina
window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            checkProductKey(user.uid).then(hasValidKey => {
                if (!hasValidKey) {
                    window.location.href = "/login.html?dest=" + encodeURIComponent(window.location.pathname);
                }
            });
        } else {
            window.location.href = "/login.html?dest=" + encodeURIComponent(window.location.pathname);
        }
    });
};

// Funzione per controllare se l'utente ha una Product Key valida
async function checkProductKey(uid) {
    try {
        const userLoginRef = firebase.database().ref('logins/' + uid);
        const snapshot = await userLoginRef.once('value');
        const userData = snapshot.val();
        const currentTime = new Date().getTime();
        const sixHoursInMillis = 6 * 60 * 60 * 1000;

        if (userData && userData.timestamp && (currentTime - userData.timestamp) < sixHoursInMillis) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Errore durante la verifica della Product Key:", error);
        return false;
    }
}
