---
outline: deep
---

# Unterstützer\*innen exportieren

Das Wichtigste an deiner Kampagne sind die gesammelten Daten. Bei voces.ch hast du jederzeit die volle Kontrolle darüber und kannst deine Unterstützer\*innen bequem als Datei (z.B. CSV oder Excel) herunterladen, um sie in deinem eigenen Newsletter-System oder CRM weiterzuverwenden.

Du hast zwei Möglichkeiten, Daten zu exportieren:

## 1. Export einer einzelnen Kampagne

Wenn du nur die Unterschriften einer ganz bestimmten Kampagne benötigst:

1.  Öffne die gewünschte Kampagne im Backend (Detailansicht).
2.  Klicke dort auf den **Exportieren**-Button.
3.  Du erhältst eine Datei, die ausschliesslich die Personen enthält, die für genau diese Kampagne unterschrieben haben.

## 2. Globaler Export (Alle Kampagnen)

Wenn du einen grossen Export über alle deine Kampagnen hinweg machen möchtest:

1.  Navigiere im linken Hauptmenü zum Bereich **Daten** und klicke auf **Unterschriften** (Data -> Signatures).
2.  Hier siehst du eine globale Tabelle aller gesammelten Unterschriften deiner Organisation.
3.  Markiere die gewünschten Einträge (oder wähle alle aus) und starte den Export.

## Besonderheiten beim Export von eigenen Formularfeldern

Beim Exportieren kannst du genau auswählen, welche deiner eigenen Formularfelder (Custom Fields) als Spalten in der Export-Datei erscheinen sollen. Dabei gibt es zwei wichtige Dinge zu beachten:

### Zusammengeführte Spalten (Gleicher interner Name)

Wenn du in verschiedenen Kampagnen eigene Felder mit dem **exakt gleichen internen Namen** (Internal Key) angelegt hast (z.B. heisst das Feld für die Postleitzahl in Kampagne A `plz` und in Kampagne B ebenfalls `plz`), ist voces.ch so intelligent, diese im Export zu **einer einzigen Spalte** zusammenzuführen. Das sorgt für eine sehr saubere, aufgeräumte Datenbank ohne doppelte Spalten.

### Leere Felder (Unterschiedliche Kampagnen)

Da du beim Export (insbesondere beim globalen Export) alle jemals erstellten Felder deiner Organisation zur Auswahl hast, kann es zu leeren Zellen kommen.

_Ein Beispiel:_ Du wählst für den Export das Feld `telefonnummer` aus, welches du aber nur für Kampagne A verwendet hast. In der exportierten Datei wird die Spalte "telefonnummer" für alle Personen, die Kampagne B (ohne Telefon-Feld) unterschrieben haben, logischerweise komplett leer sein. Wundere dich also nicht über leere Zellen in deinem Dokument!
