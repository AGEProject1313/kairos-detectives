let finalPrice = 24.90; // Prezzo di default

function applyDiscount() {
    const discountCode = document.getElementById("discount-code").value;
    finalPrice = 24.90; // Prezzo iniziale

    if (discountCode === "admin") {
        finalPrice = 19.90; // Prezzo scontato
    }

    document.getElementById("final-price").innerText = `€${finalPrice.toFixed(2)}`;
    document.getElementById("prezzo-totale").innerText = `€${finalPrice.toFixed(2)}`;
}

// Inizializza PayPal con il prezzo corretto
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: finalPrice.toFixed(2) // Usa il prezzo calcolato
                },
                shipping_preference: "GET_FROM_FILE"  // Richiede l'indirizzo di spedizione su PayPal
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pagamento completato con successo da ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        alert('Errore durante il pagamento: ' + err);
    }
}).render('#paypal-button-container');
