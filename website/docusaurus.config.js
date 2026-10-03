// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anizuno',
  tagline: 'Your anime. Pick up where you left off.',
  favicon: 'img/app-icon.png',
  url: 'https://p2devs.github.io',
  baseUrl: '/Anizuno/',
  trailingSlash: true,
  organizationName: 'p2devs',
  projectName: 'Anizuno',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: 'help', sidebarPath: './sidebars.js' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
  themeConfig: {
    image: 'img/app-icon.png',
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
    metadata: [
      { name: 'theme-color', content: '#0a0a0d' },
      {
        name: 'keywords',
        content:
          'Anizuno, anime app, anime library, airing schedule, Android, iOS, Web',
      },
    ],
    navbar: {
      title: 'Anizuno',
      logo: { alt: 'Anizuno', src: 'img/app-icon.png' },
      items: [
        { to: '/#features', label: 'The app', position: 'left' },
        { to: '/help', label: 'Help center', position: 'left' },
        {
          href: 'https://github.com/p2devs/Anizuno/releases',
          label: 'Releases',
          position: 'right',
        },
        {
          to: '/#download',
          label: 'Get Anizuno',
          position: 'right',
          className: 'navbar-download',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Anizuno',
          items: [
            { label: 'Get the app', to: '/#download' },
            { label: 'Watch on Web', href: 'https://capacity.rocks/' },
            {
              label: 'Release notes',
              href: 'https://github.com/p2devs/Anizuno/releases',
            },
          ],
        },
        {
          title: 'Need a hand?',
          items: [
            { label: 'Help center', to: '/help' },
            { label: 'Installation', to: '/help/installation' },
            { label: 'Contact us', href: 'mailto:anizuno@capacity.rocks' },
          ],
        },
        {
          title: 'Around the community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/AqBDUDMkKa' },
            { label: 'GitHub', href: 'https://github.com/p2devs/Anizuno' },
            { label: 'Support development', href: 'https://ko-fi.com/p2devs' },
          ],
        },
        {
          title: 'The details',
          items: [
            { label: 'Privacy', to: '/privacy' },
            { label: 'Terms', to: '/terms' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} P2 Devs. Made for your next favorite.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};
export default config;
