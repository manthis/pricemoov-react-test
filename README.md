# Test Frontend

L'objectif est de coder une interface d'affichage de prix
Le rendu se fait via un repo git, chaque étape correspondant à un commit dans la branche *master*. Les itérations de dev se font dans la branche *develop*

## Ressources

URL des données mocks:

* http://5ae97684531a58001414278c.mockapi.io/:endpoint

Endpoints (CRUD pour chacune des routes):

* /agencies
    * retourne la liste des agences
* /agencies/:id/categories
    * retourne la liste des catégories ratachées à l'agence
* /agencies/:id/categories/:id/prices
    * Pour une catégorie d'une agence, retourne l'ensemble des prix

## Caractéristique

Les principaux éléments de l'interface sont

* Un dropdown de recherche d'agence
* Un dropdown de recherche de categorie
* Un toggle: "Show all Y/N" qui permet de voir seulement les prix validés (par défaut), ou tous
* Une liste de prix:
    * Triée par ordre de startDate croissant (EPOCH)
    * Filtré suivant le critère "isValidated"
    * Chaque ligne affiche: prix: XX, prix suggéré: YY
