# Mailchimp Integration

Mit der Mailchimp-Integration landen Personen, die deine Kampagne unterschreiben, vollautomatisch in deinem E-Mail-Verteiler.

> 🔒 **GDPR & Datenschutz:** Unsere Integration nutzt ein sicheres Synchronisations-Verfahren (MD5 Hash). Das bedeutet: Ist die Person neu, wird sie deiner Liste hinzugefügt. Ist die Person bereits in deinem Mailchimp vorhanden, werden lediglich ihre Daten aktualisiert, ohne dass ihr Abo-Status überschrieben oder eine erneute Bestätigungs-E-Mail ausgelöst wird.

## Einrichtung

1.  Öffne deine Kampagne im voces.ch Backend.
2.  Scrolle zum Bereich **Integrationen** und wähle den Typ **Mailchimp**.
3.  Stelle sicher, dass die Integration auf **Aktiv** gesetzt ist und fülle folgende Felder aus:

### 1. API-Zugangsdaten

- **API Key:** Deinen API-Schlüssel findest du in deinem Mailchimp-Konto unter _Account > Extras > API keys_.
- **Audience ID (List ID):** Die ID deiner Empfängerliste. Gehe in Mailchimp auf _Audience > Settings > Audience name and defaults_.

### 2. Opt-In Prüfung (Wichtig!)

Du darfst Personen nur dann in einen Newsletter eintragen, wenn sie dem explizit zugestimmt haben.

Wähle im Feld **Opt-In Checkbox** jenes Formularfeld deiner Kampagne aus, das die Unterstützer\*innen für den Newsletter anklicken müssen (z.B. _"Ja, haltet mich auf dem Laufenden"_).

::: info Hinweis
Nur Personen, die diese Checkbox beim Unterschreiben aktiviert haben, werden an Mailchimp gesendet!
:::

### 3. Merge Fields (Feld-Zuordnung)

Hier erklärst du dem System, welche Daten aus deinem voces.ch Formular in welches Feld in Mailchimp kopiert werden sollen.

- Klicke auf **Zeile hinzufügen**.
- Trage links den **internen Namen** deines voces.ch Feldes ein (z.B. `first_name`).
- Trage rechts den **Mailchimp Merge Tag** ein (z.B. `FNAME`). Den Tag findest du in Mailchimp unter _Audience > Settings > Audience fields and |MERGE| tags_.
- **Zwingend erforderlich:** Du musst zwingend ein Feld für die E-Mail-Adresse definieren (voces-Feld z.B. `email` -> Mailchimp Tag `EMAIL`).

::: tip 💡 Beispiel einer korrekten Zuordnung

- `email` ➔ `EMAIL`
- `first_name` ➔ `FNAME`
- `last_name` ➔ `LNAME`

:::
