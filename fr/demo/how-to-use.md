# Environnement de demo (sandbox)

Vous voulez tester voces.ch sans heberger votre propre instance ou creer un compte ? Utilisez notre environnement de demo officiel.

**[demo.voces.ch](https://demo.voces.ch)**

Vous pouvez vous connecter au backend, creer des campagnes, tester les fonctionnalites partenaires et essayer le widget en direct.

> **Note de reinitialisation:** C'est un bac a sable public. La base de donnees de demo est reinitialisee automatiquement chaque jour a **04:00**.

## 1. Tester le backend (comptes)

Pour montrer notre fonctionnalite cle, **campagnes communes avec donnees separees**, la demo est preconfiguree avec deux organisations fictives.

| Role                        | Email / Login      | Mot de passe | Organisation                   | Slug partenaire      |
| :-------------------------- | :----------------- | :----------- | :----------------------------- | :------------------- |
| **Organisation host**       | `dev@voces.ch`     | `password`   | Comite d'action Silver Lake    | _(host)_             |
| **Organisation partenaire** | `partner@voces.ch` | `password`   | Association Nature Silver Lake | `nature-silver-lake` |

## 2. Tester le widget en direct

**[demo.voces.ch/demo/widget/view](https://demo.voces.ch/demo/widget/view)**

Par defaut, la campagne Silver Lake est chargee. Vous pouvez personnaliser le widget via des parametres URL.

### Parametres disponibles

- **`theme`**: Change le design.
- **`lang`**: Change la langue du widget.
- **`showProgress`**: Affiche ou masque la barre de progression.
- **`source`**: Simule des signatures d'une organisation partenaire.
- **`origin`**: Transmet une information d'origine pour le suivi.

Exemple combine:

`https://demo.voces.ch/demo/widget/view?theme=impact&lang=fr&showProgress=true&source=nature-silver-lake`
