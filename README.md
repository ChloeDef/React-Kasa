# Formation Développeur Intégrateur web - Projet 7 : Kasa

Ce projet fait partie de la formation Intégrateur Web chez OpenClassrooms. Le défi consiste à refondre le site de Kasa, une entreprise spécialisée dans la location d'appartements entre particuliers depuis près de 10 ans.

## Contexte

Kasa souhaite moderniser son site web en développant une nouvelle application en React, selon les maquettes fournies sur Figma. L'objectif est de créer des composants réutilisables pour les éléments interactifs tels que les onglets et le carrousel de photos.

## Objectifs du projet

- Développer l'application complète en utilisant React.
- Créer des composants réutilisables pour des éléments comme les onglets et le carrousel de photos.
- Suivre les maquettes Figma pour une fidélité visuelle et fonctionnelle.

## Back-end / Données

Le développement front-end se base sur un fichier JSON fourni, contenant les données nécessaires pour construire l'application.

## Cahier des Charges

### Spécifications Fonctionnelles

- **Galerie de photos (Composant Gallery) :**
  - Lorsque l'utilisateur se trouve à la première image et clique sur "Image précédente", la galerie affiche la dernière image.
  - Inversement, si l'utilisateur est sur la dernière image et clique sur "Image suivante", la première image s'affiche.
  - Si la galerie contient une seule image, les boutons "Suivant" et "Précédent" ne s'affichent pas.
  - La galerie doit conserver une hauteur fixe, comme indiqué dans les maquettes Figma, et les images doivent être centrées et coupées en conséquence.

- **Collapse :**
  - Par défaut, les sections Collapse sont fermées à l'ouverture de la page.
  - Un clic sur une section fermée permet de l'ouvrir, et vice versa.

### Spécifications Techniques

- Découper l'application en composants modulaires et réutilisables.
- Organiser les fichiers de manière logique et cohérente.
- Gérer les événements utilisateur efficacement.
- Utiliser les listes en les itérant correctement.
- Utiliser les props pour la communication entre composants.
- Implémenter une page 404 pour les routes inexistantes ou les valeurs incorrectes dans les URL.

## Technologies Utilisées

- **Langages :** HTML5, CSS3, SASS, JavaScript, React.