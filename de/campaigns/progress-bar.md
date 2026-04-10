# Kampagnenziel und Fortschrittsbalken

Ein sichtbares Ziel motiviert Unterstützer\*innen und zeigt transparent, wie viel eine Kampagne bereits erreicht hat. In voces.ch kannst du für jede Kampagne ein spezifisches Ziel definieren, das im eingebetteten Widget als Fortschrittsbalken (Progress Bar) dargestellt wird.

## Kampagnenziel aktivieren

Um ein Ziel festzulegen, navigiere im Backend zu deiner Kampagne und öffne den Tab **Campaign Goal** (Kampagnenziel).

Aktiviere den Schalter **Kampagnenziel aktivieren** (Enable Campaign Goal).

## Zieltyp festlegen (Goal Type)

voces.ch bietet dir zwei verschiedene Möglichkeiten, den Fortschritt deiner Kampagne zu messen:

### 1. Anzahl der Einreichungen (Count Submissions)

Dies ist der Standardmodus für klassische Petitionen. Jeder erfolgreiche Eintrag in dein Formular (abgezogen der Duplikate bei [mehreren Partnerorganisationen](./campaign-partners.md)) zählt als **1**.

- _Beispiel:_ Du möchtest 10.000 Unterschriften sammeln. Jede unterzeichnende Person bringt den Fortschrittsbalken einen Schritt näher ans Ziel.

### 2. Feldwert summieren (Sum a Field Value)

Diese erweiterte Funktion erlaubt es dir, die Werte eines bestimmten Formularfeldes zusammenzurechnen. Das ist ideal für Crowdfunding, Spendenversprechen oder das Sammeln von Stunden/Kilometern.

- _Voraussetzung:_ Damit diese Option funktioniert, musst du im Bereich "Campaign Fields" (Kampagnenfelder) mindestens ein Feld vom Typ **Zahl** (Number) angelegt haben.
- _Beispiel:_ Du fragst im Formular: "Wie viele Bäume möchtest du pflanzen?" (Feldtyp: Zahl). Wenn Person A "5" und Person B "10" eingibt, addiert der Fortschrittsbalken diese Werte zu "15".

Wenn du "Feldwert summieren" auswählst, erscheint ein zusätzliches Dropdown-Menü namens **Zielfeld** (Goal Field). Hier werden dir automatisch alle Zahlenfelder deiner Kampagne zur Auswahl vorgeschlagen. Wähle das Feld aus, dessen Werte summiert werden sollen.

## Zielwert definieren (Goal Target)

Gib unter **Zielwert** die absolute Zahl ein, die du erreichen möchtest.

Verwende hierbei nur reine Zahlen ohne Formatierungen oder Trennzeichen. Wenn du beispielsweise zehntausend Unterschriften oder Franken sammeln möchtest, gib einfach `10000` ein. Dieser Wert definiert das Maximum (100%) deines Fortschrittsbalkens.
