---
outline: deep
---

# Eine Kampagne erstellen

Sobald du deine Organisation registriert hast, kannst du deine erste Kampagne (z.B. eine Petition oder einen offenen Brief) anlegen.

## So startest du

1.  Klicke im linken Hauptmenü auf **Kampagnen**.

2.  Klicke oben rechts auf den Button **Erstellen**.

Du befindest dich nun im Editor für deine Kampagne. Das Formular ist in drei übersichtliche Bereiche aufgeteilt:

## 1. Basisinformationen (Basic Information)

Hier definierst du die grundlegenden Eckdaten deiner Kampagne.

- **Aktiv (Is Active):** Mit diesem Schalter kannst du eine Kampagne jederzeit pausieren oder aktivieren.

- **Titel:** Der öffentliche Name deiner Kampagne (z.B. _Rettet den Silbersee_).

- **Button-Text (Submit Label):** Was soll auf dem Absende-Button stehen? Standardmässig steht hier "Jetzt unterschreiben", aber du kannst es beliebig anpassen (z.B. "Brief absenden").

- **Unterschriften-Ziel (Signature Goal):** Wie viele Unterschriften möchtest du sammeln? Wenn du hier eine Zahl einträgst (z.B. `1000`), kannst du deinem Widget automatisch einen motivierenden Fortschrittsbalken hinzufügen. Lässt du das Feld leer, wird der Balken ausgeblendet.

## 2. Erfolgsaktion (Success Logic)

Was soll passieren, _nachdem_ jemand auf "Jetzt unterschreiben" geklickt hat? Du hast zwei Möglichkeiten:

- **Erfolgsmeldung anzeigen (Show a Success Message):** Das Formular verschwindet und macht Platz für einen Text. Wir haben bereits eine Standardmeldung für dich vorbereitet ("Vielen Dank für deine Unterstützung!"), du kannst sie aber völlig frei anpassen und formatieren.

- **Weiterleitung (Redirect to a URL):** Nutze diese Option, wenn du die Person nach der Unterschrift auf eine spezielle "Danke"-Seite auf deiner eigenen Homepage, oder zu einer Spendenseite weiterleiten möchtest. Vergiss nicht, die vollständige URL (inkl. `https://`) anzugeben!

## 3. Eigene Formularfelder (Custom Campaign Fields)

Dies ist das Herzstück deiner Kampagne. Hier bestimmst du, welche Daten du von deinen Unterstützer\*innen abfragen möchtest (z.B. Vorname, E-Mail, Postleitzahl).

Du kannst Felder über den Button **"Add Custom Field"** hinzufügen und ihre Reihenfolge jederzeit per Drag & Drop verändern.

Für jedes Feld musst du Folgendes definieren:

- **Interne Bezeichnung (Internal Key):** Das ist der Name für die Datenbank-Spalte und den späteren Export (z.B. `first_name` oder `plz`). Er darf **keine Leerzeichen** enthalten!

- **Typ:** Ist es ein kurzes Textfeld, eine Checkbox (z.B. für Newsletter-Opt-ins) oder ein Datumsfeld?

- **Öffentliche Beschriftung (Public Label):** Das ist der Text, den die Nutzer\*innen über dem Eingabefeld sehen (z.B. _Vorname_ oder _Ich möchte den Newsletter abonnieren_).

- **Pflichtfeld (Is Required):** Muss das Feld zwingend ausgefüllt werden?

### ⚠️ Wichtig: Das Eindeutige Erkennungsmerkmal (Unique Identifier)

Damit niemand die Petition zweimal unterschreibt, muss das System wissen, wie es Personen unterscheiden kann. Dafür gibt es den Schalter **"Use as Unique Identifier"**.

Dafür gelten drei strikte Regeln:

1.  Du **musst genau ein Feld** als Erkennungsmerkmal markieren (nicht null, nicht zwei).
2.  Dieses Feld muss zwingend ein **Pflichtfeld** sein.
3.  Dieses Feld muss vom Typ **Text** oder **E-Mail** sein (in der Regel wählt man hierfür die E-Mail-Adresse).

::: tip 💡 Gut zu wissen: Mehrfach-Unterschriften & Partner-Organisationen
**Was passiert, wenn eine Person die Kampagne zweimal unterschreibt – zum Beispiel einmal direkt bei dir und einmal über das Widget einer Partnerorganisation?**

In diesem Fall wird der Datensatz **beiden** Organisationen in ihrer jeweiligen Unterstützer\*innen-Tabelle gutgeschrieben (da jede Organisation diesen Kontakt rechtmässig über ihr eigenes Widget generiert hat).

Der globale **Gesamtzähler** der Kampagne (und der Fortschrittsbalken) ist jedoch intelligent: Er nutzt das _eindeutige Erkennungsmerkmal_ (z.B. die E-Mail-Adresse), um Duplikate herauszufiltern. In der Gesamtsumme der Kampagne wird diese Person also nur **ein einziges Mal** gezählt. So erhalten alle Partner\*innen ihre verdienten Daten, ohne dass das öffentliche Gesamtergebnis künstlich aufgebläht wird!
:::

Wenn du alle Felder ausgefüllt hast, klicke unten auf **Erstellen**. Deine Kampagne ist nun gespeichert und bereit, auf deiner Website eingebettet zu werden!
