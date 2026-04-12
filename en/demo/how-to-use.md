# Demo environment (sandbox)

Want to try voces.ch without hosting your own instance or creating an account first? Use our official demo environment.

**[demo.voces.ch](https://demo.voces.ch)**

You can sign in to the backend, create campaigns, test partner features, and try the widget live.

> **Reset note:** This is a public sandbox. The demo database is reset automatically every day at **04:00**. Any changes and test signatures are deleted.

## 1. Test the backend (logins)

To demonstrate our strongest feature, **shared campaigns with separated data**, the demo is preconfigured with two fictional organizations running one campaign together.

| Role | Email / Login | Password | Organization | Partner slug |
| :--- | :--- | :--- | :--- | :--- |
| **Host organization** | `dev@voces.ch` | `password` | Action Committee Silver Lake | _(host)_ |
| **Partner organization** | `partner@voces.ch` | `password` | Silver Lake Nature Association | `nature-silver-lake` |

Try this:

1. Sign in as the host organization. You can see the campaign, form fields, and all general signatures.
2. Sign in as the partner organization. You can view the same campaign but cannot edit it. In analytics, you only see signatures collected through your partner slug.

## 2. Test the widget live (preview)

We also provide a live preview page so you can test widget appearance and behavior in the browser without writing code:

**[demo.voces.ch/demo/widget/view](https://demo.voces.ch/demo/widget/view)**

By default, the Silver Lake campaign is loaded. You can customize the widget through URL parameters.

### Available parameters

- **`theme`**: Changes design.
  - Example: `?theme=impact` (available: [`minimal`](https://demo.voces.ch/demo/widget/view?theme=minimal#form), [`impact`](https://demo.voces.ch/demo/widget/view?theme=impact#form), [`card`](https://demo.voces.ch/demo/widget/view?theme=card#form), [`neon`](https://demo.voces.ch/demo/widget/view?theme=neon#form), [`registry`](https://demo.voces.ch/demo/widget/view?theme=registry#form))
- **`lang`**: Changes widget language (test campaign supports German and French).
  - Example: `?lang=fr`
- **`showProgress`**: Shows or hides the progress bar.
  - Example: `?showProgress=true` or `?showProgress=false`
- **`source`**: Simulates signatures from a partner organization.
  - Example: `?source=nature-silver-lake`
- **`origin`**: Passes an origin parameter for tracking where the widget is embedded.
  - Example: `?origin=https://my-blog.example`

Combined example:

`https://demo.voces.ch/demo/widget/view?theme=impact&lang=fr&showProgress=true&source=nature-silver-lake`
