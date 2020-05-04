//<!-- Script pour le modal-->
var modalTutoriel = document.getElementById('tutoriel');
var modalQuestions = document.getElementById('questions');

//Fonction pour fermer les modals quand on clique en dehors
window.onclick = function(event) {
    if (event.target == modalQuestions || event.target == modalTutoriel) {
        modalQuestions.style.display = "none";
        modalTutoriel.style.display = "none";
    }
}

//GESTION MODALE
function afficherModalTutoriel() {
    modalTutoriel.style.display = "block";
}

function afficherModalQuestions() {
    modalQuestions.style.display = "block";
}

//Fonction pour fermer les modals quand on clique sur la croix
function cacherModal() {
    modalQuestions.style.display = "none";
    modalTutoriel.style.display = "none";
}