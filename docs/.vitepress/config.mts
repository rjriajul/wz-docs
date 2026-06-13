import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WZML-X Docs",
  description: "Complete beginner-friendly documentation for WZML-X - a Telegram mirroring and leeching bot",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Commands', link: '/commands/' },
      { text: 'Settings', link: '/settings/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is WZML-X?', link: '/getting-started' },
          { text: 'Configuration', link: '/configuration' },
        ],
      },
      {
        text: 'Deployment',
        collapsed: true,
        items: [
          { text: 'Overview & Prerequisites', link: '/deployment/' },
          { text: 'VPS / Dedicated Server', link: '/deployment/vps' },
          { text: 'Heroku (WZ-Deploy)', link: '/deployment/heroku' },
        ],
      },
      {
        text: 'Commands',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/commands/' },
          { text: 'Basic', link: '/commands/basic' },
          { text: 'Mirror', link: '/commands/mirror' },
          { text: 'Leech', link: '/commands/leech' },
          { text: 'Uphoster (DDL)', link: '/commands/upload' },
          { text: 'File Management', link: '/commands/manage' },
          { text: 'Search', link: '/commands/search' },
          { text: 'Settings & RSS', link: '/commands/settings' },
          { text: 'Admin', link: '/commands/admin' },
          { text: 'Arguments', link: '/commands/arguments' },
        ],
      },
      {
        text: 'Settings',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/settings/' },
          { text: 'User Settings', link: '/settings/user' },
          { text: 'Bot Settings', link: '/settings/bot' },
        ],
      },
      {
        text: 'Usage Guide',
        items: [
          { text: 'Upload Destinations', link: '/upload-destinations' },
          { text: 'Mirroring', link: '/mirroring' },
          { text: 'Leeching', link: '/leeching' },
        ],
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Advanced Features', link: '/advanced-features' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SilentDemonSD/WZML-X' },
      { icon: { svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' }, link: 'https://t.me/WZML_X' },
    ],
    editLink: {
      pattern: 'https://github.com/rjriajul/wz-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Made with ❤️ by <a href="https://github.com/rjriajul">rjriajul</a>',
      copyright: 'Docs for <a href="https://github.com/SilentDemonSD/WZML-X">WZML-X</a>',
    },
    search: {
      provider: 'local',
    },
  },
})
