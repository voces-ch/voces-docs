---
outline: deep
---

# Embed a campaign on your website

After creating a campaign, you usually want to publish it on your own website. You can do this with the embeddable **voces widget**.

## Embed configurator (easiest method)

In the voces.ch backend, you can use a built-in configurator instead of writing code manually:

1. Open your campaign in the backend.
2. Scroll to **Embed** (widget configurator).
3. Configure widget options:
   - **Theme:** Choose a design matching your site (for example _minimal_, _impact_, _neon_).
     - [Minimal theme example](https://demo.voces.ch/demo/widget/view?theme=minimal#form)
     - [Card theme example](https://demo.voces.ch/demo/widget/view?theme=card#form)
     - [Registry theme example](https://demo.voces.ch/demo/widget/view?theme=registry#form)
     - [Neon theme example](https://demo.voces.ch/demo/widget/view?theme=neon#form)
     - [Impact theme example](https://demo.voces.ch/demo/widget/view?theme=impact#form)
     - You can also choose `unstyled` and provide your own CSS.
   - **Language:** Select default form language.
   - **Progress bar:** Decide whether the dynamic counter is shown.
   - **Version:** Choose which widget version to embed. Usually use a pinned version that starts with `v` instead of `latest` to avoid unexpected changes.
   - **Source:** Defines which organization receives attribution for signatures. This can be overridden with URL parameter `source=partner-slug`.
   - **Origin:** Signature source context (for example `newsletter` or `instagram`). Can be overridden with `origin=free-text`.
4. The final HTML and JavaScript code is generated live.
5. Click **Copy code** and paste it where the form should appear on your site.

## How the code works (manual setup)

If you want full control, here is the structure.

### 1. Place a container

Add an empty `div` at the exact location where the form should render:

```html
<div id="my-petition"></div>
```

### 2. Load the script

Load voces widget JavaScript, ideally before the closing `</body>` tag:

```html
<script src="https://YOUR-VOCES-DOMAIN.ch/widget/latest/voces-widget.js"></script>
```

If you self-host voices, replace the URL with your installation URL.

### 3. Initialize the widget

Add initialization code directly below the script tag:

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    if (window.voces && typeof window.voces.widget === "function") {
      window.voces.widget({
        target: "#my-petition",
        campaignUuid: "YOUR-CAMPAIGN-UUID",
        theme: "minimal",
        lang: "en",
        showProgress: true,
      });
    } else {
      console.error("voces widget could not be loaded.");
    }
  });
</script>
```

### Configuration options

- **`target`** (required): Render target, must match container ID including `#`.
- **`campaignUuid`** (required): Unique campaign ID from backend detail view.
- **`theme`**: Visual style (`minimal`, `card`, `impact`, `registry`, `neon`).
- **`lang`**: Form language (`de`, `en`, `fr`, `it`, ...). Translates system texts and loads translated custom fields if configured.
- **`showProgress`**: Set `true` to show progress bar. It appears only if a campaign goal is configured.
