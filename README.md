# Ohmyfood

Application Next.js pour consulter quatre restaurants et leurs menus.
Exercice pédagogique du parcours OpenClassrooms.

## Installation et lancement

Prérequis : Node.js 20.9 ou supérieur.

```sh
npm install
npm run dev
```

Ouvrir <http://localhost:3000>.

Pour lancer la version de production :

```sh
npm run build
npm run start
```

Un seul serveur peut utiliser le port 3000 à la fois.

## Fonctionnement

- Les cartes de l'accueil affichent les restaurants depuis `data/restaurants.json`.
- Chaque carte possède un like indépendant, géré avec `useState`.
- Les liens `Link` ouvrent les menus à partir du slug du restaurant.
- Les plats utilisent le composant `MenuItem` et peuvent être sélectionnés ou désélectionnés.
- Une adresse inconnue affiche une page 404 avec un lien vers l'accueil.

Un **slug** est l'identifiant lisible dans une URL, par exemple
`la-palette-du-gout`. La page `app/restaurant/[slug]/page.jsx` lit
`await params`, cherche le restaurant dans les données et affiche son menu.

Les quatre pages sont préparées à la compilation avec `generateStaticParams`.
Les autres slugs renvoient une 404 avec `dynamicParams = false` ;
la page contient également une condition `notFound()`.

## Structure

- `app/page.jsx` : page d'accueil et liste des restaurants.
- `app/layout.jsx` : document HTML commun et chargement des styles.
- `app/globals.css` : styles globaux, responsive et animations.
- `app/restaurant/layout.jsx` : police Shrikhand pour les menus.
- `app/restaurant/[slug]/page.jsx` : page de menu par slug.
- `app/not-found.jsx` : page 404.
- `Components/RestaurantCard.jsx` : carte de restaurant et like.
- `Components/MenuItem.jsx` : plat et sélection.
- `data/restaurants.json` : quatre restaurants et 37 plats.
- `public/images/` : logos et photos.

## Routes

- `/`
- `/restaurant/la-palette-du-gout`
- `/restaurant/la-note-enchantee`
- `/restaurant/a-la-francaise`
- `/restaurant/le-delices-des-sens`

## Vérifications

`npm run build` vérifie la compilation. Pour un contrôle manuel :

1. Ouvrir chaque restaurant depuis sa carte, puis revenir à l'accueil.
2. Activer et désactiver les likes sur plusieurs cartes.
3. Sélectionner et désélectionner les plats des différents menus.
4. Ouvrir `/restaurant/inconnu` et vérifier la page 404.
5. Vérifier l'affichage sur mobile et ordinateur, notamment autour de 765 px.

## Ressources

Maquettes et ressources pédagogiques : OpenClassrooms.
Bibliothèques : Next.js, React et React DOM.
Icônes : Font Awesome 6.2.1. Police des titres des menus : Shrikhand.

- [Exercice OpenClassrooms](https://github.com/OpenClassrooms-Student-Center/P4-JS-exercice-ohmyfood/tree/Exercice-2-exemple)
- [Maquette Figma](https://www.figma.com/design/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood--mobile-et-desktop-)
- [Documentation Next.js](https://nextjs.org/docs)
