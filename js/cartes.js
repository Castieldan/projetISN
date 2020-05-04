cartes = [
  {id:"luffy", cheveux:"noir", cicatrice:true, poils:false, chapeau:true, tatouagesMaquillage:false, homme:true, earringPiercing:false, active: true},
  {id:"zoro", cheveux:"vert", cicatrice:true, poils:false, chapeau:false, tatouagesMaquillage:false, homme:true, earringPiercing:true, active: true},
  {id:"nami", cheveux:"roux", cicatrice:false, poils:false, chapeau:false, tatouagesMaquillage:false, homme:false, earringPiercing:true, active: true},
  {id:"usopp", cheveux:"noir", cicatrice:false, poils:true, chapeau:true, tatouagesMaquillage:false, homme:true, earringPiercing:false, active: true},
  {id:"sanji", cheveux:"blond", cicatrice:false, poils:true, chapeau:false, tatouagesMaquillage:false, homme:true, earringPiercing:false, active: true},
  {id:"hancock", cheveux:"noir", cicatrice:false, poils:false, chapeau:false, tatouagesMaquillage:false, homme:false, earringPiercing:true, active: true},
  {id:"franky", cheveux:"bleu", cicatrice:true, poils:false, chapeau:false, tatouagesMaquillage:false, homme:true, earringPiercing:false, active: true},
  {id:"reiju", cheveux:"rose", cicatrice:false, poils:false, chapeau:false, tatouagesMaquillage:false, homme:false, earringPiercing:false, active: true},
  {id:"barto", cheveux:"vert", cicatrice:false, poils:false, chapeau:false, tatouagesMaquillage:true, homme:true, earringPiercing:true, active: true},
  {id:"shanks", cheveux:"roux", cicatrice:true, poils:true, chapeau:false, tatouagesMaquillage:false, homme:true, earringPiercing:false, active: true},
  {id:"bigMom", cheveux:"rose", cicatrice:false, poils:false, chapeau:true, tatouagesMaquillage:true, homme:false, earringPiercing:false, active: true},
  {id:"bonney", cheveux:"rose", cicatrice:false, poils:false, chapeau:true, tatouagesMaquillage:true, homme:false, earringPiercing:true, active: true},
  {id:"baggy", cheveux:"bleu", cicatrice:false, poils:true, chapeau:true, tatouagesMaquillage:true, homme:true, earringPiercing:false, active: true},
  {id:"sabo", cheveux:"blond", cicatrice:true, poils:false, chapeau:false, tatouagesMaquillage:false, homme:true, earringPiercing:false, active: true},
  {id:"ace", cheveux:"noir", cicatrice:false, poils:false, chapeau:true, tatouagesMaquillage:false, homme:true, earringPiercing:false, active: true},
]

//VARIABLES
function choixPersonnage(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var personnage = choixPersonnage(0, 14);
  var nb_clic = 0;
  var nb_compteur = 0;
  var reponse = cartes[personnage];
  var reponseId = cartes[personnage].id;
  var choixCheveux = "";

//QUAND L'UTILISATEUR CHOISIT UNE COULEUR DE CHEVEUX, CE BOUT DE CODE DETECTE CE CHOIX ET LE RANGE SOUS LA VARIABLE "choixCheveux".
document.getElementById("couleurCheveux").addEventListener("click",
  function (e) {
    var choixCheveux = e.target.value;
    hair(choixCheveux);
  }
);

//CHEVEUX
function hair (choixCheveux) {
  var cheveuxBlond = cartes.filter(e => e["cheveux"] === "blond");
  var cheveuxRoux = cartes.filter(e => e["cheveux"] === "roux");
  var cheveuxRose = cartes.filter(e => e["cheveux"] === "rose");
  var cheveuxVert = cartes.filter(e => e["cheveux"] === "vert");
  var cheveuxBleu = cartes.filter(e => e["cheveux"] === "bleu");
  var cheveuxNoir = cartes.filter(e => e["cheveux"] === "noir");
  var indiceCheveux = document.getElementById("indiceCheveux");
  var radio = document.getElementById("formCheveux")

  //On récupère dans deux variables distinctes.
    //- la couleur des cheveux du personnage recherché
    //- tous les personnages qui n'ont pas la même couleur de cheveux
  var personnageCheveux = cartes[personnage].cheveux;
  var autres = cartes.filter(e => e["cheveux"] !== personnageCheveux);

  if (choixCheveux === personnageCheveux){
    notificationInformation(indiceCheveux);
    notificationRadioSuccess(radio);
    //On désactive toutes les cartes fausses
   for (var i = 0; i < autres.length; i++) {
   var autre = autres[i];
   autre.active = false;
   }
    //On affiche l'indice donnant la couleur des cheveux du personnage que l'on cherche
    document.getElementById("indiceCheveux").style.display = "block";
    document.getElementById("indiceCheveux").innerHTML = "Votre personnage a les cheveux " + cartes[personnage].cheveux;
    cacher();
    cacherModal();
  }
  else if (choixCheveux) {
    document.getElementById("indiceCheveux_" + choixCheveux).style.display = "block";
    notificationRadioEchec(radio);
    nb_compteur++;
  }
  erreur();
}

//CICATRICE
function scar () {
    var cicatrices = cartes.filter(e => e["cicatrice"] === true);
    var sansCicatrices = cartes.filter(e => e["cicatrice"] === false);
    //True si oui et false si non
    var cicatriceChecked = document.querySelector('[name="cicatrice"]').checked;
    var cicatriceIndice = document.getElementById("indiceCicatrice");
    var radio = document.getElementById("radioCicatrice");

    cicatriceIndice.style.display = "block";

    if (reponse.cicatrice) {
        for (var i = 0; i < sansCicatrices.length; i++) {
            var sansCicatrice = sansCicatrices[i];
            sansCicatrice.active = false;
        }
        if (cicatriceChecked) {
          notification_success(cicatriceIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
        else{
          notification_success(cicatriceIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
    }
    else {
        for (var i = 0; i < cicatrices.length; i++) {
            var cicatrice = cicatrices[i];
            cicatrice.active = false;
        }
        if (cicatriceChecked) {
          notification_error(cicatriceIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
        else {
          notification_error(cicatriceIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
    }
  erreur();
}

//POILS
function hairbreadth () {
    var poil = cartes.filter(e => e["poils"] === true);
    var sansPoil = cartes.filter(e => e["poils"] === false);
    var poilChecked = document.querySelector('[name="poil"]').checked;
    var poilIndice = document.getElementById("indicePoil");
    var radio = document.getElementById("radioPoil");

    document.getElementById("indicePoil").style.display = "block";

    if (reponse.poil) {
        for (var i = 0; i < sansPoil.length; i++) {
            var sansPoils = sansPoil[i];
            sansPoils.active = false;
        }
        if (poilChecked) {
          notification_success(poilIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
        else{
          notification_sucess(poilIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
    }
    else {
        for (var i = 0; i < poil.length; i++) {
            var poils = poil[i];
            poils.active = false;
        }
        if (poilChecked) {
          notification_error(poilIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
        else {
          notification_error(poilIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
    }
  erreur();
}

//CHAPEAU
function hat () {
    var chapeau = cartes.filter(e => e["chapeau"] === true);
    var sansChapeau = cartes.filter(e => e["chapeau"] === false);
    var chapeauChecked = document.querySelector('[name="chapeau"]').checked;
    var chapeauIndice = document.getElementById("indiceChapeau");
    var radio = document.getElementById("radioChapeau");

    document.getElementById("indiceChapeau").style.display = "block";

    if (reponse.chapeau) {
        for (var i = 0; i < sansChapeau.length; i++) {
            var sansChapeaux = sansChapeau[i];
            sansChapeaux.active = false;
        }
        if (chapeauChecked) {
          notification_success(chapeauIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
        else{
          notification_success(chapeauIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
    }
    else {
        for (var i = 0; i < chapeau.length; i++) {
            var chapeaux = chapeau[i];
            chapeaux.active = false;
        }
        if (chapeauChecked) {
          notification_error(chapeauIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
        else {
          notification_error(chapeauIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
    }
  erreur();
}

//TATOUAGES OU MAQUILLAGE
function tatouagesMaquillages () {
    var tatouagesMaquillage = cartes.filter(e => e["tatouagesMaquillage"] === true);
    var sansTatouagesMaquillage = cartes.filter(e => e["tatouagesMaquillage"] === false);
    var tatouagesMaquillageChecked = document.querySelector('[name="tatouagesMaquillage"]').checked;
    var tatouagesMaquillageIndice = document.getElementById("indiceTatouagesMaquillage");
    var radio = document.getElementById("radioTatouagesMaquillages");

    document.getElementById("indiceTatouagesMaquillage").style.display = "block";

    if (reponse.tatouagesMaquillage) {
        for (var i = 0; i < sansTatouagesMaquillage.length; i++) {
            var sansTatouagesMaquillages = sansTatouagesMaquillage[i];
            sansTatouagesMaquillages.active = false;
        }
        if (tatouagesMaquillageChecked) {
          notification_success(tatouagesMaquillageIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
        else{
          notification_success(tatouagesMaquillageIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
    }
    else {
        for (var i = 0; i < tatouagesMaquillage.length; i++) {
            var tatouagesMaquillages = tatouagesMaquillage[i];
            tatouagesMaquillages.active = false;
        }
        if (tatouagesMaquillageChecked) {
          notification_error(tatouagesMaquillageIndice);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
        else {
          notification_error(tatouagesMaquillageIndice);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
    }
  erreur();
}

//SEXE
function gender () {
    var homme = cartes.filter(e => e["homme"] === true);
    var femme = cartes.filter(e => e["homme"] === false);
    var sexeChecked = document.querySelector('[name="sexe"]').checked;
    var sexeIndice = document.getElementById("indiceSexe");
    var radio = document.getElementById("radioSexe");

    document.getElementById("indiceSexe").style.display = "block";

    if (reponse.homme) {
        for (var i = 0; i < femme.length; i++) {
            var femmes = femme[i];
            femmes.active = false;
        }
        if (sexeChecked) {
          notification_success(indiceSexe);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
        else{
          notification_success(indiceSexe);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
    }
    else {
        for (var i = 0; i < homme.length; i++) {
            var hommes = homme[i];
            hommes.active = false;
        }
        if (sexeChecked) {
          notification_error(indiceSexe);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
        else {
          notification_error(indiceSexe);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
    }
  erreur();
}

//BOUCLE D'OREILLE OU PIERCING
function earringPiercings () {
    var earringPiercing = cartes.filter(e => e["earringPiercing"] === true);
    var sansEarringPiercing = cartes.filter(e => e["earringPiercing"] === false);
    var earringPiercingChecked = document.querySelector('[name="earringPiercing"]').checked;
    var indiceEarringPiercing = document.getElementById("indiceEarringPiercing");
    var radio = document.getElementById("radioEarringPiercing");

    document.getElementById("indiceEarringPiercing").style.display = "block";

    if (reponse.earringPiercing) {
        for (var i = 0; i < sansEarringPiercing.length; i++) {
            var sansEarringPiercings = sansEarringPiercing[i];
            sansEarringPiercings.active = false;
        }
        if (earringPiercingChecked) {
          notification_success(indiceEarringPiercing);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
        else{
          notification_success(indiceEarringPiercing);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
    }
    else {
        for (var i = 0; i < earringPiercing.length; i++) {
            var earringPiercings = earringPiercing[i];
            earringPiercings.active = false;
        }
        if (earringPiercingChecked) {
          notification_error(indiceEarringPiercing);
          notificationRadioEchec(radio);
          nb_compteur++;
        }
        else {
          notification_error(indiceEarringPiercing);
          notificationRadioSuccess(radio);
          cacherModal();
          cacher();
        }
    }
  erreur();
}
