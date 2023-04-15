// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ArcoLinux Guide',
  tagline: 'by _0081',
  favicon: 'img/sun.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ArcoLinux Guide',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub', //顶栏github
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '知识分享站',
            items: [
               {
                label: 'Arcolinux项目',
                href: 'https://arcolinux.info',
              },
               {
                label: '桌面和ArchLinux',
                href: 'https://arcolinuxd.com',
              },
               {
                label: '构建自己的iso',
                href: 'https://arcolinuxiso.com',
              },
            ],
          },
          {
            title: '传送门',
            items: [
              {
                label: 'ArcoLinux 官方网站',
                href: 'https://arcolinux.com',
              },
              {
                label: 'ArcoLinux 论坛',
                href: 'https://arcolinuxforum.com/',
              },
              {
                label: 'ArcoLinux GitHub 仓库',
                href: 'https://github.com/arcolinux',
              },
              {
                label: 'ArcoLinux YouTube 频道',
                href: 'https://www.youtube.com/@ErikDubois',
              },
  
            ],
          },
          {
            items: [
              {
                label: 'ArchLinux 官方网站',
                href: 'https://archlinux.org',
              },
              {
                label: 'Arch Wiki',
                href: 'https://wiki.archlinux.org/',
              },
              {
                label: 'ArchLinux 论坛',
                href: 'https://bbs.archlinux.org/',
              },
              {
                label: 'ArchLinux中文社区',
                href: 'https://aur.archlinux.org/',
              },
              {
                label: 'ArchLinux中文Wiki',
                href: 'https://wiki.archlinux.org.cn/',
              },
           
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} _0081. Built with Docusaurus. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
