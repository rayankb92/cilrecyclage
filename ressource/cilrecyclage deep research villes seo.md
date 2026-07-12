# Plan de Refonte SEO et Contenu pour CIL Recyclage

## Objectif

Transformer la base actuelle issue de `valmetaux` en un vrai site `CIL Recyclage` autonome, crédible localement, différencié éditorialement et solide en SEO.

Le principe à retenir :

- on peut garder la base technique
- on ne doit pas garder le même corps SEO
- on doit créer une vraie identité locale propre a CIL Recyclage

---

## Constat actuel sur le repo

Le repo `cilrecyclage` est aujourd'hui un clone quasi complet de `valmetaux`.

Cela signifie que l'on retrouve encore :

- la marque `VALMETAUX`
- le domaine `valmetaux.fr`
- les logos `VALMETAUX`
- les coordonnées de l'ancien depot
- les textes de homepage
- les pages villes
- les pages departements
- les pages prestations
- les guides
- les donnees structurees

Conclusion : la structure technique est reutilisable, mais le site ne doit pas etre publie dans cet etat.

---

## Ce qu'on peut garder

On peut garder sans risque :

- l'architecture Next.js
- les templates de pages
- la logique `cities / departments / services / guides`
- le systeme de sitemap et robots
- le schema de maillage interne
- les grandes thematiques metier
- la methode SEO locale par villes et departements

En bref : on garde le squelette, on remplace l'identite, le ciblage geographique et le contenu.

---

## Ce qu'il faut changer absolument

### Identite et signaux techniques

A changer avant toute mise en ligne :

- nom de marque
- domaine
- logo
- favicon
- telephone
- email
- adresse
- coordonnees GPS
- horaires
- Google verification
- GA4 / Google Ads
- balises metadata
- donnees structurees `LocalBusiness`

Fichiers concernes en priorite :

- [src/content/site.ts](/Users/rayan/perso/cilrecyclage/src/content/site.ts:1)
- [src/app/layout.tsx](/Users/rayan/perso/cilrecyclage/src/app/layout.tsx:1)
- [src/components/seo/JsonLd.tsx](/Users/rayan/perso/cilrecyclage/src/components/seo/JsonLd.tsx:1)
- [src/components/layout/Header.tsx](/Users/rayan/perso/cilrecyclage/src/components/layout/Header.tsx:1)
- [src/components/layout/Footer.tsx](/Users/rayan/perso/cilrecyclage/src/components/layout/Footer.tsx:1)
- `public/`

### Contenu SEO

A reecrire :

- homepage
- pages villes
- pages departements
- pages prestations
- guides SEO si on veut que les deux sites rankent bien ensemble

Ce qu'il ne faut pas faire :

- simplement remplacer `VALMETAUX` par `CIL`
- changer quelques synonymes
- garder les memes paragraphes
- garder les memes FAQ
- garder les memes angles de page

---

## Peut-on garder les memes textes ?

Non, pas si l'objectif est d'avoir deux sites qui performent tous les deux.

Le risque principal n'est pas une penalite manuelle automatique.
Le vrai risque est plutot :

- Google considere `CIL Recyclage` comme une version dupliquee
- Google choisit un seul site a afficher
- le nouveau site a du mal a se positionner
- les deux sites se cannibalisent
- les pages locales paraissent faibles ou artificielles

Donc :

- oui pour reutiliser la logique
- non pour garder les memes textes

---

## Strategie de differenciation recommandee

Pour que `CIL Recyclage` existe vraiment dans Google, il faut lui donner :

- un depot de reference propre
- un noyau geographique propre
- un angle commercial propre
- un ton editorial propre
- des preuves locales propres
- des photos propres
- un design propre

Il faut que le site raconte :

- ou est le depot
- qui vient vraiment
- quels types de metaux et de volumes sont les plus frequents
- quels services sont les plus credibles localement
- quelles communes sont vraiment naturelles pour ce depot

---

## Plan d'action recommande

### Phase 1 - Refonte identitaire et technique

Objectif : supprimer tous les signaux `VALMETAUX`.

A faire :

- remplacer nom, domaine, logo, favicon
- remplacer telephone, email, adresse, horaires
- corriger les donnees JSON-LD
- corriger `metadataBase`, titles, descriptions globales
- corriger sitemap et robots si besoin
- brancher les bons outils analytics

### Phase 2 - Refonte geographique

Objectif : definir le vrai territoire SEO de CIL.

A faire :

- repartir de l'adresse reelle du depot
- definir un coeur de zone prioritaire
- definir les villes phase 1
- definir les villes phase 2
- definir les villes a eviter
- verifier les chevauchements avec Valmetaux

### Phase 3 - Refonte du contenu principal

Objectif : refaire les pages qui portent le plus de poids SEO et conversion.

Ordre recommande :

1. homepage
2. pages services
3. page departement principale
4. top pages villes prioritaires
5. pages villes secondaires

### Phase 4 - Guides et blog

Objectif : ne pas dupliquer la partie informationnelle.

Options :

- soit on cree de nouveaux guides
- soit on retravaille tres fortement les sujets existants
- soit on reporte cette partie apres le lancement local

### Phase 5 - Refonte design

Objectif : ne pas avoir deux sites jumeaux visuellement.

A changer :

- palette
- typographie
- style hero
- hiérarchie visuelle
- photos
- sections de reassurance
- structure de homepage si besoin

---

## Priorite concrete de production

Si on veut aller vite sans faire n'importe quoi, le meilleur ordre est :

1. corriger l'identite de marque et les signaux techniques
2. figer la strategie villes
3. reecrire la homepage
4. reecrire les pages services
5. produire les 6 a 10 meilleures pages villes
6. produire la page departement forte
7. ajouter ensuite les villes secondaires
8. traiter les guides apres
9. refaire le design plus en profondeur

---

## Strategie villes SEO pour CIL Recyclage

Cette partie sert de base pour definir les pages locales a produire en premier.

### Verdict

Pour **CIL Recyclage**, dont le depot est bien localise **CD 909, 95570 Villaines-sous-Bois**, le meilleur territoire SEO n'est pas “tout le Val-d'Oise”, mais un **coeur de zone tres credible au nord et au nord-est du 95**, structure par l'axe **D909**, le pole **Viarmes / Belloy-en-France / Villaines-sous-Bois**, puis par la branche **Montsoult / Baillet-en-France / Domont** via la **RD301 / Croix Verte**, avec une extension mesuree vers **Luzarches** et quelques communes de second cercle.

En pratique, le lancement recommande est en **trois vagues** :

- vague 1 : Viarmes, Belloy-en-France, Montsoult, Baillet-en-France, Domont, Luzarches
- vague 1 bis si capacite editoriale : Presles
- vague 2 : Maffliers, Saint-Martin-du-Tertre, Attainville, Fosses, Chaumontel
- vague 3 : Marly-la-Ville, Asnieres-sur-Oise, Survilliers, Ezanville

### Territoire a viser en premier

Le bassin le plus logique pour CIL est :

- Villaines-sous-Bois
- Viarmes
- Belloy-en-France
- Montsoult
- Baillet-en-France
- Domont
- Luzarches

Cette zone est plus naturelle pour CIL que les villes tres associees a Argenteuil et donc a Valmetaux.

### Villes prioritaires

#### Viarmes

- meilleure page locale apres Villaines-sous-Bois
- forte coherence proximite + tissu artisanal + bassin economique
- bon angle : artisans, PME, renovation, parc d'activites

#### Belloy-en-France

- forte coherence grace au parc d'activites de l'Orme
- petite commune mais tres legitime
- bon angle : rachat de metaux pres du parc d'activites

#### Montsoult

- bon pivot residentiel et routier
- angle chantier et enlevement tres credible
- potentiel plus large qu'un micro-village

#### Baillet-en-France

- logique sur le meme couloir que Montsoult
- bon mix pavillonnaire + artisanat
- angle cuivre, aluminium, zinc, renovation

#### Domont

- plus de profondeur de marche
- a traiter en angle artisans, PME, renovations et enlevements
- ne pas la rediger comme une page locale generique

#### Luzarches

- bon pole local
- nom de ville porteur
- angle maisons anciennes, renovations, artisans

#### Presles

- bonne page de fin de premiere vague
- forte dominante pavillonnaire
- utile si on a la bande passante editoriale

### Villes secondaires

- Maffliers
- Saint-Martin-du-Tertre
- Attainville
- Fosses
- Chaumontel

### Villes opportunistes

- Marly-la-Ville
- Asnieres-sur-Oise
- Survilliers
- Ezanville

### Zones a eviter en priorite

A ne pas attaquer tot :

- Argenteuil
- Sannois
- Montmorency
- Eaubonne
- Saint-Leu-la-Foret
- Saint-Gratien
- Le Plessis-Bouchard

Pourquoi :

- ce sont des zones deja tres associees a Valmetaux
- risque de cannibalisation
- legitimite geographique moins forte pour CIL

Autre zone a traiter tard ou a eviter :

- Bernes-sur-Oise
- Beaumont-sur-Oise
- Persan

Pourquoi :

- concurrence metier plus dense
- il faudra beaucoup plus d'autorite et de preuve terrain

---

## Architecture locale recommandee

Structure de depart propre et defendable :

```text
/
|-- home / page depot
|-- /ferrailleur-val-doise-95/
|-- /rachat-metaux-carnelle-pays-de-france/
|-- /ferrailleur-viarmes/
|-- /ferrailleur-belloy-en-france/
|-- /ferrailleur-montsoult/
|-- /ferrailleur-baillet-en-france/
|-- /ferrailleur-domont/
|-- /ferrailleur-luzarches/
|-- /ferrailleur-presles/
|-- /prestations/...
|-- /guides/...
```

Regles a suivre :

- une home tres incarnee autour du depot
- une page 95 utile et non dupliquee de la home
- des pages villes solides
- pas d'explosion prematuree en pages `service x ville`

Mieux vaut :

- 6 pages villes fortes

que :

- 20 pages minces et dupliquees

---

## Plan de contenu recommande

### Homepage

La homepage doit devenir la vraie page depot de CIL.

Elle doit contenir :

- adresse exacte
- photos reelles
- horaires
- modalites de depot
- types de metaux rachetes
- modalites de paiement
- preuves locales
- zones desservies principales
- CTA telephone clairs

### Pages services

Les pages services doivent etre reecrites avec un angle CIL.

Pages a prioriser :

- rachat de metaux
- recyclage ferrailles
- recyclage metaux non ferreux
- enlèvement chantier
- depose de bennes si le service existe vraiment

### Pages villes

Chaque page ville doit contenir :

- lien clair avec le depot
- logique locale de la commune
- types de clients probables
- metaux les plus pertinents
- services les plus credibles
- maillage interne limite et propre

### Guides

Recommendation pragmatique :

- ne pas lancer tout de suite beaucoup de guides
- prioriser le local transactionnel d'abord
- revenir sur les guides apres stabilisation du socle local

---

## Prompt a utiliser pour la deep research villes SEO

Tu m'as dit que c'est le seul prompt que tu utilises vraiment aujourd'hui, donc je ne garde que celui-ci dans ce document.

Contexte d'usage :

- a utiliser quand tu veux demander a ChatGPT ou Gemini quelles villes cibler
- a utiliser avant d'ecrire les pages villes
- a reutiliser si l'adresse du depot change ou si tu veux elargir la zone

Prompt :

```text
Je crée le SEO local d’une entreprise de ferraille / rachat de métaux / recyclage métal nommée CIL Recyclage, avec dépôt physique situé à [ADRESSE EXACTE].

Je veux définir les meilleures villes à cibler en priorité autour du dépôt pour un site SEO local.

Ta mission :
1. Identifier les villes les plus pertinentes commercialement dans un rayon crédible autour du dépôt.
2. Prioriser les villes selon :
- proximité réelle au dépôt
- accessibilité routière
- densité pavillonnaire
- présence d’artisans, PME, chantiers, zones d’activité
- potentiel pour rachat de métaux, ferraille, cuivre, laiton, aluminium
- cohérence SEO locale
- faisabilité commerciale réelle
3. Séparer en :
- Phase 1 : villes prioritaires
- Phase 2 : villes secondaires
- Phase 3 : villes opportunistes
4. Signaler les villes à éviter car :
- trop éloignées
- trop concurrentielles
- peu crédibles
- risquent de cannibaliser un autre site déjà existant nommé Valmetaux
5. Pour chaque ville retenue, donner :
- justification commerciale
- justification SEO
- angle éditorial local possible
- types de clients probables
- métaux ou services les plus cohérents à mettre en avant
6. Proposer une architecture de pages locales cohérente :
- page dépôt / home
- pages département
- pages ville
- pages services

Contexte :
- Je ne veux pas un simple listing automatique de communes.
- Je veux une sélection crédible, exploitable commercialement et SEO.
- Il existe déjà un autre site dans le même secteur, Valmetaux, donc je veux différencier le ciblage si possible.
- Réponds en français, de manière structurée et opérationnelle.
```

---

## Decision simple a retenir

Si je resume en une phrase :

`CIL Recyclage` peut reutiliser la base du site `Valmetaux`, mais doit changer presque tout ce qui fait son identite SEO : zone, contenu, preuves locales, ton et design.

---

## Prochaine etape recommandee

La suite la plus utile est :

1. figer la liste des villes phase 1
2. corriger `src/content/site.ts`
3. reecrire la homepage
4. reecrire les pages services
5. produire les premieres pages villes

Une fois ce cadre valide, on peut ensuite passer a l'implementation dans le repo.
