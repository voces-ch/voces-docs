# Custom campaign fields

As campaign host, you control what data is collected during the campaign lifecycle. To keep privacy and compliance manageable, **only the host can create and manage campaign fields.**

## Create a field

In campaign setup, go to **Custom Campaign Fields**. You can add as many fields as needed. For each field define:

- **Internal Key:** Database key (for example `first_name`). Must be unique and contain no spaces.
- **Public Label:** Text shown to signers (for example "First name"). Fully translatable.
- **Type:** Choose from short text, paragraph, email, date, checkbox, and more.
- **Required and Unique:** You must define exactly one field (usually email) as the unique identifier to prevent duplicate signatures.

## Route fields by form target (partner routing)

Not every field should be visible everywhere. You may want a partner-specific newsletter opt-in or a host-only internal code.

Instead of maintaining separate forms, voces uses a targeting engine. Use the **Display on which forms?** dropdown.

### 1. Global fields (default)

**Setup:** Leave the target dropdown empty.

**Result:** Field appears on host form and all partner forms. Use this for core data like first name, last name, and email.

### 2. Host-only fields

**Setup:** Select only `Campaign host`.

**Result:** Field appears only on the host form and is hidden for partner-source visitors.

### 3. Partner-specific fields

**Setup:** Select one or more specific partner organizations.

**Result:** Field appears only when the signer comes via those partner source links.

- Example: Add a checkbox saying "I agree to receive updates from Water NGO" and assign it only to that partner.

::: tip Partner setup requirement
Targeted field assignment requires active campaign partners. To learn how to add partners and generate source links, read the [campaign partners guide](/en/campaigns/campaign-partners.md).
:::
