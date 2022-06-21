//Variables globales
var isGameActive = false;
var currentWord = "";

//Obtengo los distintos estados del juego
const screenMainMenu = document.getElementById("first-state");
const screenAddWord = document.getElementById("second-state");
const screenGame = document.getElementById("third-state");

//Obtengo los ditintos botones del juego
const btnStartGame = document.getElementById("btn-startGame");
const btnAddWord = document.getElementById("btn-addWord");
const btnSaveWord = document.getElementById("btn-saveWord");
const btnBackHome = document.getElementById("btn-backHome");
const btnNewGame = document.getElementById("btn-newGame");
const btnDesist = document.getElementById("btn-desist");

//Seteando el estado de juego al entrar en la pagina
document.addEventListener("DOMContentLoaded", () => {
    if (
        !screenGame.classList.contains("invisible") &&
        !screenGame.classList.contains("invisible")
    ) {
        screenGame.classList.add("invisible");
        screenAddWord.classList.add("invisible");
    }
});

btnStartGame.onclick = startGame;
btnAddWord.onclick = addWord;
btnSaveWord.onclick = saveWord;
btnBackHome.onclick = backHome;
btnNewGame.onclick = newGame;
btnDesist.onclick = desist;

function startGame() {
    if (
        !screenMainMenu.classList.contains("invisible") &&
        !screenMainMenu.classList.contains("invisible") &&
        !btnNewGame.classList.contains("invisible") &&
        screenGame.classList.contains("invisible")
    ) {
        screenMainMenu.classList.add("invisible");
        btnNewGame.classList.add("invisible");
        screenGame.classList.remove("invisible");
    }

    if (btnDesist.classList.contains("invisible")) {
        btnDesist.classList.remove("invisible");
    }

    resetLives();
    currentWord = getRandomWord();
    createCellsContainer(currentWord);
    isGameActive = true;
}

function addWord() {
    if (
        !screenMainMenu.classList.contains("invisible") &&
        screenAddWord.classList.contains("invisible")
    ) {
        screenMainMenu.classList.add("invisible");
        screenAddWord.classList.remove("invisible");
    }
}

function saveWord() {
    if (addNewWord()) {
        if (
            !screenAddWord.classList.contains("invisible") &&
            !btnNewGame.classList.contains("invisible") &&
            screenGame.classList.contains("invisible")
        ) {
            screenAddWord.classList.add("invisible");
            btnNewGame.classList.add("invisible");
            screenGame.classList.remove("invisible");
        }

        if (btnDesist.classList.contains("invisible")) {
            btnDesist.classList.remove("invisible");
        }

        resetLives();
        currentWord = getRandomWord();
        createCellsContainer(currentWord);
        isGameActive = true;
    } else {
        console.log("Palabra Invalida!");
    }
}

function backHome() {
    if (
        screenMainMenu.classList.contains("invisible") &&
        !screenAddWord.classList.contains("invisible")
    ) {
        screenAddWord.classList.add("invisible");
        screenMainMenu.classList.remove("invisible");
    }
}

function newGame() {
    if (
        screenMainMenu.classList.contains("invisible") &&
        !screenGame.classList.contains("invisible")
    ) {
        screenGame.classList.add("invisible");
        screenMainMenu.classList.remove("invisible");
    }
    clearGameScreen();
}

function desist() {
    if (
        btnNewGame.classList.contains("invisible") &&
        !btnDesist.classList.contains("invisible")
    ) {
        btnDesist.classList.add("invisible");
        btnNewGame.classList.remove("invisible");
    }

    if (isGameActive && lives > 0) {
        lives = 0;
        hangedState();
        showCurrentWord(currentWord);
        isGameActive = false;
    }
}
