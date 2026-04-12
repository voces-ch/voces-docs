---
outline: deep
---

# Incorpora una campagna nel tuo sito

Dopo aver creato una campagna, puoi pubblicarla nel tuo sito usando il **widget voces**.

## Configuratore embed (metodo piu semplice)

1. Apri la campagna nel backend.
2. Vai alla sezione **Embed**.
3. Configura opzioni widget (tema, lingua, barra progresso, versione, source, origin).
4. Copia il codice generato.
5. Incollalo nel punto del sito dove vuoi mostrare il form.

## Come funziona il codice (manuale)

### 1. Inserisci un contenitore

```html
<div id="mia-petizione"></div>
```

### 2. Carica lo script

```html
<script src="https://TUO-DOMINIO-VOCES.ch/widget/latest/voces-widget.js"></script>
```

### 3. Inizializza il widget

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    if (window.voces && typeof window.voces.widget === "function") {
      window.voces.widget({
        target: "#mia-petizione",
        campaignUuid: "UUID-CAMPAGNA",
        theme: "minimal",
        lang: "it",
        showProgress: true,
      });
    }
  });
</script>
```
