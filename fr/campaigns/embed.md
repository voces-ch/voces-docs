---
outline: deep
---

# Integrer une campagne sur votre site

Apres avoir cree votre campagne, vous pouvez l'integrer sur votre site via le **widget voces**.

## Configurateur d'integration (methode la plus simple)

1. Ouvrez votre campagne dans le backend.
2. Allez a la section **Embed**.
3. Configurez les options du widget (theme, langue, barre de progression, version, source, origin).
4. Copiez le code genere.
5. Collez-le a l'endroit souhaite sur votre site.

## Fonctionnement du code (manuel)

### 1. Ajouter un conteneur

```html
<div id="ma-petition"></div>
```

### 2. Charger le script

```html
<script src="https://VOTRE-DOMAINE-VOCES.ch/widget/latest/voces-widget.js"></script>
```

### 3. Initialiser le widget

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    if (window.voces && typeof window.voces.widget === "function") {
      window.voces.widget({
        target: "#ma-petition",
        campaignUuid: "UUID-DE-LA-CAMPAGNE",
        theme: "minimal",
        lang: "fr",
        showProgress: true,
      });
    }
  });
</script>
```
