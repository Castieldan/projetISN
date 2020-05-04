# Projet "Qui est-ce ?" version One Piece


## But du projet

En HTML, CSS et JS, nous désirons créer une version graphique du jeu de société "Qui est-ce ?". Nous allons revisiter ce jeu en faisant une version basée sur l'univers du célèbre manga One Piece.

## Membres du groupe

BIDAU-BONAVENTURA Tom
CASTIEL Dan
VIAL Florian

## Calendrier des séances


### 13/04/2018: 1ère séance

Recherche du projet.
Aujourd'hui, nous avons cherché une idée de projet pertinente. Après de multiples propositions refusées par notre professeur car jugées parfois trop difficiles ou trop simples à mettre en œuvre, nous avons finalement opté pour un projet de synthèse vocale. Nous voulons que notre synthèse vocale puisse indiquer l'heure et la date d'un pays choisi par l'utilisateur.


### 20/04/2018: 2ème séance

Choix du projet.
Apres réflexion et concertation avec notre professeur, nous avons décidé de délaisser notre idée de base au profit d'un projet plus ludique et ambitieux : une version graphique du jeu de société "Qui est-ce ?" revisité à notre façon. Pour ce faire, nous allons utiliser les personnages de l'univers du manga "One Piece" d'Eiichiro Oda. Nous avons répartis notre travail comme suit :
- Florian commence à créer les cartes des différents personnages;
- Tom s'occupe de choisir les personnages. Il devra ensuite réaliser un tableau regroupant leurs différentes caractéristiques afin de faciliter le développement du jeu;
- Dan a défini la mécanique du jeu et aidé Florian dans son travail.
Nous avons commencé à mettre en place la structure de base de notre projet.


### VACANCES SCOLAIRE :

Pendant les vacances scolaires, nous nous sommes retrouvés chez Dan le temps d'un après-midi afin de poursuivre notre projet. Nous avons grandement avancé:
- création des cartes, de leur contenu et de leur design grâce au logiciel Photoshop;
- mise en forme de la page et disposition des cartes;
- création du menu permettant d'interagir avec l'utilisateur.
Nous avons une interface graphique de base, il va maintenant falloir s'occuper de la partie javascript.


### 15/05/2018: 3ème séance

Aujourd'hui, nous avons montré l'avancée du projet à notre professeur. Celui-ci nous a donné plusieurs suggestions dont la création d'un fichier "carte.js" dans lequel seraient définis les attributs des personnages.
- Tom a inséré les caractéristiques des différents personnages dans cartes.js grâce aux données enregistrées précédemment.
- Dan et Florian s'occupent d'adapter la page aux différentes tailles d'écrans d'ordinateurs (mediaqueries).
- Dan s'est occupé de récupérer les entrées du menu dans le javascript.
Nous avons finalement défini précisément les règles du jeu ainsi que son fonctionnement afin de poursuivre notre travail durant la semaine.


### 18/05/2018
Aujourd'hui, nous avons créé une fonction servant à cacher les cartes ainsi qu'une fonction "cicatrice" qui, au besoin, appelle la fonction "cacher". Le problème est que la fonction "cacher" ne prend en compte que les cicatrices et non pas les autres attributs : elle n'est donc pas optimale.
Nous allons devoir revoir son fonctionnement.


### 19/05/2018 au 24/05/2018
Le projet a énormément évolué durant la semaine.
	- La fonction "cacher" a été revue et permet maintenant de cacher n'importe quelle carte;
	- Des fonctions permettant de traiter chaque attributs ont étés créées;
	- Nous avons créé une div de réponse s'agissant d'une première version: son design devra être revu;
	- Les cartes ne sont maintenant plus totalement "cachées"; En effet leur opacité est réduite à 0.2 et une animation permet d'observer ce changement;
	- Création d'un compteur, dans un premier temps pour compter le nombre de coups, puis revu afin de compter seulement le nombre d'erreurs;
	- Le compteur à maintenant un code couleur permettant de mieux appréhender visuellement le nombre d'erreurs;
	- Création d'un système d'indice ainsi que d'un code couleur correspondant;
	- Création du logo de notre jeu à partir du logiciel photoshop;
	- Les cartes ont étés revues: la photo du personnage est maintenant directement intégrée dans le background;
	- Création d'un système de modale, ce qui nous a permis par la suite de créer un modal "tutoriel", et un modal "Questions";
	- Les questions ont donc étés déplacées dans le modal "Questions";
	- La question permettant de choisir une couleur de cheveux a été revue et permet maintenant de cliquer sur une couleur afin de choisir;
	- L'interface graphique a été repensée tout au long de cette semaine et a subi de nombreuses mutations, l'objectif étant d'avoir un jeu à la fois esthétique mais aussi le plus intuitif possible. En effet, l'interface qui pouvait paraître déconstruite au départ a été largement épurée et simplifiée.
Par ailleurs, une dizaine de bugs ont été resolus et l'organisation du dossier a été revue: nous arrivons enfin à une version jouable et jolie de notre jeu.


### 25/05/2018: Rendu du projet
Cette séance a été l'occasion d'enrichir notre projet qui été déjà fonctionnel à notre arrivée grâce à une séance de trois heures.
	- Nous avons profité du système de modal pour créer un vrai système de victoire: un modal s'affiche avec le nom du personnage et une image de celui-ci. Les images ont été sélectionnées puis retravaillées sur photoshop par Tom, et Dan s'est occupé de mettre le code en place: l'enjeux principale étant d'arriver à changer le background-image en fonction du personnage choisit par l'ordinateur;
	- Florian a par ailleurs décelé un bug important dans notre jeu que nous avons réussi à résoudre à temps.

--> FINALEMENT, NOUS AVONS EU JUSQU'A DIMANCHE POUR RENDRE NOTRE PROJET


### Week-end du 25/05/2018:
Pas d'améliorations significatives si ce n'est beaucoup de détails et la résolution des quelques bugs restants.
Certaines parties du code ont étés commentées ou partiellement réécrites pour plus de clarté.
