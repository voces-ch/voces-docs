---
title: Email verification (double opt-in)
description: How to configure email verification for your voces campaigns.
outline: deep
---

# Email verification (double opt-in)

To improve data quality and reduce spam entries, voces lets you enable email verification (double opt-in, DOI) per campaign.

When enabled, supporters receive a confirmation link by email after submitting the form. Their signature only counts toward campaign goals after they click that link.

## Enable verification

Open campaign settings and go to the **Email Verification** tab.

1. Turn on **Require Email Verification**.
2. Once enabled, additional configuration options appear.

## Map the email field

voces must know which email field to use for the confirmation email.

- In **Email Field for Verification**, choose the matching field.
- **Important:** This dropdown only shows fields configured as type **Email** and marked as **Required**.

## Define post-verification action

You can define exactly what happens after a supporter clicks the verification link. In **Post-Verification Action**, choose one:

### Option 1: Show a success message

Default behavior. The person is sent to a voces thank-you page.

- **Verification Success Message:** Enter the exact message shown on the page.
- Tip: This text is translatable. For multilingual campaigns, set one message per language.

### Option 2: Redirect to a URL

Use this if you want to send supporters to your own website after verification (for example a donation page or campaign landing page).

- **Verification Success URL:** Enter full URL including `https://`.
- This URL can also be translated by campaign language.
