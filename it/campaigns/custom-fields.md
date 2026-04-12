# Campi campagna personalizzati

Come host della campagna controlli i dati raccolti. Per conformita, **solo l'host puo creare e gestire i campi campagna**.

## Creare un campo

In **Custom Campaign Fields**, per ogni campo definisci:

- **Internal Key:** chiave database unica, senza spazi.
- **Public Label:** etichetta visibile ai firmatari, traducibile.
- **Type:** testo breve, paragrafo, email, data, checkbox, ecc.
- **Required e Unique:** un campo (di solito email) deve essere identificatore unico.

## Routing campi per form

Con **Display on which forms?** decidi dove mostrare il campo.

### 1. Campo globale

Lascia il menu vuoto: visibile su tutti i form.

### 2. Campo solo host

Seleziona `Campaign host`: visibile solo sul form host.

### 3. Campo specifico partner

Seleziona uno o piu partner: visibile solo per quelle fonti.

::: tip Requisito
Il routing richiede partner attivi. Vedi [guida partner](/it/campaigns/campaign-partners.md).
:::
