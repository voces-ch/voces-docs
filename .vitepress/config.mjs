import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "voces.ch docs",
  description: "Documentation for the voces.ch platform",
  locales: {
    de: {
      label: "Deutsch",
      lang: "de",
      link: "/de/",
      title: "voces.ch Dokumentation",
      description: "Benutzer*innen-Dokumentation für die voces.ch Plattform",
      themeConfig: {
        sidebar: [
          {
            text: "Intro",
            items: [
              { text: "Was ist voces.ch?", link: "/de/intro/about" },
              { text: "Los gehts!", link: "/de/intro/getting-started" },
              { text: "Selber hosten", link: "/de/intro/self-hosting" },
              { text: "Community-Forum", link: "/de/intro/community" },
            ],
          },
          {
            text: "Kampagnen",
            items: [
              { text: "Eine Kampagne erstellen", link: "/de/campaigns/create" },
              { text: "Kampagne einbetten", link: "/de/campaigns/embed" },
              {
                text: "Mit Partner*innen arbeiten",
                link: "/de/campaigns/campaign-partners",
              },
              {
                text: "Kampagnenziel und Fortschritt",
                link: "/de/campaigns/progress-bar",
              },
              {
                text: "Benutzerdefinierte Felder",
                link: "/de/campaigns/custom-fields",
              },
              {
                text: "E-Mail Verifizierung",
                link: "/de/campaigns/email-verification",
              },
              { text: "Kampagne übersetzen", link: "/de/campaigns/translate" },
              { text: "Kampagnen-Seiten", link: "/de/campaigns/hosted-pages" },
            ],
          },
          {
            text: "Unterstützer*innen",
            items: [
              { text: "Daten exportieren", link: "/de/supporters/export" },
            ],
          },
          {
            text: "Integrationen",
            items: [
              {
                text: "Was sind Integrationen?",
                link: "/de/integrations/about",
              },
              {
                text: "Webhook Integration",
                link: "/de/integrations/webhook",
              },
              {
                text: "Mailchimp Integration",
                link: "/de/integrations/mailchimp",
              },
            ],
          },
          {
            text: "Demo",
            items: [{ text: "Demo Umgebung", link: "/de/demo/how-to-use" }],
          },
          {
            text: "Rechtliches",
            items: [
              {
                text: "Nutzungsbedingungen",
                link: "/de/legal/tos",
              },
              {
                text: "Datenschutzerklärung",
                link: "/de/legal/privacy",
              },
            ],
          },
        ],
        nav: [
          { text: "Los gehts!", link: "/de/intro/getting-started" },
          { text: "Kampagnen", link: "/de/campaigns/create" },
          { text: "Unterstützer*innen", link: "/de/supporters/export" },
          { text: "Demo", link: "/de/demo/how-to-use" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/voces-ch/voces.ch" },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      title: "voces.ch Documentation",
      description: "Documentation for users of the voces.ch platform",
      themeConfig: {
        sidebar: [
          {
            text: "Intro",
            items: [
              { text: "What is voces.ch?", link: "/en/intro/about" },
              { text: "Getting started", link: "/en/intro/getting-started" },
              { text: "Self-hosting", link: "/en/intro/self-hosting" },
              { text: "Community forum", link: "/en/intro/community" },
            ],
          },
          {
            text: "Campaigns",
            items: [
              { text: "Create a campaign", link: "/en/campaigns/create" },
              { text: "Embed campaign", link: "/en/campaigns/embed" },
              {
                text: "Work with partners",
                link: "/en/campaigns/campaign-partners",
              },
              {
                text: "Campaign goal and progress",
                link: "/en/campaigns/progress-bar",
              },
              {
                text: "Custom fields",
                link: "/en/campaigns/custom-fields",
              },
              {
                text: "Email verification",
                link: "/en/campaigns/email-verification",
              },
              { text: "Translate campaign", link: "/en/campaigns/translate" },
              { text: "Hosted pages", link: "/en/campaigns/hosted-pages" },
            ],
          },
          {
            text: "Supporters",
            items: [{ text: "Export data", link: "/en/supporters/export" }],
          },
          {
            text: "Integrations",
            items: [
              {
                text: "What are integrations?",
                link: "/en/integrations/about",
              },
              {
                text: "Webhook integration",
                link: "/en/integrations/webhook",
              },
              {
                text: "Mailchimp integration",
                link: "/en/integrations/mailchimp",
              },
            ],
          },
          {
            text: "Demo",
            items: [{ text: "Demo environment", link: "/en/demo/how-to-use" }],
          },
          {
            text: "Legal",
            items: [
              {
                text: "Terms of service",
                link: "/en/legal/tos",
              },
              {
                text: "Privacy policy",
                link: "/en/legal/privacy",
              },
            ],
          },
        ],
        nav: [
          { text: "Getting started", link: "/en/intro/getting-started" },
          { text: "Campaigns", link: "/en/campaigns/create" },
          { text: "Supporters", link: "/en/supporters/export" },
          { text: "Demo", link: "/en/demo/how-to-use" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/voces-ch/voces.ch" },
        ],
      },
    },
    fr: {
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
            items: [
              { text: "Environnement de demo", link: "/fr/demo/how-to-use" },
            ],
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
    },
    it: {
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
    },
  },
});
