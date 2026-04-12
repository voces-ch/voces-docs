# Webhook integration

A webhook is the most flexible integration type. As soon as someone signs, voces.ch sends a data payload (HTTP POST request) to a URL you define.

This is ideal for connecting voces.ch with automation tools like **Zapier**, **Make**, **n8n**, or your own custom software.

## Setup

1. Open your campaign in the voces.ch backend.
2. Go to **Integrations** and add a new one.
3. Choose type **Webhook** and make sure it is **Active**.
4. Fill in:
   - **Endpoint URL (required):** The URL that should receive the payload.
   - **Secret Token (optional):** Add a secret for request verification. voces.ch sends it in the `X-Voces-Signature` header so your server can verify the request origin.

## Payload format

When a signature is created, voces.ch sends JSON like this:

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
