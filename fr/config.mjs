import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  label: "Francais",
  lang: "fr",
  link: "/fr/",
  title: "Documentation voces.ch",
  description: "Documentation utilisateur de la plateforme voces.ch",
  themeConfig: {
    sidebar: [
      {
        text: "Intro",
        items: [
          { text: "Qu'est-ce que voces.ch ?", link: "/fr/intro/about" },
          { text: "Bien commencer", link: "/fr/intro/getting-started" },
          { text: "Auto-hebergement", link: "/fr/intro/self-hosting" },
          { text: "Communaute", link: "/fr/intro/community" },
        ],
      },
      {
        text: "Campagnes",
        items: [
          { text: "Creer une campagne", link: "/fr/campaigns/create" },
          { text: "Integrer une campagne", link: "/fr/campaigns/embed" },
          {
            text: "Travailler avec des partenaires",
            link: "/fr/campaigns/campaign-partners",
          },
          {
            text: "Objectif et progression",
            link: "/fr/campaigns/progress-bar",
          },
          {
            text: "Champs personnalises",
            link: "/fr/campaigns/custom-fields",
          },
          {
            text: "Verification email",
            link: "/fr/campaigns/email-verification",
          },
          {
            text: "Traduire une campagne",
            link: "/fr/campaigns/translate",
          },
          { text: "Pages hebergees", link: "/fr/campaigns/hosted-pages" },
        ],
      },
      {
        text: "Soutiens",
        items: [
          { text: "Exporter les donnees", link: "/fr/supporters/export" },
        ],
      },
      {
        text: "Integrations",
        items: [
          {
            text: "Que sont les integrations ?",
            link: "/fr/integrations/about",
          },
          {
            text: "Integration Webhook",
            link: "/fr/integrations/webhook",
          },
          {
            text: "Integration Mailchimp",
            link: "/fr/integrations/mailchimp",
          },
        ],
      },
      {
        text: "Demo",
        items: [{ text: "Environnement de demo", link: "/fr/demo/how-to-use" }],
      },
      {
        text: "Legal",
        items: [
          {
            text: "Conditions d'utilisation",
            link: "/fr/legal/tos",
          },
          {
            text: "Politique de confidentialite",
            link: "/fr/legal/privacy",
          },
        ],
      },
    ],
    nav: [
      { text: "Bien commencer", link: "/fr/intro/getting-started" },
      { text: "Campagnes", link: "/fr/campaigns/create" },
      { text: "Soutiens", link: "/fr/supporters/export" },
      { text: "Demo", link: "/fr/demo/how-to-use" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/voces-ch/voces.ch" },
    ],
  },
});
