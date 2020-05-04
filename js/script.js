//COMPTE LES ERREURS ET CHANGE LA COULEUR DU COMPTEUR EN FONCTION
function erreur () {

    var compteur = document.getElementById("compteur");
    var compteurReponse = document.getElementById("compteurReponse");

    compteur.innerHTML = "Nombre d'erreurs (" + nb_compteur + ")";
    compteurReponse.innerHTML = "Nombre d'erreurs (" + nb_compteur + ")";


  if (nb_compteur >= 5 && nb_compteur < 10) {
    compteur.style.borderColor = "#ff9800";
    compteur.style.color = "orange";
    compteurReponse.style.borderColor = "#ff9800";
    compteurReponse.style.color = "orange";
  }
  else if (nb_compteur >= 10) {
    compteur.style.borderColor = "#f44336";
    compteur.style.color = "red";
    compteurReponse.style.borderColor = "#f44336";
    compteurReponse.style.color = "red";
  }
  else {
    color = "red";
  }
}

//TRIE TOUTES LES CARTES ET LES CACHES QUAND --> "active:false"
function cacher () {
    for (var i = 0; i < cartes.length; i++) {
        var carte = cartes[i];
        
        if (carte.active) {
            document.getElementById(carte.id).style.opacity = "1";
        }
        else {
            document.getElementById(carte.id).style.opacity = "0.2";
        }
    }
}

//FONCTIONS QUI CODENT LA COULEUR DES INDICES
function notification_error(indice){
  indice.style.display = "inline-block";
  indice.style.backgroundColor = "#ffdddd";
  indice.style.borderLeft = "6px solid #f44336";
  indice.style.textDecoration = "line-through";
}
function notification_success(indice){
  indice.style.display = "inline-block";
  indice.style.backgroundColor = "#ddffdd";
  indice.style.borderLeft = "6px solid #4CAF50";
  indice.style.textDecoration = "none";
}
function notificationInformation(indice){
  indice.style.display = "inline-block";
  indice.style.backgroundColor = "#e7f3fe";
  indice.style.borderLeft = "6px solid #2196F3";
  indice.style.textDecoration = "none";
}

//FONCTIONS QUI CODENT LA COULEUR DES RADIOS
function notificationRadioSuccess(radio){
  radio.style.color = "#4CAF50";
  radio.style.backgroundColor = "#ddffdd";
  radio.style.border = "2px solid #4CAF50";
}

function notificationRadioEchec(radio){
  radio.style.color = "#f44336";
  radio.style.backgroundColor = "#ffdddd";
  radio.style.border = "2px solid #f44336";
}

 //VERIFIE SI LA CARTE CLIQUEE CORRESPOND AU PERSONNAGE A TROUVER
 function testerCarte(clickedId){
  var reponseModal = document.getElementById("reponse");
  var reponseImage = document.getElementById("imgReponse");
  var urlImage = "css/img/persoReponse/" + reponseId + ".png";

  changeBackground(reponseImage, urlImage);
  function changeBackground(bElement, bUrl) {
    return bElement.style.backgroundImage = "url("+bUrl+")";
  }

  //Identifie l'objet correspondant à l'id cliquée
  function perso(personnage) {
  return personnage.id === clickedId;
  }

  var echec = document.getElementById("echec_" + nb_clic);
  var clicked = cartes.find(perso);

  //Si le personnage cliqué correspond au personnage à trouver:
  if (clickedId == reponseId){
    document.getElementById("messageReponse").innerHTML = "Le Seigneur des Pirates est " + reponseId;
    reponseModal.style.display = "block";
  }
  else{
    echec.innerHTML = "Ce n'est pas " + clickedId;
    echec.style.display = "inline-block";
    clicked.active = false;
    cacher();
    nb_clic++;
    nb_compteur++;
  }
  erreur();
}

//RECOMMENCER LA PARTIE
function reload(){
  document.location.reload(true);
}