# Champs de campagne personnalises

En tant qu'organisation host, vous controlez les donnees collectees. Pour des raisons de conformite, **seul l'host peut creer et gerer les champs de campagne**.

## Creer un champ

Dans **Custom Campaign Fields**, definissez pour chaque champ:

- **Internal Key:** Cle base de donnees unique, sans espaces.
- **Public Label:** Libelle visible par les signataires, traduisible.
- **Type:** Texte court, paragraphe, email, date, case a cocher, etc.
- **Required et Unique:** Un champ (souvent l'email) doit etre l'identifiant unique.

## Ciblage des champs (partner routing)

Avec **Display on which forms?**, vous choisissez ou afficher le champ.

### 1. Champ global

Laissez le menu vide: visible sur tous les formulaires.

### 2. Champ host uniquement

Selectionnez `Campaign host`: visible uniquement sur le formulaire host.

### 3. Champ specifique a des partenaires

Selectionnez un ou plusieurs partenaires: visible uniquement pour ces sources.

::: tip Condition
Le ciblage suppose des partenaires actifs. Voir le [guide partenaires](/fr/campaigns/campaign-partners.md).
:::
