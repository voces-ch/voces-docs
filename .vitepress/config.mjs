import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
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
  },
});
