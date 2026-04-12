# Integrazione Webhook

Il webhook e l'integrazione piu flessibile. Quando viene creata una firma, voces.ch invia un payload (richiesta HTTP POST) all'URL definito da te.

## Configurazione

1. Apri la campagna.
2. Aggiungi una integrazione.
3. Seleziona **Webhook** e attivala.
4. Compila:
   - **Endpoint URL** (obbligatorio)
   - **Secret Token** (opzionale), inviato in `X-Voces-Signature`

## Formato payload

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
