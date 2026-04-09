# Benutzerdefinierte Kampagnenfelder

Als Host der Kampagne hast du die volle Kontrolle über die Daten, die während deiner gesamten Kampagne erfasst werden. Um Datenschutz, DSGVO-Konformität (bzw. DSG) und einen reibungslosen Ablauf zu gewährleisten, **kann nur der Host Kampagnenfelder erstellen und verwalten.** Dies garantiert, dass du immer genau weisst, welche Daten erfasst werden, selbst wenn Partner\*innen deine Kampagne verbreiten.

## Ein Feld erstellen

Navigiere bei der Konfiguration deiner Kampagne zum Abschnitt **Custom Campaign Fields** (Benutzerdefinierte Kampagnenfelder). Du kannst beliebig viele Felder hinzufügen. Für jedes Feld legst du Folgendes fest:

- **Interner Schlüssel (Internal Key):** Der Datenbankname für das Feld (z. B. `first_name`). Muss eindeutig sein und darf keine Leerzeichen enthalten.
- **Öffentliches Label (Public Label):** Der Text, den der Unterzeichner tatsächlich sieht (z. B. "Vorname"). Dieser ist vollständig übersetzbar.
- **Typ (Type):** Wähle zwischen Kurzem Text, Absatz, E-Mail, Datum, Checkbox (Opt-ins) usw.
- **Erforderlich & Einzigartig (Required & Unique):** Du musst genau ein Feld (normalerweise die E-Mail-Adresse) als _Eindeutigen Identifikator_ (Unique Identifier) festlegen, um doppelte Unterschriften zu verhindern.

## Felder zuweisen (Partner Routing)

Nicht alle Felder müssen für jeden sichtbar sein. Vielleicht möchtest du ein spezielles Newsletter-Opt-in für eine bestimmte Partner\*in oder einen internen Referenzcode, der nur auf deinem Hauptformular (Host) erscheint.

Anstatt separate Formulare zu erstellen, nutzt Voces eine leistungsstarke **Targeting-Engine**. Achte beim Erstellen eines Feldes auf das Dropdown-Menü **Display on which forms?** (Auf welchen Formularen anzeigen?).

Du hast drei Möglichkeiten:

### 1. Globale Felder (Standard)

**So richtest du es ein:** Lass das Ziel-Dropdown-Menü komplett leer.
**Was es bewirkt:** Dieses Feld erscheint auf deinem Haupt-Host-Formular UND auf jedem einzelnen Partner\*innen-Formular. Verwende dies für Kerndaten wie Vorname, Nachname und E-Mail.

### 2. Nur-Host-Felder

**So richtest du es ein:** Wähle genau `Campaign host` aus dem Dropdown-Menü.
**Was es bewirkt:** Dieses Feld ist _nur_ sichtbar, wenn Unterzeichner deinen Haupt-Kampagnenlink besuchen. Wenn ein Unterzeichner über einen Partner\*innen-Link kommt, wird dieses Feld komplett ausgeblendet.

### 3. Partner\*innenspezifische Felder

**So richtest du es ein:** Wähle eine oder mehrere spezifische Partner\*innenorganisationen aus dem Dropdown-Menü aus.
**Was es bewirkt:** Dieses Feld erscheint _nur_, wenn ein Unterzeichner über den Quell-Link dieser spezifischen Partner\*in auf das Formular zugreift.

- _Beispiel:_ Du kannst eine Checkbox mit der Aufschrift _"Ich stimme zu, Updates von der NGO Wasser zu erhalten"_ erstellen und diese gezielt nur der Partner\*in "NGO Wasser" zuweisen.

::: tip 💡 Partner\*innen verwalten
Die gezielte Zuweisung von Feldern setzt voraus, dass du aktive Kampagnenpartner\*innen hast. Um zu erfahren, wie du Quell-Links generierst und Partner einbindest, lies den [Leitfaden für Kampagnenpartner\*innen](/de/campaigns/campaign-partners.md).
:::
