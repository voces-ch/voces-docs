# Partner\*innenorganisationen hinzufügen

Bei voces.ch ist es ganz einfach, gemeinsame Kampagnen mit anderen Organisationen zu führen. Anstatt komplizierte Einladungs-Mails zu verschicken, funktioniert die Verknüpfung unkompliziert über die sogenannte **Organisations-UUID** (eine eindeutige Identifikationsnummer) und einen individuell festgelegten **Tracking-Slug**.

So richtest du eine Partnerschaft ein:

## 1. Die UUID der Partnerorganisation finden

Damit du eine andere Organisation als Partner\*in zu deiner Kampagne hinzufügen kannst, benötigst du deren Organisations-UUID.

Die Partnerorganisation findet diesen Code ganz einfach in ihrem eigenen voces.ch Backend:

1.  Sie loggt sich ein, klickt in der linken Spalte auf ihren Organisationsnamen und navigiert zur Seite **Organisationseinstellungen** («Organization settings»).
2.  Dort wird ihre eindeutige **Organisations-UUID** (eine längere Zeichenfolge) angezeigt.
3.  Sie kopiert diesen Code und sendet ihn an dich.

## 2. Partner\*in zur Kampagne hinzufügen

Sobald du die UUID der Partnerorganisation erhalten hast, kannst du sie mit deiner Kampagne verknüpfen:

1.  Öffne die gewünschte Kampagne in deinem Backend in der Detailansicht.
2.  An der Seite findest du den Bereich **Campaign Partners** (Kampagnen-Partner).
3.  Klicke dort auf "Hinzufügen" und trage die erhaltene UUID der Partnerorganisation ein.
4.  **Wichtig:** Lege nun zusätzlich einen **Tracking-Slug** für diese Organisation fest (z.B. `greenpeace` oder `klima-streik`). Dieser Slug darf keine Leerzeichen enthalten und dient ab sofort als eindeutiges Erkennungsmerkmal für diese Partnerschaft.

Die Organisation ist nun offiziell berechtigt, Unterschriften für diese Kampagne zu sammeln!

## 3. Unterschriften zuordnen (Der `source`-Parameter)

Jetzt sind die Organisationen verknüpft und sammeln für denselben Fortschrittsbalken. Aber wie weiss das System, welche Unterschrift von welcher Organisation generiert wurde?

Hier kommt der **Tracking-Slug** ins Spiel, den du im vorherigen Schritt definiert hast. Er wird als **`source`-Parameter** genutzt. Es gibt zwei Wege, wie die Partnerorganisation diesen nutzen kann:

### Methode A: Im eingebetteten Widget

Wenn die Partnerorganisation das Formular auf ihrer **eigenen Website** einbettet, nutzt sie die normale Kampagnen-UUID, fügt aber im Konfigurations-Code zusätzlich das Feld `source` mit dem vereinbarten Tracking-Slug hinzu:

```html
<script>
  window.voces.widget({
    target: "#voces-widget-container",
    campaignUuid: "UUID-DER-KAMPAGNE",
    source: "DEIN-TRACKING-SLUG", // <-- z.B. 'klima-streik'
    theme: "minimal",
    lang: "de",
  });
</script>
```

### Methode B: Als URL-Link (`?source=`)

Wenn die Partnerorganisation das Widget nicht selbst einbettet, sondern z.B. in einem Newsletter oder auf Social Media auf _deine_ Website verlinkt, kann sie den Slug einfach an deine Webadresse (URL) anhängen:

`https://deine-website.ch/unsere-petition?source=DEIN-TRACKING-SLUG`

Unser Widget ist so programmiert, dass es diesen Parameter (`?source=...`) automatisch aus der Adresszeile des Browsers ausliest. Wenn jemand über diesen speziellen Link auf die Seite kommt und unterschreibt, wird die Unterschrift automatisch der Partnerorganisation gutgeschrieben.
