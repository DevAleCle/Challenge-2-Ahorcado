const addUserWord = document.getElementById("add-word");
const invalidWordContainer = document.getElementById("invalid-word-container");
const invalidWordAdvice = document.getElementById("invalid-word-advice");

let secretWords = ["alura", "oracle", "desafio", "horca", "codigo", "juego"];

function addNewWord() {
    let isWordValid = checkWordValidity(addUserWord.value.toLowerCase());

    if (isWordValid) {
        secretWords.push(addUserWord.value.toLowerCase());
        addUserWord.value = "";
        invalidWordAdvicer("", true);
        return true;
    } else {
        addUserWord.value = "";
        return false;
    }
}

function getRandomWord() {
    let currentWord = secretWords[randomNumber(secretWords.length)];
    console.log(currentWord);

    return currentWord;
}

function checkWordValidity(word) {
    let repeatedWord = false;
    let invalidWord = false;
    let invalidCharacters = /[0-9_\W]/;

    secretWords.forEach((el) => {
        if (!repeatedWord) {
            if (el === word) {
                repeatedWord = true;
                invalidWordAdvicer("Esa palabra ya fue ingresada!");
            }
        }
    });

    if (word === "") {
        invalidWord = true;
        invalidWordAdvicer("Debe ingresar una palabra!", false);
    } else {
        if (word.match(invalidCharacters)) {
            invalidWord = true;
            invalidWordAdvicer(
                "La palabra no debe contener caracteres especiales ni números!",
                false
            );
        }
        if (word.length > 8) {
            invalidWord = true;
            invalidWordAdvicer(
                "La palabra no debe superar los 8 caracteres!",
                false
            );
        }
    }

    if (!repeatedWord && !invalidWord) {
        return true;
    } else {
        return false;
    }
}

function invalidWordAdvicer(message, state) {
    if (!state) {
        if (invalidWordContainer.classList.contains("invisible")) {
            invalidWordContainer.classList.remove("invisible");
        }
    } else {
        if (!invalidWordContainer.classList.contains("invisible")) {
            invalidWordContainer.classList.add("invisible");
        }
    }

    invalidWordAdvice.textContent = message;
}

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}
