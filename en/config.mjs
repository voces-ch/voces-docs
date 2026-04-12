import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
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
          { text: "Our beliefs", link: "/en/intro/declaration-of-purpose" },
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
});
