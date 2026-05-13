// script.js

const senders = [
    { id: 'QG Kairos', name: 'QG Kairos', avatar: 'logokd.jpeg' },
    { id: 'bartoli', name: 'Padre Bartoli', avatar: 'logoordine2.png' },
    { id: 'delmonaco', name: 'Isp. Del Monaco', avatar: 'logopoliziaconsfondo.webp' },
    { id: 'studioDentista', name: 'Studio dentista', avatar: 'logodentista.webp' }
];

let chatData = {};
let currentSender = null;
let messagesLog = {};  // Per salvare i messaggi di ogni utente
let unreadMessages = {}; // Per tracciare i messaggi non letti
let messageSent = { "bartoli": false, "delmonaco": false, "studioDentista": false }; // Per assicurare che il messaggio venga inviato una sola volta
let responseSent = {}; // Per tracciare se una risposta è stata inviata per ogni mittente
let audioSent = false; // Per tracciare se l'audio è stato inviato

// Variabile per sbloccare il contesto audio
let audioContextUnlocked = false;

// Funzione per sbloccare il contesto audio
function unlockAudioContext() {
    if (audioContextUnlocked) return;
    const audio = document.getElementById('notification-sound');
    if (audio) {
        audio.play().then(() => {
            audio.pause();
            audio.currentTime = 0;
            audioContextUnlocked = true;
            console.log('Contesto audio sbloccato');
        }).catch((error) => {
            console.log('Errore nello sblocco del contesto audio:', error);
        });
    }
}

// Funzione per salvare lo stato nel localStorage
function saveStateToLocalStorage() {
    localStorage.setItem('messagesLog', JSON.stringify(messagesLog));
    localStorage.setItem('unreadMessages', JSON.stringify(unreadMessages));
    localStorage.setItem('messageSent', JSON.stringify(messageSent));
    localStorage.setItem('responseSent', JSON.stringify(responseSent));
    localStorage.setItem('currentSender', currentSender);
    localStorage.setItem('audioSent', JSON.stringify(audioSent));
}

// Funzione per caricare lo stato dal localStorage
function loadStateFromLocalStorage() {
    const storedMessagesLog = localStorage.getItem('messagesLog');
    const storedUnreadMessages = localStorage.getItem('unreadMessages');
    const storedMessageSent = localStorage.getItem('messageSent');
    const storedResponseSent = localStorage.getItem('responseSent');
    const storedCurrentSender = localStorage.getItem('currentSender');
    const storedAudioSent = localStorage.getItem('audioSent');

    if (storedMessagesLog) messagesLog = JSON.parse(storedMessagesLog);
    if (storedUnreadMessages) unreadMessages = JSON.parse(storedUnreadMessages);
    if (storedMessageSent) messageSent = JSON.parse(storedMessageSent);
    if (storedResponseSent) responseSent = JSON.parse(storedResponseSent);
    if (storedCurrentSender) currentSender = storedCurrentSender;
    if (storedAudioSent) audioSent = JSON.parse(storedAudioSent);
}

// Funzione per caricare i dati dal file JSON
async function loadChatData() {
    try {
        const response = await fetch('./chat.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        chatData = await response.json();
        if (Object.keys(chatData).length === 0) {
            throw new Error("Il file JSON è vuoto o non contiene dati validi.");
        }
    } catch (error) {
        console.warn('Errore nel caricamento del file JSON:', error);
    } finally {
        // Non inizializzare l'app qui
    }
}

// Funzione per creare un elemento di chat
function createChatItem(sender, unread) {
    const chatItem = document.createElement('div');
    chatItem.className = 'chat-item';
    chatItem.dataset.senderId = sender.id;
    chatItem.innerHTML = `
        <img src="${sender.avatar}" alt="${sender.name}" class="avatar">
        <div class="name">${sender.name}</div>
        ${unread ? '<div class="unread"></div>' : ''}
    `;
    chatItem.addEventListener('click', () => selectChat(sender.id));
    return chatItem;
}

// Funzione per selezionare una chat
function selectChat(senderId) {
    currentSender = senderId;
    document.querySelectorAll('.chat-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.senderId === senderId) {
            item.classList.add('active');
            item.classList.remove('unread');
        }
    });
    displayMessages(senderId);

    unreadMessages[senderId] = false;

    if (messagesLog[senderId]) {
        messagesLog[senderId] = messagesLog[senderId].map(msg => {
            if (!msg.read) {
                msg.read = true;
                updateMessageStatus(senderId, msg, true);
            }
            return msg;
        });
    }

    saveStateToLocalStorage();
}

// Funzione per visualizzare i messaggi di una chat
function displayMessages(senderId) {
    const messageArea = document.querySelector('.messages');
    messageArea.innerHTML = '';

    if (messagesLog[senderId]) {
        messagesLog[senderId].forEach(msg => {
            if (msg.type === 'audio') {
                addAudioMessage(senderId, msg.content, false);
            } else {
                addMessage(senderId, msg.content, msg.received, msg.read, false);
            }
        });
    }
}

// Funzione per aggiungere un messaggio
function addMessage(senderId, content, received = true, read = false, updateLog = true) {
    const isCurrentChat = (currentSender === senderId);
    console.log(`Aggiunta messaggio da ${senderId}, isCurrentChat: ${isCurrentChat}, received: ${received}`);

    if (received && !isCurrentChat) {
        console.log('Messaggio ricevuto in chat non attiva, riproduzione notifica');
        playNotification();
    }

    if (!isCurrentChat) {
        if (updateLog) {
            if (!messagesLog[senderId]) {
                messagesLog[senderId] = [];
            }
            // Verifica se il messaggio esiste già prima di aggiungerlo
            const messageExists = messagesLog[senderId].some(msg => 
                msg.content === content && msg.received === received
            );
            if (!messageExists) {
                messagesLog[senderId].push({ content, received, read, type: 'text' });
                saveStateToLocalStorage(); // Salva lo stato aggiornato
            }
        }

        // Aggiungi la chat alla lista solo se non esiste già
        if (!document.querySelector(`.chat-item[data-sender-id="${senderId}"]`)) {
            console.log(`Creazione nuovo elemento chat per ${senderId}`);
            const chatList = document.querySelector('.chat-list');
            const newChatItem = createChatItem(senders.find(s => s.id === senderId), true);
            chatList.appendChild(newChatItem);
        } else {
            const chatItem = document.querySelector(`.chat-item[data-sender-id="${senderId}"]`);
            console.log(`Elemento chat esistente per ${senderId}, unreadMessages[${senderId}]: ${unreadMessages[senderId]}`);
            if (chatItem && !unreadMessages[senderId]) {
                chatItem.classList.add('unread');
                unreadMessages[senderId] = true;
            }
        }

        saveStateToLocalStorage(); // Salva lo stato aggiornato
        return;
    }

    const messageArea = document.querySelector('.messages');
    const message = document.createElement('div');
    message.className = `message ${received ? 'received' : 'sent'}`;
    message.innerHTML = `
        <div class="content">${content}</div>
        <div class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        ${!received ? `<div class="status">${read ? '✓✓' : '✓'}</div>` : ''}
    `;

    messageArea.appendChild(message);
    messageArea.scrollTop = messageArea.scrollHeight;

    if (updateLog) {
        if (!messagesLog[senderId]) {
            messagesLog[senderId] = [];
        }
        // Verifica se il messaggio esiste già prima di aggiungerlo
        const messageExists = messagesLog[senderId].some(msg => 
            msg.content === content && msg.received === received
        );
        if (!messageExists) {
            messagesLog[senderId].push({ content, received, read, type: 'text' });
            saveStateToLocalStorage(); // Salva lo stato aggiornato
        }
    }

    // Invio unico della nota audio
    if (senderId === 'bartoli' && content === chatData.bartoli.messaggio1 && !audioSent) {
        addAudioMessage(senderId, 'registrazionealessia.mp3');
        audioSent = true;
        saveStateToLocalStorage();
    }

    saveStateToLocalStorage(); // Salva lo stato aggiornato
}

// Funzione per aggiungere un file audio come messaggio
function addAudioMessage(senderId, audioFile, updateLog = true) {
    const isCurrentChat = (currentSender === senderId);

    if (isCurrentChat) {
        const messageArea = document.querySelector('.messages');

        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = audioFile;

        const audioMessage = document.createElement('div');
        audioMessage.className = 'message received';
        audioMessage.appendChild(audioElement);

        messageArea.appendChild(audioMessage);
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    if (updateLog) {
        if (!messagesLog[senderId]) {
            messagesLog[senderId] = [];
        }
        messagesLog[senderId].push({ content: audioFile, received: true, read: false, type: 'audio' });
        saveStateToLocalStorage(); // Salva lo stato aggiornato
    }
}

// Funzione per aggiornare lo stato di un messaggio quando viene letto
function updateMessageStatus(senderId, msg, read) {
    const messageElements = document.querySelectorAll('.message');
    messageElements.forEach(msgElem => {
        if (msgElem.querySelector('.content') && msgElem.querySelector('.content').textContent === msg.content) {
            const statusElem = msgElem.querySelector('.status');
            if (statusElem) {
                statusElem.textContent = read ? '✓✓' : '✓';
            }
        }
    });
}

// Funzione per riprodurre la notifica
function playNotification() {
    console.log('Tentativo di riproduzione della notifica audio');
    const audio = document.getElementById('notification-sound');
    if (audio) {
        console.log('Elemento audio trovato, tentativo di riproduzione');
        audio.currentTime = 0; // Riporta l'audio all'inizio
        audio.play().then(() => {
            console.log('Audio di notifica riprodotto con successo');
        }).catch(error => {
            console.error('Errore durante la riproduzione dell\'audio di notifica:', error);
            console.log('Dettagli audio:', {
                src: audio.src,
                readyState: audio.readyState,
                error: audio.error
            });
        });
    } else {
        console.error('Elemento audio non trovato');
    }
}

// Funzione per ottenere una scusa casuale
function getRandomExcuse(senderId) {
    const excuses = Object.keys(chatData[senderId] || {})
        .filter(key => key.startsWith('scusa'))
        .map(key => chatData[senderId][key]);
    return excuses.length > 0 ? excuses[Math.floor(Math.random() * excuses.length)] : "Scusa, al momento non posso rispondere.";
}

// Inizializzazione dell'applicazione
function initApp() {
    const audio = document.getElementById('notification-sound');
    if (audio) {
        audio.load();
        console.log('Audio caricato in initApp');
    } else {
        console.error('Elemento audio non trovato in initApp');
    }

    checkAudioStatus(); // Controlla lo stato dell'audio all'inizio
    loadStateFromLocalStorage();

    const chatList = document.querySelector('.chat-list');

    // Aggiungi "QG Kairos" alla lista delle chat se non esiste già
    if (!document.querySelector(`.chat-item[data-sender-id="QG Kairos"]`)) {
        const kairosChatItem = createChatItem(senders.find(s => s.id === 'QG Kairos'), unreadMessages['QG Kairos'] || false);
        chatList.appendChild(kairosChatItem);
    }

    // Inizializza gli elementi di chat esistenti dal messagesLog
    if (messagesLog) {
        Object.keys(messagesLog).forEach(senderId => {
            if (senderId !== 'QG Kairos') { // Evita di aggiungere di nuovo "QG Kairos"
                if (!document.querySelector(`.chat-item[data-sender-id="${senderId}"]`)) {
                    const sender = senders.find(s => s.id === senderId);
                    const unread = unreadMessages[senderId] || false;
                    const chatItem = createChatItem(sender, unread);
                    chatList.appendChild(chatItem);
                }
            }
        });
    }

    // Seleziona la chat corrente o imposta 'QG Kairos' come default
    selectChat(currentSender || 'QG Kairos');

    // Modifica questa parte per evitare la duplicazione dei messaggi
    if (!messagesLog['QG Kairos'] || messagesLog['QG Kairos'].length === 0) {
        setTimeout(() => {
            if (!messagesLog['QG Kairos'] || messagesLog['QG Kairos'].length === 0) {
                addMessage('QG Kairos', chatData['QG Kairos'].messaggio1, true, true);
                playNotification(); // Riproduci la notifica
            }
        }, 500); // Ritardo di 0,5 secondi
    } else {
        // Se ci sono già messaggi, visualizzali senza aggiungerne di nuovi
        displayMessages('QG Kairos');
    }

    // Visualizza i messaggi della chat corrente
    displayMessages(currentSender || 'QG Kairos');

    // Imposta l'invio dei messaggi
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message && currentSender) {
            addMessage(currentSender, message, false, true);

            if (!responseSent[currentSender]) {
                setTimeout(() => {
                    const response = getRandomExcuse(currentSender);
                    addMessage(currentSender, response, true, true);
                    responseSent[currentSender] = true;
                    saveStateToLocalStorage(); // Salva lo stato aggiornato
                }, 1000);
            }
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    // Imposta i messaggi temporizzati se non sono già stati inviati
    if (!messageSent['bartoli']) {
        setTimeout(() => {
            if (!messageSent['bartoli']) {
                console.log('Invio messaggio temporizzato da bartoli');
                addMessage('bartoli', chatData['bartoli'].messaggio1, true, false);
                messageSent['bartoli'] = true;
                saveStateToLocalStorage();
            }
        }, 30000);
    }

    if (!messageSent['delmonaco']) {
        setTimeout(() => {
            if (!messageSent['delmonaco']) {
                console.log('Invio messaggio temporizzato da delmonaco');
                addMessage('delmonaco', chatData['delmonaco'].messaggio1, true, false);
                messageSent['delmonaco'] = true;
                saveStateToLocalStorage();
            }
        }, 90000);
    }

    if (!messageSent['studioDentista']) {
        setTimeout(() => {
            if (!messageSent['studioDentista']) {
                console.log('Invio messaggio temporizzato da studioDentista');
                addMessage('studioDentista', "Buongiorno, sono Sonia dello studio dentistico. Ti ricordo l'appuntamento per domani alle 16:30. Mi raccomando, evita di fumare e bere caffè dall'ora di pranzo e lavati bene i denti!", true, false);
                messageSent['studioDentista'] = true;
                saveStateToLocalStorage();
            }
        }, 600000);
    }

    // Aggiungi la classe 'active' all'app per nascondere il pulsante
    document.querySelector('.chat-app').classList.add('active');

    // Aggiungi questa riga alla fine della funzione initApp
    checkAudioStatus();
}

// Funzione per avviare l'app dopo l'interazione dell'utente
function startApp() {
    const audio = document.getElementById('notification-sound');
    if (audio) {
        checkAudioStatus();
        audio.play().then(() => {
            console.log('Audio di notifica riprodotto all\'avvio della chat');
        }).catch(error => {
            console.error('Errore nella riproduzione dell\'audio di notifica:', error);
        });
    }
    
    loadChatData().then(() => {
        initApp();
        document.getElementById('start-chat-button').style.display = 'none';
    });
}

document.getElementById('start-chat-button').addEventListener('click', startApp);

// Aggiungi questa funzione per verificare lo stato dell'audio
function checkAudioStatus() {
    const audio = document.getElementById('notification-sound');
    if (audio) {
        console.log('Stato dell\'audio:', {
            src: audio.src,
            readyState: audio.readyState,
            paused: audio.paused,
            volume: audio.volume,
            muted: audio.muted,
            duration: audio.duration,
            networkState: audio.networkState,
            error: audio.error
        });
        console.log('Audio mutato a livello di pagina:', audio.muted);
        console.log('Volume audio:', audio.volume);
    } else {
        console.error('Elemento audio non trovato');
    }
}

function checkAudioLoaded() {
    const audio = document.getElementById('notification-sound');
    if (audio) {
        audio.addEventListener('loadeddata', () => {
            console.log('Audio caricato con successo');
        });
        audio.addEventListener('error', (e) => {
            console.error('Errore nel caricamento dell\'audio:', e);
        });
    } else {
        console.error('Elemento audio non trovato in checkAudioLoaded');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-chat-button');
    startButton.addEventListener('click', () => {
        const audio = document.getElementById('notification-sound');
        if (audio) {
            audio.play().then(() => {
                console.log('Audio di notifica riprodotto al click del pulsante');
                startApp();
            }).catch(error => {
                console.error('Errore nella riproduzione dell\'audio di notifica:', error);
                startApp();
            });
        } else {
            console.error('Elemento audio non trovato');
            startApp();
        }
    });
});
