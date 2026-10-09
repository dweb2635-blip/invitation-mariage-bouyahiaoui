# Invitation de mariage — Manel & Islem

Site statique responsive, sans installation ni dépendance JavaScript. HTML, CSS et JavaScript séparés. Décors SVG originaux inclus. Les polices Google Fonts sont gratuites ; le site utilise des polices de secours sans connexion.

## Tester

Ouvrir `index.html` dans un navigateur. Pour un aperçu HTTP : depuis ce dossier, lancer `npx --yes http-server . -p 8080`, puis ouvrir `http://localhost:8080`. Cette commande nécessite Node.js et une connexion pour télécharger le serveur la première fois.

Vérifier l’ouverture au clic et au clavier (Tab puis Entrée), le compte à rebours, la navigation, le lien Google Maps et le bouton de réouverture en bas de page. Tester une largeur mobile de 320 px et la préférence système « réduire les animations ». Sans JavaScript, l’invitation reste entièrement lisible et le lien Maps fonctionne.

## Modifier

Dans `script.js`, `WEDDING_CONFIG.date` est fixé provisoirement au **24 novembre 2026 à 18 h en Algérie**, avec un décalage UTC explicite `+01:00`. Modifier cette valeur dès confirmation de l’heure. Le fuseau indiqué est `Africa/Algiers`. Aucun horaire n’est affiché dans le programme.

`WEDDING_CONFIG.mapsUrl` utilise une recherche Google Maps sans coordonnées inventées. Lors d’une modification, actualiser aussi le lien de secours `href` de `#maps-link` dans `index.html`. Les textes se modifient dans `index.html`, les couleurs dans les variables de `styles.css`.

Les noms sont conservés selon la demande : « Manel & Islem Bouyahiaoui » sur l’invitation. Le nom du marié fourni dans le brief est Islem Moudoulia ; corriger les textes avant diffusion si vous souhaitez afficher les deux noms de famille.

## Publier sur GitHub

Créer un dépôt GitHub et téléverser le contenu de ce dossier à sa racine (pas le ZIP). Le dossier comprend `index.html`, `styles.css`, `script.js`, `assets/`, `netlify.toml` et ce README. Aucun secret ni fichier de compilation n’est requis.

Pour GitHub Pages : Settings → Pages → Deploy from a branch → branche `main` → dossier `/ (root)` → Save. Les chemins relatifs prennent en charge un site publié sous le nom du dépôt.

## Déployer sur Netlify

Importer le dépôt GitHub dans Netlify. Aucune commande de build : laisser ce champ vide. Répertoire de publication : `.` (configuré dans `netlify.toml`). Si le site est conservé dans un sous-dossier du dépôt, définir ce sous-dossier comme répertoire de base.

Autre méthode : décompresser le ZIP et glisser le dossier contenant `index.html` dans Netlify Drop. Attendre le déploiement, puis ouvrir l’URL fournie. Lier un dépôt permet de redéployer automatiquement à chaque modification.

## Accessibilité et comportement

Navigation clavier, focus visible, transfert du focus à l’ouverture, contenu principal désactivé pendant l’écran d’accueil, lien d’évitement, SVG décoratifs ignorés par les lecteurs d’écran, réduction des animations et compte à rebours sans annonces vocales chaque seconde. Après la date, le compteur reste à zéro et un message de célébration apparaît. L’heure provisoire sert uniquement au compteur.

## Nouvelle version photographique

La direction visuelle est dans `luxe.css`, chargée après `styles.css`. Deux visuels photoréalistes ont été créés avec l’outil intégré ImageGen puis optimisés en WebP : `assets/roses-silk.webp` (roses sur soie champagne) et `assets/table-candles.webp` (détail de décoration de table). Ce sont des images d’ambiance générées, pas des photographies de la salle réelle.

Prompts : photographie éditoriale de mariage, roses ivoire et rose poudré, soie champagne, lumière naturelle douce, centre dégagé, sans personnes ni texte ; photographie de détail de table de mariage, roses, bougies, porcelaine ivoire à bord doré, profondeur de champ douce, sans lieu identifiable ni texte.
