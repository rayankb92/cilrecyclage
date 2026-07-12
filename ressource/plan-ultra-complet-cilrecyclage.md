# Plan Ultra Complet pour CIL Recyclage

## Objectif

Transformer ce clone de `Valmetaux` en un vrai site `CIL Recyclage` autonome, propre en SEO, differentié commercialement, et structure pour viser :

- le depot reel de CIL
- un bon maillage de villes interessantes autour du depot
- un vrai focus Val-d'Oise 95
- une couverture large Ile-de-France
- une page Ile-de-France
- une page forte par departement 77, 91, 92, 93, 94, 95
- des pages services solides

Le point important ici :

- on ne repart pas de zero techniquement
- on ne garde pas les memes textes
- on garde la logique locale autour du depot
- on ajoute une couche de rayonnement IDF au-dessus

---

## Decision strategique retenue

Tu m'as precise la direction a suivre :

- on garde le maillage de villes autour interessante
- on garde un bon maillage et un vrai poids sur le Val-d'Oise 95
- on ajoute une page Ile-de-France
- on ajoute des pages departements 77, 91, 92, 93, 94, 95 comme sur Valmetaux

Donc la strategie recommande pour CIL devient :

1. une home qui ancre tres fortement le depot de Villaines-sous-Bois
2. un socle de villes locales credibles autour du depot
3. une page Val-d'Oise 95 particulierement forte
4. une page Ile-de-France
5. des pages departements 77, 91, 92, 93, 94, 95
6. des pages prestations fortes qui irriguent tout le site

---

## Constat actuel sur le repo

Le repo est encore tres largement un clone de `Valmetaux`.

On retrouve encore :

- la marque `VALMETAUX`
- le domaine `valmetaux.fr`
- les logos `VALMETAUX`
- l'adresse d'Argenteuil
- le telephone et l'email de l'ancien site
- les textes de homepage
- les pages departements
- les pages villes
- les pages prestations
- les guides
- les donnees structurees

Conclusion :

- la base technique est exploitable
- la base editoriale ne doit pas etre gardee telle quelle

---

## Ce qu'on peut garder

Tu peux garder :

- la stack Next.js
- l'architecture du projet
- les composants de layout
- les templates de pages
- la logique `services / departments / guides`
- le sitemap et robots en tant que mecanique
- le JSON-LD en tant que structure technique
- le principe de maillage interne

En resume :

- on garde le squelette
- on remplace l'identite, les contenus et l'angle SEO

---

## Ce qu'il faut changer absolument

### Identite de marque

A remplacer partout :

- nom de marque
- domaine
- logo
- favicon
- telephone
- email
- adresse
- coordonnees GPS
- horaires

### Tracking et signaux techniques

A remplacer :

- Google verification
- GA4
- Google Ads
- event tracking
- metadata globales
- canonical base URL
- images de schema

### Contenu

A reecrire :

- homepage
- page Ile-de-France
- pages departements
- pages villes prioritaires
- pages prestations
- guides si tu les gardes

Les pages villes restent une vraie brique du projet. Elles ne sont pas a abandonner : elles servent au maillage local, a l'ancrage geographique du depot et au renforcement de la page 95.

---

## Peut-on garder les memes textes ?

Non.

Tu peux garder :

- les sujets
- la structure
- les intentions commerciales
- certains faits generiques vrais pour toutes les ferrailles

Mais tu ne dois pas garder :

- les memes paragraphes
- les memes formulations
- les memes meta titles
- les memes FAQs
- le meme angle exact

Sinon, le risque est surtout :

- duplication percue par Google
- cannibalisation entre Valmetaux et CIL
- positionnement plus faible du nouveau site
- faible differentiation entre les deux marques

---

## Positionnement SEO recommande pour CIL

Le site doit etre pense comme :

- un ferrailleur base a Villaines-sous-Bois
- avec un depot reel
- fort sur son bassin local
- fort sur le Val-d'Oise
- capable d'intervenir plus largement en Ile-de-France
- avec une couverture departementale credible sur 77, 91, 92, 93, 94, 95
- et un discours "ancrage local fort + rayonnement regional"

Angle conseille :

- home tres locale
- maillage villes utile autour du depot
- page 95 tres solide
- page Ile-de-France de rayonnement
- pages departements tres claires
- pages services transversales
- guides en soutien uniquement

---

## Architecture cible recommandee

Structure cible :

```text
/
|-- home / page depot
|-- /ferrailleur-ile-de-france/
|-- /prestations/
|-- /prestations/rachat-de-metaux/
|-- /prestations/recyclage-ferrailles/
|-- /prestations/recyclage-metaux-non-ferreux/
|-- /prestations/recyclage-metaux-speciaux/
|-- /prestations/enlevement-chantier/
|-- /prestations/depose-de-bennes/              (seulement si le service existe vraiment)
|-- /ferrailleur-val-doise-95/
|-- /ferrailleur-seine-et-marne-77/
|-- /ferrailleur-essonne-91/
|-- /ferrailleur-hauts-de-seine-92/
|-- /ferrailleur-seine-saint-denis-93/
|-- /ferrailleur-val-de-marne-94/
|-- /ferrailleur-viarmes/
|-- /ferrailleur-belloy-en-france/
|-- /ferrailleur-montsoult/
|-- /ferrailleur-baillet-en-france/
|-- /ferrailleur-domont/
|-- /ferrailleur-luzarches/
|-- /ferrailleur-presles/                      (optionnel au premier lot)
|-- /guides/
|-- /guides/[slug]
|-- /infos-pratiques
```

Recommendation :

- la home porte le depot
- la page 95 porte le coeur du maillage local
- la page Ile-de-France porte le rayonnement global
- les pages departements elargissent le territoire
- les pages villes renforcent le 95 et l'autorite locale

---

## Role de chaque type de page

### Home

La home doit faire office de page depot principale.

Elle doit porter :

- l'adresse exacte
- la preuve terrain
- les photos reelles
- le telephone
- les horaires
- les types de metaux rachetes
- les modalites de depot
- les modalites de paiement
- les services principaux
- le rayonnement Ile-de-France

### Pages departements

Chaque page departement doit servir a capter :

- `ferrailleur + departement`
- `rachat metaux + departement`
- `recyclage ferraille + departement`
- `depose de benne + departement`
- `enlevement metaux + departement`

Mais il faut eviter les pages departements vides ou trop generiques.

Chaque page doit parler :

- du profil du departement
- des types de clients probables
- des flux metaux probables
- des services les plus adaptes
- du lien avec le depot
- du rayon d'intervention

### Page Ile-de-France

La page Ile-de-France doit servir de page parapluie regionale.

Elle sert a capter :

- `ferrailleur ile-de-france`
- `rachat metaux ile-de-france`
- `recyclage ferraille ile-de-france`
- `depose de benne ile-de-france`
- `enlevement metaux ile-de-france`

Elle doit ensuite redistribuer proprement vers :

- la home
- la page 95
- les pages departements 77, 91, 92, 93, 94
- les pages prestations

### Pages villes

Les pages villes gardent un role important.

Elles servent a :

- ancrer CIL autour du depot
- donner de la densite locale au site
- renforcer le 95
- nourrir le maillage interne
- differencier CIL de Valmetaux par un autre bassin local

### Pages prestations

Les pages prestations portent l'autorite thematique.

Elles servent a :

- ranker sur les intentions metier
- alimenter les pages departements
- rassurer les visiteurs
- convertir

### Guides

Les guides servent en soutien seulement.

Ils ne doivent pas etre la priorite avant :

- la home
- les services
- les departements

---

## Strategie de contenu recommandee

### Priorite 1 : Home

Refaire completement :

- hero
- promesse
- preuve locale
- sections particuliers / pros
- zone desservie
- services
- CTA
- metadata

### Priorite 2 : Services

Refaire completement :

- rachat de metaux
- recyclage ferrailles
- recyclage metaux non ferreux
- recyclage metaux speciaux
- enlèvement chantier
- depose de bennes si vrai service

### Priorite 3 : Pages villes prioritaires autour du depot

Refaire ou remplacer en priorite :

- Viarmes
- Belloy-en-France
- Montsoult
- Baillet-en-France
- Domont
- Luzarches
- Presles si on veut un premier lot plus large

### Priorite 4 : Page 95 + page Ile-de-France + departements

Refaire completement les pages :

- Ile-de-France
- Val-d'Oise 95
- Seine-et-Marne 77
- Essonne 91
- Hauts-de-Seine 92
- Seine-Saint-Denis 93
- Val-de-Marne 94

### Priorite 5 : Guides

Deux options :

- soit tu gardes quelques guides mais fortement reecrits
- soit tu lances d'abord sans gros travail guide

---

## Comment differencier CIL de Valmetaux

Il faut une vraie separation narrative.

Axes possibles :

- Valmetaux : ancrage Argenteuil et proche couronne ouest/nord-ouest
- CIL : depot Villaines-sous-Bois avec maillage nord 95 + page 95 forte + couverture IDF

Differenciations concretes :

- autre depot
- autres photos
- autre ton de marque
- autre hero
- autre structure de home
- autres exemples terrain
- autres formulations
- autres FAQs
- autre ordre de priorite des arguments

Ce qu'il ne faut pas faire :

- reprendre la meme home en changeant 20 mots
- reprendre les memes pages departements a l'identique
- garder les memes guides mot pour mot

---

## Ligne editoriale recommandee

Le ton de CIL devrait etre :

- plus local terrain
- plus simple et direct
- plus centre sur la logistique et la proximite du depot
- plus centre sur l'efficacite et la reactivite

Mots et idees a pousser :

- depot
- pesee
- rachat au comptoir
- volumes chantier
- enlèvement
- benne
- intervention Ile-de-France
- metaux ferreux et non ferreux
- artisans, PME, particuliers

---

## Plan page par page

### Home

A inclure :

- H1 axe depot + rachat metaux + Ile-de-France
- sous-titre ancre a Villaines-sous-Bois
- bloc telephone
- bloc horaires
- bloc adresse
- principaux metaux
- principaux services
- partie particuliers
- partie pros
- partie rayonnement departemental
- FAQ
- maillage vers services et departements

### Page departement type

Trame recommandee :

1. Hero localise sur le departement
2. Intro sur l'intervention dans le departement
3. Profil du territoire
4. Types de clients frequents
5. Metaux les plus courants
6. Services les plus demandes
7. Pourquoi passer par le depot / pourquoi appeler CIL
8. FAQ
9. Liens vers prestations

### Page service type

Trame recommandee :

1. H1 transactionnel fort
2. Pour qui est le service
3. Comment ca se passe
4. Types de metaux / cas pris en charge
5. Zone d'intervention
6. Reassurance paiement / pesee / logistique
7. FAQ
8. Liens vers departements

---

## Plan de production concret

Ordre de travail recommande :

1. corriger l'identite globale du site
2. remplacer les donnees `site.ts`
3. corriger `layout.tsx`
4. corriger `JsonLd.tsx`
5. refaire la homepage
6. refaire les pages services
7. refaire le bloc villes prioritaires autour du depot
8. refaire la page 95
9. creer la page Ile-de-France
10. refaire les pages 77, 91, 92, 93, 94
11. revoir les guides

---

## Fichiers du repo a traiter en premier

### Identite globale

- [src/content/site.ts](/Users/rayan/perso/cilrecyclage/src/content/site.ts:1)
- [src/app/layout.tsx](/Users/rayan/perso/cilrecyclage/src/app/layout.tsx:1)
- [src/components/seo/JsonLd.tsx](/Users/rayan/perso/cilrecyclage/src/components/seo/JsonLd.tsx:1)
- [src/components/layout/Header.tsx](/Users/rayan/perso/cilrecyclage/src/components/layout/Header.tsx:1)
- [src/components/layout/Footer.tsx](/Users/rayan/perso/cilrecyclage/src/components/layout/Footer.tsx:1)

### Home

- [src/app/page.tsx](/Users/rayan/perso/cilrecyclage/src/app/page.tsx:1)

### Services

- [src/content/services/rachat-de-metaux.ts](/Users/rayan/perso/cilrecyclage/src/content/services/rachat-de-metaux.ts:1)
- [src/content/services/recyclage-ferrailles.ts](/Users/rayan/perso/cilrecyclage/src/content/services/recyclage-ferrailles.ts:1)
- [src/content/services/recyclage-metaux-non-ferreux.ts](/Users/rayan/perso/cilrecyclage/src/content/services/recyclage-metaux-non-ferreux.ts:1)
- [src/content/services/recyclage-metaux-speciaux.ts](/Users/rayan/perso/cilrecyclage/src/content/services/recyclage-metaux-speciaux.ts:1)
- [src/content/services/enlevement-chantier.ts](/Users/rayan/perso/cilrecyclage/src/content/services/enlevement-chantier.ts:1)
- [src/content/services/depose-de-bennes.ts](/Users/rayan/perso/cilrecyclage/src/content/services/depose-de-bennes.ts:1)

### Departements

- [src/content/departments/val-doise-95.ts](/Users/rayan/perso/cilrecyclage/src/content/departments/val-doise-95.ts:1)
- [src/content/departments/hauts-de-seine-92.ts](/Users/rayan/perso/cilrecyclage/src/content/departments/hauts-de-seine-92.ts:1)
- [src/content/departments/seine-saint-denis-93.ts](/Users/rayan/perso/cilrecyclage/src/content/departments/seine-saint-denis-93.ts:1)
- [src/content/departments/seine-et-marne-77.ts](/Users/rayan/perso/cilrecyclage/src/content/departments/seine-et-marne-77.ts:1)
- [src/content/departments/essonne-91.ts](/Users/rayan/perso/cilrecyclage/src/content/departments/essonne-91.ts:1)
- [src/content/departments/val-de-marne-94.ts](/Users/rayan/perso/cilrecyclage/src/content/departments/val-de-marne-94.ts:1)

### Villes prioritaires

- Viarmes
- Belloy-en-France
- Montsoult
- Baillet-en-France
- Domont
- Luzarches
- Presles en extension de premier lot si besoin

---

## Place de la deep research villes

Ta deep research villes reste tres utile.

Elle peut servir :

- pour definir les villes prioritaires autour du depot
- pour nourrir la home
- pour donner de la precision a la page 95
- pour construire le maillage local qui renforce toute la strategie
- pour differencier CIL de Valmetaux

---

## Ce qu'il faut retenir

Le bon plan pour CIL aujourd'hui est :

- home forte sur le depot
- maillage villes fort autour du depot
- page 95 forte
- page Ile-de-France
- pages departements 77, 91, 92, 93, 94 fortes
- pages prestations fortes
- design distinct de Valmetaux

Si cette direction est validee, la meilleure suite est de transformer ce plan en checklist d'implementation directement dans le repo.
