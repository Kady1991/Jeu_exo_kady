// Générez un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Sélectionnez les éléments du DOM
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");

// Initialisez le nombre d'essais et un indicateur de victoire
let numberOfTries = 0;
let hasWon = false;

// Ajoutez un gestionnaire d'événement au bouton de soumission
submitGuess.addEventListener("click", function() {
    if (hasWon) {
        // Si le joueur a déjà gagné, ignorez les devinettes supplémentaires
        return;
    }

    // Récupérez la devinette du joueur
    const guess = parseInt(guessInput.value);

    // Incrémente le nombre d'essais
    numberOfTries++;

    // Vérifiez si la devinette est correcte
    if (guess === randomNumber) {
        message.textContent = `Bravo ! Vous avez deviné le nombre en ${numberOfTries} essais.`;
        message.style.color = "green";
        hasWon = true;
    } else if (guess < randomNumber) {
        message.textContent = "Trop bas. Essayez à nouveau.";
        message.style.color = "blue";
    } else {
        message.textContent = "Trop haut. Essayez à nouveau.";
        message.style.color = "red";
    }

    // Effacez la zone de devinette
    guessInput.value = "";
});

