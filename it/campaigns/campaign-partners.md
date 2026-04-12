# Aggiungere organizzazioni partner

Con voces.ch puoi gestire facilmente campagne condivise con altre organizzazioni tramite **UUID organizzazione** e **tracking slug**.

## 1. Trova l'UUID del partner

Il partner trova il suo UUID nelle **impostazioni organizzazione**.

## 2. Aggiungi il partner alla campagna

1. Apri la campagna.
2. In **Campaign Partners**, clicca aggiungi.
3. Inserisci l'UUID.
4. Definisci uno slug tracking (senza spazi).

## 3. Attribuzione firme con `source`

Lo slug e usato nel parametro `source`.

### Metodo A: widget incorporato

```html
<script>
  window.voces.widget({
    target: "#voces-widget-container",
    campaignUuid: "UUID-CAMPAGNA",
    source: "IL-TUO-SLUG",
    theme: "minimal",
    lang: "it",
  });
</script>
```

### Metodo B: link con `?source=`

`https://tuo-sito.example/petizione?source=IL-TUO-SLUG`

La firma verra attribuita al partner corretto.
