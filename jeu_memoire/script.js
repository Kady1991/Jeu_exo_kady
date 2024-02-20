// Créez une liste de symboles pour les cartes (deux de chaque)
const symbols = ['🌟', '🍎', '🚀', '🐶', '🎈', '🌺', '🍕', '🚗'];

// Mélangez les symboles
const shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

// Sélectionnez le plateau de jeu et le bouton de redémarrage
const memoryBoard = document.getElementById("memoryBoard");
const restartButton = document.getElementById("restartButton");

let flippedCards = [];
let matchedPairs = 0;

// Créez les cartes et ajoutez-les au plateau de jeu
for (let i = 0; i < shuffledSymbols.length; i++) {
    const card = document.createElement("div");
    card.classList.add("memory-card");
    card.innerHTML = '<span class="hidden">' + shuffledSymbols[i] + '</span>';
    card.addEventListener("click", function() {
        flipCard(card);
    });
    memoryBoard.appendChild(card);
}

// Fonction pour retourner une carte
function flipCard(card) {
    if (flippedCards.length < 2) {
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

// Fonction pour vérifier si les deux cartes retournées correspondent
function checkMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.textContent;
    const symbol2 = card2.textContent;

    if (symbol1 === symbol2) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;

        if (matchedPairs === symbols.length) {
            alert("Félicitations, vous avez gagné !");
        }
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }

    flippedCards = [];
}

// Gestionnaire d'événement pour le bouton de redémarrage
restartButton.addEventListener("click", function() {
    memoryBoard.innerHTML = "";
    shuffledSymbols.sort(() => Math.random() - 0.5);
    matchedPairs = 0;

    for (let i = 0; i < shuffledSymbols.length; i++) {
        const card = document.createElement("div");
        card.classList.add("memory-card");
        card.innerHTML = '<span class="hidden">' + shuffledSymbols[i] + '</span>';
        card.addEventListener("click", function() {
            flipCard(card);
        });
        memoryBoard.appendChild(card);
    }
});
