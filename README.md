# Sarah Cils

Site web de Sarah Cils, développé avec Next.js et déployé sur Vercel.

Le projet contient le site vitrine principal.
La partie boutique reste gérée séparément via Wix afin de conserver le backend e-commerce, les commandes, les paiements et la gestion produits.

## Déploiement

Le site est connecté à Vercel via GitHub.

À chaque modification poussée sur la branche principale, Vercel lance automatiquement un nouveau déploiement.

## Lancer le projet en local

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Puis ouvrir :

```bash
http://localhost:3000
```

## Technologies utilisées

* Next.js
* React
* TypeScript
* Vercel
* GitHub

## Structure

La page principale peut être modifiée dans :

```bash
app/page.tsx
```

Les styles globaux sont dans :

```bash
app/globals.css
```

## Boutique

L’onglet Boutique du site redirige vers la boutique Wix afin de conserver les fonctionnalités e-commerce existantes.
