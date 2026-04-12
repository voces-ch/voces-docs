# Ambiente demo (sandbox)

Vuoi provare voces.ch senza ospitare una tua istanza o creare subito un account? Usa il nostro ambiente demo ufficiale.

**[demo.voces.ch](https://demo.voces.ch)**

Puoi accedere al backend, creare campagne, testare le funzioni partner e provare il widget live.

> **Nota reset:** questo e un ambiente pubblico. Il database demo viene reimpostato automaticamente ogni giorno alle **04:00**.

## 1. Test del backend (accessi)

Per mostrare la funzione chiave, **campagne condivise con dati separati**, la demo include due organizzazioni fittizie.

| Ruolo                      | Email / Login      | Password   | Organizzazione                  | Partner slug         |
| :------------------------- | :----------------- | :--------- | :------------------------------ | :------------------- |
| **Organizzazione host**    | `dev@voces.ch`     | `password` | Comitato azione Silver Lake     | _(host)_             |
| **Organizzazione partner** | `partner@voces.ch` | `password` | Associazione natura Silver Lake | `nature-silver-lake` |

## 2. Test widget live

**[demo.voces.ch/demo/widget/view](https://demo.voces.ch/demo/widget/view)**

Di default viene caricata la campagna Silver Lake. Puoi personalizzare il widget con parametri URL.

### Parametri disponibili

- **`theme`**: cambia il design.
- **`lang`**: cambia la lingua del widget.
- **`showProgress`**: mostra o nasconde la barra di progresso.
- **`source`**: simula firme da un'organizzazione partner.
- **`origin`**: passa una origine per il tracciamento.

Esempio combinato:

`https://demo.voces.ch/demo/widget/view?theme=impact&lang=fr&showProgress=true&source=nature-silver-lake`
