import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: './.env.prod' })  
}
else //if environment is undefined - using swizzle
    require('dotenv').config({ path: './.env.local' }) 

function getSiteTagline() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "es": return 'Salva tus datos en el mismo sitio que ya tienes tus datos';
    default: return 'Your knowledge base in your cloud';
  }
}

const config: Config = {
  title: 'Opalo',
  tagline: getSiteTagline(),
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://opalo.cc',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opalocc', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Opalo',
      logo: {
        alt: 'Opalo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        //{
        //  type: 'localeDropdown',
        //  position: 'right',
        //},
        {
          to: '#tally-open=n0jV1Q&tally-layout=modal&tally-width=300&tally-hide-title=1&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0&level=free',
          label: 'Join Beta',
          position: 'right',
        },
        {href: 'https://github.com/opalocc/opalo-app', label: 'Github', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
           title: 'Navigation',
           items: [
             {
               label: 'Blog',
               to: '/blog',
             },
           ],
        },
        {
          title: 'Legal',
          items:[
            {
              label: 'Privacy Policy',
              to: 'privacy-policy'
            },
            {
              label: 'Terms & Conditions',
              to: 'terms-conditions'
            }
          ]
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
               label: 'GitHub',
               href: 'https://github.com/opalocc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Opalo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    
    {
      src: '/js/tawk.js',
      async: false,
    },
  ],
};

export default config;
