let selectedElements = [];
const maxElements = 3;

function addToContainer(type) {
    const selectElement = document.getElementById(type + 'Select');
    const selectedValue = selectElement.value;

    if (selectedValue && selectedElements.length < maxElements) {
        selectedElements.push(selectedValue);

        const listItem = document.createElement('li');
        listItem.textContent = selectedValue;

        // Aggiungi il pulsante di rimozione accanto alla sostanza
        const removeButton = document.createElement('button');
        removeButton.textContent = ' - ';
        removeButton.classList.add('remove-button');
        removeButton.onclick = function () {
            removeFromContainer(selectedValue, listItem);
        };

        listItem.appendChild(removeButton);
        document.getElementById('mixContainer').appendChild(listItem);

        toggleMixButton();
        console.log('Sostanza aggiunta:', selectedValue);  // Log per verificare
    } else if (selectedElements.length >= maxElements) {
        alert("Puoi aggiungere solo 3 sostanze!");
    }
    selectElement.value = '';  // Resetta la selezione
}

function removeFromContainer(value, listItem) {
    const index = selectedElements.indexOf(value);
    if (index > -1) {
        selectedElements.splice(index, 1);
    }
    listItem.remove();
    toggleMixButton();
    console.log('Sostanza rimossa:', value);  // Log per verificare
}

function toggleMixButton() {
    const mixButton = document.getElementById('mixButton');
    if (selectedElements.length >= 2) {
        mixButton.style.display = 'block';
    } else {
        mixButton.style.display = 'none';
    }
    console.log('Numero di sostanze selezionate:', selectedElements.length);  // Log per verificare
}

function startMixing() {
    if (selectedElements.length >= 2) {
        document.getElementById('mixButton').disabled = true;

        // Aggiungi l'animazione di miscelazione
        const mixContainer = document.getElementById('mixContainer');
        const mixAnimation = document.createElement('div');
        mixAnimation.classList.add('mix-animation');
        mixContainer.appendChild(mixAnimation);

        setTimeout(function() {
            mixAnimation.remove();  // Rimuove l'animazione alla fine
            generateResult();
            document.getElementById('mixButton').disabled = false;
        }, 15000);
    } else {
        alert("Seleziona almeno due sostanze!");
    }
}

function generateResult() {
    document.getElementById('result').classList.remove('hidden');
    const permanganate = selectedElements.includes('Perganganato di Potassio');
    const glycerin = selectedElements.includes('Glicerina');

    let formula = "";
    if (permanganate && glycerin) {
        formula = "KMnO4 + C3H8O3";
        document.getElementById('stateResult').textContent = 'Liquido';
        document.getElementById('flammableResult').textContent = 'No';
        setToxicity(5);
        document.getElementById('corrosiveResult').textContent = 'No';
        document.getElementById('explosiveResult').textContent = 'No';
        document.getElementById('harmfulResult').textContent = 'No';
    } else {
        formula = "Combinazione generica";
        document.getElementById('stateResult').textContent = 'Solido';
        document.getElementById('flammableResult').textContent = 'Sì';
        setToxicity(3);
        document.getElementById('corrosiveResult').textContent = 'No';
        document.getElementById('explosiveResult').textContent = 'Sì';
        document.getElementById('harmfulResult').textContent = 'Sì';
    }

    document.getElementById('formulaResult').textContent = formula;
}

function setToxicity(level) {
    const toxicityBar = document.querySelector('.toxicity-bar');
    toxicityBar.innerHTML = '';  // Svuota il contenuto precedente
    const levels = ['sicuro', 'lievemente dannoso', 'pericoloso', 'tossico', 'fatale'];
    const colors = ['green', 'yellow', 'orange', 'red', 'purple'];

    for (let i = 1; i <= 5; i++) {
        const block = document.createElement('span');
        block.className = 'toxicity-block';
        block.textContent = i;
        block.style.backgroundColor = colors[i - 1];
        toxicityBar.appendChild(block);

        if (i === level) {
            const description = document.createElement('span');
            description.className = 'toxicity-description';
            description.textContent = ` - ${levels[i - 1]}`;
            toxicityBar.appendChild(description);
        }
    }
}
