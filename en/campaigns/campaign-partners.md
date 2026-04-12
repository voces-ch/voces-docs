# Add partner organizations

voces.ch makes it easy to run shared campaigns with other organizations. Instead of invitation emails, linking works via an **organization UUID** and a custom **tracking slug**.

## 1. Find the partner organization's UUID

To add a partner organization, you need their organization UUID.

The partner can find it in their own voces.ch backend:

1. Sign in and go to **Organization settings** from the left menu.
2. Copy the displayed **Organization UUID**.
3. Send that UUID to the host organization.

## 2. Add the partner to your campaign

Once you have the UUID:

1. Open the campaign in backend detail view.
2. In the **Campaign Partners** section, click add.
3. Enter the partner UUID.
4. Set a **tracking slug** (for example `greenpeace` or `climate-strike`). The slug must have no spaces and uniquely identifies that partnership.

The organization can now officially collect signatures for this campaign.

## 3. Attribute signatures with the `source` parameter

Now organizations share one campaign progress bar. To identify who generated a signature, use the tracking slug as `source`.

### Method A: Embedded widget

If the partner embeds the form on their own website, they use the same campaign UUID but add `source`:

```html
<script>
  window.voces.widget({
    target: "#voces-widget-container",
    campaignUuid: "CAMPAIGN-UUID",
    source: "YOUR-TRACKING-SLUG",
    theme: "minimal",
    lang: "en",
  });
</script>
```

### Method B: URL parameter (`?source=`)

If the partner shares a link to your website (for example in newsletters or social posts), they can append:

`https://your-website.example/our-petition?source=YOUR-TRACKING-SLUG`

The widget reads `?source=...` automatically from the browser URL. If someone signs through that link, the signature is assigned to the partner organization.

::: tip Good to know: duplicate signatures and partners
What if someone signs twice, once directly on your host form and once through a partner source?

That contact appears in **both** organizations' signature tables (because each legally acquired the contact through their own form context).

The global campaign total and progress bar are deduplicated using a unique identifier (usually email), so the person counts only once in the public total.
:::
