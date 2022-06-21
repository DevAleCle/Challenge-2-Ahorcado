const cellsContainer = document.querySelector("#palabra-secreta");
const wrongLettersContainer = document.getElementById("letras-erroneas");

const winLoseText = document.getElementById("win-lose-advice");
const horcaCuerpo1 = document.getElementById("horca-cuerpo1");
const horcaCuerpo2 = document.getElementById("horca-cuerpo2");
const horcaCuerpo3 = document.getElementById("horca-cuerpo3");
const horcaCuerpo4 = document.getElementById("horca-cuerpo4");
const horcaCuerpo5 = document.getElementById("horca-cuerpo5");
const horcaCuerpo6 = document.getElementById("horca-cuerpo6");

let lives = 6;
let usedWrongLetters = [];

window.addEventListener("keyup", (event) => {
    if (isGameActive) {
        if (checkKeyPressedValidity(event.key)) {
            compareKeyPressedWithSecretWordChars(currentWord, event.key);
        }
    }
});

function createCellsContainer(word) {
    for (let i = 0; i < word.length; i++) {
        let cell = document.createElement("p");
        cell.classList.add("celda-letra");
        cellsContainer.appendChild(cell);
    }
}

function addWrongLetterToContainer(letter) {
    let wrongLetter = document.createElement("p");
    wrongLetter.classList.add("letra-erronea");
    wrongLetter.textContent = letter;
    wrongLettersContainer.appendChild(wrongLetter);
}

function showCurrentWord(word) {
    for (let i = 0; i < word.length; i++) {
        if (cellsContainer.childNodes[i].textContent === "") {
            cellsContainer.childNodes[i].textContent = word[i];
        }
    }
}

function checkKeyPressedValidity(key) {
    let availableKeys = /[a-z]/;
    return key.match(availableKeys);
}

function compareKeyPressedWithSecretWordChars(word, key) {
    let letterUsed = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
            cellsContainer.childNodes[i].textContent = key;
            userWon(word);
        }
    }

    for (let i = 0; i < usedWrongLetters.length; i++) {
        if (usedWrongLetters[i] === key) {
            letterUsed = true;
        }
    }

    if (!word.includes(key) && !letterUsed) {
        userLose();
        addWrongLetterToContainer(key);
        usedWrongLetters.push(key);
    }
}

function userWon(word) {
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (cellsContainer.childNodes[i].textContent === word[i]) {
            counter++;
        }
    }

    if (counter === word.length) {
        winLoseText.textContent = "Has Ganado!";
        winLoseText.classList.add("win-advice");
        isGameActive = false;
        desist();
    }
}

function userLose() {
    lives--;
    hangedState();

    if (lives <= 0) {
        winLoseText.textContent = "Has Perdido!";
        winLoseText.classList.add("lose-advice");
        isGameActive = false;
        showCurrentWord(currentWord);
        desist();
    }
}

function hangedState() {
    if (lives <= 5) {
        horcaCuerpo1.classList.remove("invisible");
    }
    if (lives <= 4) {
        horcaCuerpo2.classList.remove("invisible");
    }
    if (lives <= 3) {
        horcaCuerpo3.classList.remove("invisible");
    }
    if (lives <= 2) {
        horcaCuerpo4.classList.remove("invisible");
    }
    if (lives <= 1) {
        horcaCuerpo5.classList.remove("invisible");
    }
    if (lives <= 0) {
        horcaCuerpo6.classList.remove("invisible");
    }
}

function resetLives() {
    lives = 6;
}

function clearGameScreen() {
    cellsContainer.innerHTML = "";
    wrongLettersContainer.innerHTML = "";
    winLoseText.textContent = "";

    usedWrongLetters = [];

    if (!horcaCuerpo1.classList.contains("invisible")) {
        horcaCuerpo1.classList.add("invisible");
    }
    if (!horcaCuerpo2.classList.contains("invisible")) {
        horcaCuerpo2.classList.add("invisible");
    }
    if (!horcaCuerpo3.classList.contains("invisible")) {
        horcaCuerpo3.classList.add("invisible");
    }
    if (!horcaCuerpo4.classList.contains("invisible")) {
        horcaCuerpo4.classList.add("invisible");
    }
    if (!horcaCuerpo5.classList.contains("invisible")) {
        horcaCuerpo5.classList.add("invisible");
    }
    if (!horcaCuerpo6.classList.contains("invisible")) {
        horcaCuerpo6.classList.add("invisible");
    }

    if (winLoseText.classList.contains("lose-advice")) {
        winLoseText.classList.remove("lose-advice");
    }

    if (winLoseText.classList.contains("win-advice")) {
        winLoseText.classList.remove("win-advice");
    }
}
