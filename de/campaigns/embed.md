---
outline: deep
---

# Kampagne auf deiner Webseite einbetten

Sobald du deine Kampagne erstellt hast, möchtest du sie natürlich auf deiner eigenen Website (oder der deiner Organisation) veröffentlichen. Das geschieht über unser einbettbares **voces-widget**.

## Der Einbettungs-Konfigurator (Einfachste Methode)

Im voces.ch Backend machen wir es dir besonders einfach. Anstatt den Code von Hand zusammenzustellen, kannst du unseren eingebauten Konfigurator nutzen:

1.  Öffne deine Kampagne im Backend.
2.  Scrolle zum Bereich **Einbetten** (Widget Konfigurator).
3.  Passe das Widget an deine Bedürfnisse an:
    - **Theme:** Wähle das Design, das am besten zu deiner Website passt (z.B. _minimal_, _impact_, _neon_).
      - [Beispiel Theme «Minimal»](/theme-minimal.png)
      - [Beispiel Theme «Card»](/theme-card.png)
      - [Beispiel Theme «Registry»](/theme-registry.png)
      - [Beispiel Theme «Neon»](/theme-neon.png)
      - [Beispiel Theme «Impact»](/theme-impact.png)
      - Alternativ kannst du auch «unstyled» wählen, um dein eigenes CSS für das Widget zu gestalten.
    - **Sprache:** Wähle die Standardsprache aus, in der das Formular geladen werden soll.
    - **Fortschrittsbalken:** Entscheide, ob der dynamische Zähler angezeigt werden soll.
    - **Version:** Wähle aus, welche Version des Widgets du auf deiner Webseite einbetten willst. In der Regel ist es am schlausten, eine Version zu nutzen, die mit `v` beginnt (nicht `latest`), um sicherzustellen, dass sich das Formular nicht ungewollt verändert. Die Version des verwendeten Widgets kann nachträglich angepasst werden.
    - **Source:** Entscheidet, welcher Organisation diese Unterschriften zugeschrieben werden (vgl. [Partner\*innenorganisationen hinzufügen](./campaign-partners.md)). **Kann über den URL-Parameter `source=partner-slug` überschrieben werden.**
    - **Origin:** Die Quelle der Unterschrift (bspw. «newsletter» oder «instagram»). **Kann über den URL-Parameter `origin=quelle-freitext` überschrieben werden.**
4.  Der fertige HTML- und JavaScript-Code wird direkt unter deinen Einstellungen live generiert.
5.  Klicke auf **Code kopieren** und füge ihn exakt an der Stelle in deine Website ein, wo das Formular erscheinen soll. Fertig!

## Wie der Code funktioniert (Manuelle Anpassung)

Falls du verstehen möchtest, wie der generierte Code aufgebaut ist, oder ihn manuell anpassen willst, findest du hier die Erklärung der einzelnen Bestandteile.

### 1. Den Container platzieren

Füge an der exakten Stelle in deinem Website-Code (HTML), an der das Formular später erscheinen soll, ein leeres `div`-Element mit einer eindeutigen ID ein.

```html
<div id="meine-petition"></div>
```

### 2. Das Script laden

Füge das JavaScript von voces.ch zu deiner Website hinzu. Am besten platzierst du diesen Code ganz am Ende deiner Seite, direkt vor dem schliessenden `</body>`-Tag.

_(Hinweis: Falls du voces.ch selbst hostest, ersetze die URL durch die tatsächliche URL deiner Installation.)_

```html
<script src="https://DEINE-VOCES-DOMAIN.ch/widget/latest/voces-widget.js"></script>
```

### 3. Das Widget initialisieren

Direkt unter dem Script-Tag aus Schritt 2 fügst du nun einen weiteren kurzen Code-Block hinzu. Dieser startet das Widget und sagt ihm, welche Kampagne geladen werden soll:

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Stellt sicher, dass das Script aus Schritt 2 erfolgreich geladen wurde if (window.voces && typeof window.voces.widget === 'function') {
    if (window.voces && typeof window.voces.widget === "function") {
      window.voces.widget({
        target: "#meine-petition", // Die ID aus Schritt 1
        campaignUuid: "DEINE-KAMPAGNEN-UUID", // Die ID deiner Kampagne
        theme: "minimal",
        lang: "de",
        showProgress: true,
      });
    } else {
      console.error("voces.ch Widget konnte nicht geladen werden.");
    }
  });
</script>
```

### Konfigurations-Optionen

Du kannst das Verhalten und Aussehen deines Widgets über die Parameter im Initialisierungs-Block ganz einfach anpassen:

- **`target`** (Pflichtfeld): Der Ort, an dem das Widget gerendert wird. Das muss exakt mit der ID deines Containers aus Schritt 1 übereinstimmen (inklusive dem `#` Symbol).
- **`campaignUuid`** (Pflichtfeld): Die eindeutige Kennung deiner Kampagne. Du findest diesen langen Code im voces.ch Backend in der Detailansicht deiner Kampagne.
- **`theme`**: Das visuelle Erscheinungsbild deines Formulars. Standardmässig ist `minimal` eingestellt. Weitere verfügbare Themes sind: `card`, `impact`, `registry` und `neon`.
- **`lang`**: Die Sprache des Formulars (z.B. `de`, `en`, `fr`, `it`). Dies übersetzt Standard-Texte wie Fehler- oder Erfolgsmeldungen und lädt, falls im Backend konfiguriert, die passende Übersetzung deiner eigenen Formularfelder.
- **`showProgress`**: Setze diesen Wert auf `true`, wenn du einen dynamischen Fortschrittsbalken über dem Formular anzeigen möchtest. _(Beachte: Der Balken wird nur angezeigt, wenn du in den Kampagnen-Einstellungen auch ein Unterschriften-Ziel definiert hast)._
