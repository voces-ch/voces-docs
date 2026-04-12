import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "voces.ch docs",
  // TODO: Enable darkmode when its implemented with the widgets
  appearance: false,
  description: "Documentation for the voces.ch platform",
  themeConfig: {
    editLink: {
      pattern: "https://github.com/voces-ch/voces-docs/edit/main/:path",
    },
  },
  locales: {
    de: {
      label: "Deutsch",
      lang: "de-DE",
      link: "/de/",
      title: "voces.ch Dokumentation",
      description: "Benutzer*innen-Dokumentation für die voces.ch Plattform",
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "voces.ch Documentation",
      description: "User documentation for the voces.ch platform",
    },
    fr: {
      label: "Français",
      lang: "fr-FR",
      link: "/fr/",
      title: "Documentation de voces.ch",
      description:
        "Documentation pour les utilisateurs de la plateforme voces.ch",
    },
    it: {
      label: "Italiano",
      lang: "it-IT",
      link: "/it/",
      title: "Documentazione di voces.ch",
      description: "Documentazione per gli utenti della piattaforma voces.ch",
    },
  },
});
