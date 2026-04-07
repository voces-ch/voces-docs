# Webhook Integration

Ein Webhook ist die flexibelste Art der Integration. Er funktioniert wie eine sofortige Benachrichtigung: Sobald jemand unterschreibt, sendet voces.ch ein Datenpaket (einen HTTP POST Request) an eine von dir definierte URL.

Dies ist ideal, um voces.ch mit Automatisierungs-Tools wie **Zapier**, **Make**, **N8N** oder deiner eigenen individuellen Software zu verbinden.

## Einrichtung

1. Öffne deine Kampagne im voces.ch Backend.
2. Scrolle zum Bereich **Integrationen** und füge eine neue hinzu.
3. Wähle als Typ **Webhook** und stelle sicher, dass die Integration auf **Aktiv** gesetzt ist.
4. Fülle folgende Felder aus:
   - **Endpoint URL (Pflichtfeld):** Die Web-Adresse, an die das Datenpaket gesendet werden soll. Diese URL erhältst du in der Regel von Zapier, Make oder deinem eigenen Server.
   - **Secret Token (Optional):** Zur Sicherheit kannst du hier ein geheimes Passwort eintragen. voces.ch sendet diesen Token bei jedem Aufruf unsichtbar im Header (`X-Voces-Signature`) mit. So kann dein empfangender Server verifizieren, dass die Anfrage wirklich von voces.ch stammt.

## Das Datenformat (Payload)

Sobald eine Unterschrift eingeht, sendet voces.ch ein JSON-Paket in folgendem Format an deine URL:

```json
{
  "event": "signature.created",
  "signature_id": 1234,
  "campaign_id": 1,
  "organization_id": 1,
  "payload": {
    "first_name": "Maria",
    "last_name": "Muster",
    "email": "maria@example.com",
    "newsletter_opt_in": true
  },
  "signed_at": "2026-04-07T09:56:00Z"
}
```
