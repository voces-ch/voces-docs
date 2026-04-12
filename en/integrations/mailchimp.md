# Mailchimp integration

With the Mailchimp integration, people who sign your campaign are automatically synced to your email audience.

> **GDPR and privacy:** Our integration uses a secure sync approach (MD5 hash). New contacts are added. Existing contacts are updated without overwriting their subscription status or triggering a new confirmation email.

## Setup

1. Open your campaign in the voces.ch backend.
2. Go to **Integrations** and choose type **Mailchimp**.
3. Make sure integration is **Active**, then fill in the fields below.

### 1. API credentials

- **API Key:** Find it in Mailchimp under _Account > Extras > API keys_.
- **Audience ID (List ID):** Find it under _Audience > Settings > Audience name and defaults_.

### 2. Opt-in check (important)

You may only add people to a newsletter if they explicitly consent.

In **Opt-In Checkbox**, choose the campaign field supporters must check for newsletter consent (for example _"Yes, keep me updated"_).

::: info Note
Only supporters who checked this box are sent to Mailchimp.
:::

### 3. Merge fields (field mapping)

Map voces.ch fields to Mailchimp fields:

- Click **Add row**.
- On the left, enter the voces.ch internal field key (for example `first_name`).
- On the right, enter the Mailchimp merge tag (for example `FNAME`). Find tags under _Audience > Settings > Audience fields and |MERGE| tags_.
- **Required:** You must map an email field (for example `email` -> `EMAIL`).

::: tip Example mapping

- `email` -> `EMAIL`
- `first_name` -> `FNAME`
- `last_name` -> `LNAME`

:::
