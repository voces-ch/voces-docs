import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  label: "Italiano",
  lang: "it",
  link: "/it/",
  title: "Documentazione voces.ch",
  description: "Documentazione utente della piattaforma voces.ch",
  themeConfig: {
    sidebar: [
      {
        text: "Intro",
        items: [
          { text: "Cos'e voces.ch?", link: "/it/intro/about" },
          { text: "Inizia subito", link: "/it/intro/getting-started" },
          { text: "Self-hosting", link: "/it/intro/self-hosting" },
          { text: "Comunita", link: "/it/intro/community" },
        ],
      },
      {
        text: "Campagne",
        items: [
          { text: "Crea una campagna", link: "/it/campaigns/create" },
          {
            text: "Incorpora una campagna",
            link: "/it/campaigns/embed",
          },
          {
            text: "Lavorare con partner",
            link: "/it/campaigns/campaign-partners",
          },
          {
            text: "Obiettivo e progresso",
            link: "/it/campaigns/progress-bar",
          },
          {
            text: "Campi personalizzati",
            link: "/it/campaigns/custom-fields",
          },
          {
            text: "Verifica email",
            link: "/it/campaigns/email-verification",
          },
          {
            text: "Tradurre una campagna",
            link: "/it/campaigns/translate",
          },
          { text: "Pagine ospitate", link: "/it/campaigns/hosted-pages" },
        ],
      },
      {
        text: "Sostenitori",
        items: [{ text: "Esporta dati", link: "/it/supporters/export" }],
      },
      {
        text: "Integrazioni",
        items: [
          {
            text: "Cosa sono le integrazioni?",
            link: "/it/integrations/about",
          },
          {
            text: "Integrazione Webhook",
            link: "/it/integrations/webhook",
          },
          {
            text: "Integrazione Mailchimp",
            link: "/it/integrations/mailchimp",
          },
        ],
      },
      {
        text: "Demo",
        items: [{ text: "Ambiente demo", link: "/it/demo/how-to-use" }],
      },
      {
        text: "Legale",
        items: [
          {
            text: "Termini di servizio",
            link: "/it/legal/tos",
          },
          {
            text: "Privacy",
            link: "/it/legal/privacy",
          },
        ],
      },
    ],
    nav: [
      { text: "Inizia subito", link: "/it/intro/getting-started" },
      { text: "Campagne", link: "/it/campaigns/create" },
      { text: "Sostenitori", link: "/it/supporters/export" },
      { text: "Demo", link: "/it/demo/how-to-use" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/voces-ch/voces.ch" },
    ],
  },
});
