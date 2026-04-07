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
              { text: "Kampagne übersetzen", link: "/de/campaigns/translate" },
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
