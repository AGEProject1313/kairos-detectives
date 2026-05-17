// Elenco ordini di prova con tutti i dati dell'indirizzo per la spedizione
let ordini = [
    {
        nome: "Mario",
        cognome: "Rossi",
        indirizzo: {
            via: "Via Roma 1",
            citta: "Milano",
            provincia: "MI",
            cap: "20100",
            telefono: "3331234567",
            noteCorriere: "Lascia il pacco al portiere"
        },
        prezzo: 24.90,
        dataOrdine: "2024-10-01",
        stati: { 
            spedito: false, 
            dataSpedizione: null, 
            richiestoReso: false, 
            dataReso: null, 
            rimborsato: false, 
            dataRimborso: null 
        },
        note: ""
    },
    {
        nome: "Luigi",
        cognome: "Verdi",
        indirizzo: {
            via: "Via Verdi 2",
            citta: "Firenze",
            provincia: "FI",
            cap: "50100",
            telefono: "3349876543",
            noteCorriere: "Chiamare prima della consegna"
        },
        prezzo: 19.90,
        dataOrdine: "2024-10-02",
        stati: { 
            spedito: false, 
            dataSpedizione: null, 
            richiestoReso: false, 
            dataReso: null, 
            rimborsato: false, 
            dataRimborso: null 
        },
        note: ""
    },
    // Aggiungi altri ordini qui...
];

// Funzione per ottenere la data odierna nel formato yyyy-mm-dd
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Funzione per mostrare gli ordini
function mostraOrdini(lista) {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';  // Svuota la lista prima di aggiornare

    lista.forEach(ordine => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');

        // Stato di spedizione, reso e rimborso con relative date
        const statoSpedizione = ordine.stati.spedito ? `Spedito il ${ordine.stati.dataSpedizione}` : 'Non spedito';
        const statoReso = ordine.stati.richiestoReso ? `Reso richiesto il ${ordine.stati.dataReso}` : 'Nessuna richiesta di reso';
        const statoRimborso = ordine.stati.rimborsato ? `Rimborsato il ${ordine.stati.dataRimborso}` : 'Non rimborsato';

        orderItem.innerHTML = `
            <h3>${ordine.nome} ${ordine.cognome}</h3>
            <p>Indirizzo: ${ordine.indirizzo.via}, ${ordine.indirizzo.citta} (${ordine.indirizzo.provincia}), ${ordine.indirizzo.cap}</p>
            <p>Telefono: ${ordine.indirizzo.telefono}</p>
            <p>Note per il corriere: ${ordine.indirizzo.noteCorriere}</p>
            <p>Prezzo: €${ordine.prezzo.toFixed(2)}</p>
            <p>Data ordine: ${ordine.dataOrdine}</p>
            <p>Stato spedizione: ${statoSpedizione}</p>
            <p>Stato reso: ${statoReso}</p>
            <p>Stato rimborso: ${statoRimborso}</p>

            <button style="background-color: ${ordine.stati.spedito ? 'green' : ''};" onclick="gestisciSpedizione('${ordine.nome}', '${ordine.cognome}')">
                ${ordine.stati.spedito ? "Annulla spedizione" : "Segna come spedito"}
            </button>
            <button style="background-color: ${ordine.stati.richiestoReso ? 'green' : ''};" onclick="gestisciReso('${ordine.nome}', '${ordine.cognome}')">
                ${ordine.stati.richiestoReso ? "Annulla richiesta reso" : "Richiesto reso"}
            </button>
            <button style="background-color: ${ordine.stati.rimborsato ? 'green' : ''};" onclick="gestisciRimborso('${ordine.nome}', '${ordine.cognome}')">
                ${ordine.stati.rimborsato ? "Annulla rimborso" : "Rimborsato"}
            </button>

            <textarea class="note-field" placeholder="Note" oninput="aggiornaNote('${ordine.nome}', '${ordine.cognome}', this.value)">${ordine.note}</textarea>
        `;

        orderList.appendChild(orderItem);
    });
}

// Funzione per gestire lo stato di spedizione con popup di conferma
function gestisciSpedizione(nome, cognome) {
    let ordine = ordini.find(ordine => ordine.nome === nome && ordine.cognome === cognome);

    if (ordine) {
        if (ordine.stati.spedito) {
            const conferma = confirm("Sei sicuro di voler annullare lo stato della spedizione?");
            if (conferma) {
                ordine.stati.spedito = false;
                ordine.stati.dataSpedizione = null;
            }
        } else {
            ordine.stati.spedito = true;
            ordine.stati.dataSpedizione = getCurrentDate();
        }
        mostraOrdini(ordini);  // Aggiorna la lista dopo il cambio di stato
    }
}

// Funzione per gestire lo stato di reso con popup di conferma
function gestisciReso(nome, cognome) {
    let ordine = ordini.find(ordine => ordine.nome === nome && ordine.cognome === cognome);

    if (ordine) {
        if (ordine.stati.richiestoReso) {
            const conferma = confirm("Sei sicuro di voler annullare la richiesta di reso?");
            if (conferma) {
                ordine.stati.richiestoReso = false;
                ordine.stati.dataReso = null;
            }
        } else {
            ordine.stati.richiestoReso = true;
            ordine.stati.dataReso = getCurrentDate();
        }
        mostraOrdini(ordini);  // Aggiorna la lista dopo il cambio di stato
    }
}

// Funzione per gestire lo stato di rimborso con popup di conferma
function gestisciRimborso(nome, cognome) {
    let ordine = ordini.find(ordine => ordine.nome === nome && ordine.cognome === cognome);

    if (ordine) {
        if (ordine.stati.rimborsato) {
            const conferma = confirm("Sei sicuro di voler annullare lo stato di rimborso?");
            if (conferma) {
                ordine.stati.rimborsato = false;
                ordine.stati.dataRimborso = null;
            }
        } else {
            ordine.stati.rimborsato = true;
            ordine.stati.dataRimborso = getCurrentDate();
        }
        mostraOrdini(ordini);  // Aggiorna la lista dopo il cambio di stato
    }
}

// Funzione per aggiornare le note
function aggiornaNote(nome, cognome, note) {
    let ordine = ordini.find(ordine => ordine.nome === nome && ordine.cognome === cognome);
    if (ordine) {
        ordine.note = note;
    }
}

// Funzione per cercare ordini
document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    const risultatiFiltrati = ordini.filter(ordine => 
        ordine.nome.toLowerCase().includes(searchTerm) ||
        ordine.cognome.toLowerCase().includes(searchTerm) ||
        ordine.indirizzo.via.toLowerCase().includes(searchTerm) ||
        ordine.indirizzo.citta.toLowerCase().includes(searchTerm) ||
        ordine.indirizzo.cap.includes(searchTerm) ||
        ordine.indirizzo.telefono.includes(searchTerm) ||
        ordine.indirizzo.noteCorriere.toLowerCase().includes(searchTerm)
    );

    mostraOrdini(risultatiFiltrati);
});

// Mostra tutti gli ordini inizialmente
mostraOrdini(ordini);
