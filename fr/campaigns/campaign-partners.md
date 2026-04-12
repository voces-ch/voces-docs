# Ajouter des organisations partenaires

Sur voces.ch, vous pouvez mener facilement des campagnes communes avec d'autres organisations via un **UUID d'organisation** et un **slug de tracking**.

## 1. Recuperer l'UUID du partenaire

Le partenaire trouve son UUID dans ses **parametres d'organisation**.

## 2. Ajouter le partenaire a la campagne

1. Ouvrez la campagne.
2. Dans **Campaign Partners**, cliquez sur ajouter.
3. Saisissez l'UUID.
4. Definissez un slug de tracking (sans espaces).

## 3. Attribution via `source`

Le slug est utilise dans le parametre `source`.

### Methode A: widget integre

```html
<script>
  window.voces.widget({
    target: "#voces-widget-container",
    campaignUuid: "UUID-CAMPAGNE",
    source: "VOTRE-SLUG",
    theme: "minimal",
    lang: "fr",
  });
</script>
```

### Methode B: lien avec `?source=`

`https://votre-site.example/votre-petition?source=VOTRE-SLUG`

La signature sera attribuee au partenaire correspondant.
