import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Tecnologia como o meio - não o fim.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://elcio-dalosto.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'elciodalosto', // Usually your GitHub org/user name.
  projectName: 'elcio-dalosto', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'HOME',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'menuSidebar',
          position: 'left',
          label: 'MENU',
        },
        // {
        //   to: '/blog',
        //   label: 'BLOG',
        //   position: 'left'
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {},
        {},
        {
          title: 'Legal',
          items: [
            {
              label: 'Política de Privacidade',
              to: '/docs/legal/privacy-policy',
            },
            {
              label: 'Termos de Uso',
              to: '/docs/legal/terms',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/elciodalosto/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/elciodalosto',
            },
            {
              label: 'Youtube',
              href: 'https://youtube.com/@elciodalosto',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/elcio.dalosto/',
            },
          ],
        },
        {},
        {},
      ],
      copyright: `Copyright © from 2025 to ${new Date().getFullYear()} - Elcio Augusto Dalosto.`,
    },
  prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
