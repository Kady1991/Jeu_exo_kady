// Sélectionnez le bouton et le compteur en utilisant le DOM
const clicBtn = document.getElementById("clicBtn");
const compteur = document.getElementById("compteur");

// Initialisez un compteur de clics
let nombreDeClics = 0;

// Ajoutez un gestionnaire d'événement au bouton
clicBtn.addEventListener("click", function() {
    // Incrémente le compteur à chaque clic
    nombreDeClics++;
    
    // Mettez à jour le texte du compteur avec la nouvelle valeur
    compteur.textContent = nombreDeClics;
});

