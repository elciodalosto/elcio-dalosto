import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'elcio-dalosto',
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
          customCss: './src/styles-custom-common/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'elcio-dalosto',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
        href: '/',
        target: '_self',
        style: {
          scale: '1.3'
        },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'menuSidebar',
          position: 'left',
          label: 'MENU',
        },
        // {
        //   to: '/timeline',
        //   label: 'TIMELINE',
        //   position: 'left'
        // },
        // {
        //   to: '/about',
        //   label: 'ABOUT',
        //   position: 'left'
        // },
        {
          to: '/blog/welcome',
          label: 'BLOG',
          position: 'left'
        },
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
          title: 'Timeline',
          items: [
            {
              label: 'Formações',
              to: 'docs/timeline/#formations',
            },
            {
              label: 'Experiências',
              to: 'docs/timeline/#experiences',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/elciodalosto/',
              au: 'img/linkedin.png',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/elciodalosto',
              socials: {
                github: 'elciodalosto',
              },
            },
            {
              label: 'Youtube',
              href: 'https://youtube.com/@elciodalosto',
              icon: 'img/youtube.png',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/elcio.dalosto/',
              icon: 'img/instagram.png',
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
