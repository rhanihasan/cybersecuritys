// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hasan Rehni',
  tagline: 'Just keep moving forward..',
  favicon: 'img/favicon.ico',
  

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/myjourney/',



  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rhanihasan', // Usually your GitHub org/user name.
  projectName: 'myjourney', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  trailingSlash: false, // Add this line to remove trailing slashes from URLs
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Edit this on BPDOXS contact me 
          // Note: I welcome any questions, comments, or suggestions you may have. I am always open to constructive criticism and appreciate the opportunity to improve and grow in my career. 
      //Thank you for visiting my website.
         // editUrl:
           // 'https://bpdoxs.com/index.php/contact/',
        },
        // blog: {
        //  showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this " links.
        //  editUrl:
       //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
     //   },
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
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/employeelogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Cyber Security',
          },
          
          //{to: '/blog', label: 'Blog', position: 'left'},
          
          {
            href: 'https://bpdoxs.com/',
            label: 'BPDOXS',
            position: 'right',
          },
         
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resume & Docs',
            items: [
              {
                label: 'Hasan Resume',
                to: '/myjourney/docs/Hasanresume',
              },
              {
                label: 'CyberSecuritys',
                to: '/myjourney/docs/category/cybersecurity ',
                
              },
            ],
          },

          
          {
            title: 'Communitys',
            items: [
              //{
                //label: 'GitBook',
                //href: 'https://hasanrehni.gitbook.io/hasan/',
              //},
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/hasanrehni/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/hasan-rhani-767526210/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              //{
               // label: 'Blog',
               // to: '/blog',
              //},
              //{
                //label: 'GitHub',
                //href: 'https://github.com/facebook/docusaurus',
             // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hasan Rehni .`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
