# Architecture du Projet

## Stack Technique

Ce projet utilise les technologies suivantes :

- **Framework** : [Next.js](https://nextjs.org/) pour une application web réactive avec rendu côté serveur.
- **UI Library** : [shadcn](https://shadcn.dev/) pour une interface utilisateur modulable et stylée.
- **ORM** : [Prisma](https://www.prisma.io/) pour la gestion des données et l'interaction avec la base de données.
- **Base de données** : PostgreSQL pour un stockage relationnel et robuste.

## Principe de la Clean Architecture

L’architecture de ce projet repose sur les principes de la **Clean Architecture** pour :

- Découpler la logique métier du reste de l'implémentation technique.
- Faciliter le remplacement de composants techniques (comme la base de données) sans impacter le cœur du business.
- Permettre une évolutivité en ajoutant facilement de nouveaux providers ou services de données.

Grâce à cette structure, le projet est modulable et résilient aux changements technologiques tout en conservant une séparation claire des responsabilités.

## Organisation des Dossiers

Le projet est structuré en dossiers selon les rôles définis par la Clean Architecture, pour une meilleure lisibilité et une gestion simplifiée :

### Frontend

Le frontend de l'application est situé dans le dossier `app` de Next.js et propose d'une route principale :

- **/trainings** : Affiche la liste des formations avec des fonctionnalités de pagination et de filtrage.

### Dossier `src`

La logique métier et l'architecture Clean Architecture sont mises en place dans le dossier `src` et organisées comme suit :

- **application** : Contient les **repositories**, **services** et **use-cases**. Ce dossier regroupe les éléments permettant l'application des règles métier, en s'appuyant sur des interfaces et abstractions pour les différentes sources de données.
- **entities** : Regroupe les entités du domaine métier qui représentent les objets principaux manipulés dans l'application.
- **infrastructure** : Contient les implémentations concrètes des **repositories** et **services**. Ce dossier est responsable de l'interaction avec les technologies externes (base de données, API, etc.).
- **interface-adapter** : Accueille les **controllers**, qui servent de pont entre les cas d'utilisation de l'application et le frontend, assurant la transformation des données pour une meilleure intégration.

## Conclusion

Cette architecture modulaire permet de maintenir un code propre, testable et résilient aux changements techniques, garantissant ainsi une robustesse et une évolutivité du projet dans le temps. Le découplage entre les couches métier et technique facilite également l’intégration de nouvelles fonctionnalités ou de nouveaux services sans compromettre la logique métier existante.

## Lancement du Projet en Local

Pour lancer le projet en local, suivez les étapes suivantes :

1. **Démarrer la base de données** :

```bash
docker-compose up -d
```

2. **Installer les dépendences** :

```bash
   npm install
```

3. **Démarrer le projet en local** :

```bash
   npm run start
```

## Axes d'Amélioration pour une Version Production

Pour préparer ce projet à un déploiement en production, plusieurs améliorations peuvent être envisagées :

- **Mise en place d'une CI/CD** : Automatiser le déploiement via un pipeline CI/CD permettrait de garantir des déploiements rapides et sûrs. Ce pipeline pourrait inclure des étapes de tests automatisés, de linting, de build et de déploiement.

- **Modularisation du Projet** : En appliquant une approche **Domain-Driven Design (DDD)**, il serait possible de découper le projet en modules bien définis, chacun correspondant à un contexte spécifique du domaine métier. Cela améliorerait la maintenabilité du code et faciliterait l'ajout de nouvelles fonctionnalités sans affecter le reste de l'application.

- **Mise en œuvre de TDD (Test-Driven Development)** : Adopter une méthodologie de développement guidée par les tests (TDD) garantirait une meilleure couverture de code et réduirait les régressions lors des mises à jour. Les tests unitaires, d'intégration et end-to-end permettraient de renforcer la robustesse et la qualité du code, répondant aux exigences de production.

- **Ajout d'un système de monitoring comme Sentry** : Suivre les erreurs en production pour réagir rapidement aux bugs et améliorer l'expérience utilisateur en détectant et corrigeant les problèmes en temps réel.
