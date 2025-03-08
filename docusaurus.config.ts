import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "elcio-dalosto",
  tagline: "Tecnologia como o meio - não o fim.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://elcio-dalosto.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "elciodalosto", // Usually your GitHub org/user name.
  projectName: "elcio-dalosto", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },
  stylesheets: ["https://fonts.googleapis.com/css2?family=Sigmar&display=swap"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/styles-custom-common/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "img/logo.png",
    navbar: {
      title: "elcio-dalosto",
      logo: {
        alt: "HTS Logo",
        src: "img/logo.png",
        href: "/lp",
        target: "_self",
        style: {
          scale: "1",
          border: "none",
        },
      },
      items: [
        {
          to: "/timeline",
          label: "TIMELINE",
          position: "right",
        },
        {
          to: "/about",
          label: "ABOUT",
          position: "right",
        },
        {
          to: "/blog/welcome",
          label: "BLOG",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Legal",
          items: [
            {
              label: "Política de Privacidade",
              to: "/legal/privacy-policy",
            },
            // {
            //   label: "Termos de Uso",
            //   to: "/legal/terms",
            // },
          ],
        },
        {
          title: "Menu",
          items: [
            {
              label: "About",
              to: "about",
            },
            {
              label: "Linha do tempo",
              to: "timeline",
            },
            {
              label: "Contato",
              to: "contact",
            },
            {
              label: "Blog",
              to: "blog/welcome",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/elciodalosto/",
              au: "img/linkedin.png",
            },
            {
              label: "GitHub",
              href: "https://github.com/elciodalosto",
              socials: {
                github: "elciodalosto",
              },
            },
            {
              label: "Youtube",
              href: "https://youtube.com/@elciodalosto",
              icon: "img/youtube.png",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/elcio.dalosto/",
              icon: "img/instagram.png",
            },
          ],
        },
      ],
      copyright: `Copyright © from 2025 to ${new Date().getFullYear()} - Elcio Augusto Dalosto.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.duotoneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
