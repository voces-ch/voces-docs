# Integration Webhook

Le webhook est l'integration la plus flexible. Lorsqu'une signature est creee, voces.ch envoie un payload (requete HTTP POST) vers l'URL que vous definissez.

## Configuration

1. Ouvrez la campagne.
2. Ajoutez une integration.
3. Choisissez **Webhook** et activez-la.
4. Renseignez:
   - **Endpoint URL** (obligatoire)
   - **Secret Token** (optionnel), transmis dans `X-Voces-Signature`

## Format du payload

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
