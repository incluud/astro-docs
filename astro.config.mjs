// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Accessible Astro Documentation',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/incluud',
      },
      editLink: {
        baseUrl: 'https://github.com/incluud/astro-docs/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting started',
          items: [
            {
              label: 'Introduction',
              link: '/getting-started/introduction',
            },
            {
              label: 'Why accessibility matters',
              link: '/getting-started/accessibility',
            },
            {
              label: 'Quick start guide',
              link: '/getting-started/quick-start',
            },
            {
              label: 'Installation options',
              link: '/getting-started/installation',
            },
          ],
        },
        {
          label: 'Themes',
          items: [
            {
              label: 'Accessible Astro Starter',
              link: '/themes/accessible-astro-starter',
            },
            {
              label: 'Accessible Astro Dashboard',
              link: '/themes/accessible-astro-dashboard',
            },
          ],
        },
        {
          label: 'Components',
          items: [
            {
              label: 'Overview',
              link: '/components/overview',
            },
            {
              label: 'Accordion',
              link: '/components/accordion',
            },
            {
              label: 'Breadcrumbs',
              link: '/components/breadcrumbs',
            },
            {
              label: 'Card',
              link: '/components/card',
            },
            {
              label: 'DarkMode',
              link: '/components/dark-mode',
            },
            {
              label: 'Media',
              link: '/components/media',
            },
            {
              label: 'Modal',
              link: '/components/modal',
            },
            {
              label: 'Notification',
              link: '/components/notification',
            },
            {
              label: 'Pagination',
              link: '/components/pagination',
            },
            {
              label: 'SkipLinks',
              link: '/components/skip-links',
            },
            {
              label: 'Tabs',
              link: '/components/tabs',
            },
          ],
        },
        {
          label: 'Contributing',
          items: [
            {
              label: 'How to contribute',
              link: '/contributing/how-to',
            },
            {
              label: 'Development setup',
              link: '/contributing/development',
            },
            {
              label: 'Code style guide',
              link: '/contributing/style-guide',
            },
            {
              label: 'Reporting issues',
              link: '/contributing/issues',
            },
            {
              label: 'Supporting the project',
              link: '/contributing/support-us',
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    icon(),
  ],
});
