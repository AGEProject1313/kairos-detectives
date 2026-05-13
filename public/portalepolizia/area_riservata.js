document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", function() {
        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        // Verifica semplice delle credenziali (da sostituire con controllo più sicuro)
        if (username === "DelMonaco" && password === "zenigata77") {
            sessionStorage.setItem("authorized", "true");
            window.location.href = "area_riservata_ispettore.html";
        } else {
            errorMessage.classList.remove("hidden");
            errorMessage.classList.add("visible");
        }
    });
});
