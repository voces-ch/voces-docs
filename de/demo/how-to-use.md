# Demo-Umgebung (Sandbox)

Möchtest du voces.ch einfach mal unverbindlich ausprobieren, ohne gleich eine eigene Instanz zu hosten oder dich zu registrieren? Dafür haben wir unsere offizielle Demo-Umgebung eingerichtet!

👉 **[demo.voces.ch](https://demo.voces.ch)**

Hier kannst du dich im Backend einloggen, Kampagnen anlegen, das Partner\*innen-Feature testen und das Widget live ausprobieren.

> 🔄 **Hinweis zum Reset:** Dies ist ein öffentlicher Spielplatz. Die Datenbank der Demo-Umgebung wird **jeden Tag um 04:00 Uhr morgens** automatisch in den Ursprungszustand zurückgesetzt. Alle von dir vorgenommenen Änderungen oder Test-Unterschriften werden dann gelöscht.

## 1. Das Backend testen (Logins)

Um dir unser mächtigstes Feature – **Gemeinsame Kampagnen, getrennte Daten** – zu demonstrieren, haben wir die Demo-Umgebung mit zwei fiktiven Organisationen vorkonfiguriert, die gemeinsam die Kampagne _"Kein Beton am Silbersee"_ führen.

Du kannst dich mit beiden Accounts einloggen, um zu sehen, wie die Daten-Trennung in der Praxis aussieht:

| Rolle                    | E-Mail / Login     | Passwort   | Organisation                | Partner-Slug            |
| :----------------------- | :----------------- | :--------- | :-------------------------- | :---------------------- |
| **Haupt-Organisation**   | `dev@voces.ch`     | `password` | Aktionskomitee Silbersee    | _(Host)_                |
| **Partner-Organisation** | `partner@voces.ch` | `password` | Naturschutzverein Silbersee | `naturschutz-silbersee` |

**Probier es aus:**

1. Logge dich als Haupt-Organisation ein. Du siehst die Kampagne, die Formularfelder (Vorname, Nachname, E-Mail, PLZ, Newsletter) und alle generellen Unterschriften.
2. Logge dich danach als Partner-Organisation ein. Du siehst dieselbe Kampagne, kannst sie aber nicht bearbeiten. Du siehst in der Auswertung nur jene Unterschriften, die über deinen spezifischen Partner-Slug gesammelt wurden!

## 2. Das Widget live testen (Vorschau)

Wir haben ausserdem eine Live-Vorschau-Seite gebaut, mit der du das Aussehen und Verhalten des eingebetteten Widgets direkt im Browser testen kannst, ohne eine Zeile Code schreiben zu müssen:

👉 **[demo.voces.ch/demo/widget/view](https://demo.voces.ch/demo/widget/view)**

Standardmässig wird hier die Silbersee-Kampagne geladen. Du kannst das Widget jedoch über Parameter in der Adresszeile (URL) beliebig anpassen. Hänge diese Parameter einfach mit einem `?` (und weitere mit einem `&`) an die URL an.

### Verfügbare Parameter:

- **`theme`**: Verändert das Design.
  - _Beispiel:_ `?theme=impact` (Verfügbar: [`minimal`](https://demo.voces.ch/demo/widget/view?theme=minimal#form), [`impact`](https://demo.voces.ch/demo/widget/view?theme=impact#form), [`card`](https://demo.voces.ch/demo/widget/view?theme=card#form), [`neon`](https://demo.voces.ch/demo/widget/view?theme=neon#form), [`registry`](https://demo.voces.ch/demo/widget/view?theme=registry#form))
- **`lang`**: Ändert die Sprache des Widgets (Die Testkampagne unterstützt Deutsch und Französisch).
  - _Beispiel:_ `?lang=fr`
- **`showProgress`**: Blendet den Fortschrittsbalken ein oder aus.
  - _Beispiel:_ `?showProgress=true` oder `?showProgress=false`
- **`source`**: Simuliert eine Unterschrift über eine Partnerorganisation. Unterschriften, die hiermit generiert werden, landen bei der jeweiligen Partnerorganisation im Backend.
  - _Beispiel:_ `?source=naturschutz-silbersee`
- **`origin`**: Übergibt einen Ursprungs-Parameter (z.B. für das Tracking, auf welcher genauen Website das Widget eingebettet war).
  - _Beispiel:_ `?origin=https://mein-blog.ch`

**Beispiel für eine kombinierte URL:**
`https://demo.voces.ch/demo/widget/view?theme=impact&lang=fr&showProgress=true&source=naturschutz-silbersee`
