import { Payload } from '@/lib/payload/types';

/**
 * Main payload configuration for eziwiki
 * This defines the site structure, navigation, and theme
 */
export const payload: Payload = {
  global: {
    title: 'Joonmo Jeong - Software Engineer',
    description: 'Software Engineer Joonmo Jeong. Interested in Robust Architecture.',
    favicon: '/images/icons/favicon.svg',
    baseUrl: 'https://i3months.com',
    seo: {
      openGraph: {
        title: 'Joonmo Jeong - Software Engineer',
        description: 'Software Engineer Joonmo Jeong. Interested in Robust Architecture.',
        images: [
          {
            url: '/images/og/og-image.svg',
            width: 1200,
            height: 630,
            alt: 'Joonmo Jeong - Software Engineer',
          },
        ],
      },
    },
  },
  navigation: [
    {
      name: 'About Joonmo Jeong',
      path: 'intro',
    },
    {
      name: 'Experience',
      children: [
        {
          name: 'Kakao Tech Campus',
          path: 'experience/kakao-tech-campus',
        },
        {
          name: 'IWAZ',
          path: 'experience/iwaz',
        },
        {
          name: 'CHIRON SOFT',
          path: 'experience/chiron-soft',
        },
      ],
    },
    {
      name: 'Awards',
      children: [
        {
          name: 'NTIS Information Utilization',
          path: 'awards/ntis-information-utilization',
        },
        {
          name: 'K-Digital Challenge',
          path: 'awards/k-digital-challenge',
        },
        {
          name: 'Environmental Data Competition',
          path: 'awards/environmental-data-competition',
        },
      ],
    },
    {
      name: '✍️ Writing Content',
      color: '#e9d5ff',
      children: [
        {
          name: 'Markdown Basics',
          path: 'content/markdown-basics',
        },
        {
          name: 'Frontmatter',
          path: 'content/frontmatter',
        },
        {
          name: 'Code Blocks',
          path: 'content/code-blocks',
        },
      ],
    },
    {
      name: '🔧 Features',
      color: '#fcd34d',
      children: [
        {
          name: 'Hash-based Navigation',
          path: 'features/hash-navigation',
        },
        {
          name: 'Hidden Pages',
          path: 'features/hidden-pages',
        },
        {
          name: 'Dark Mode',
          path: 'features/dark-mode',
        },
        {
          name: 'Syntax Highlighting',
          path: 'features/syntax-highlighting',
        },
        {
          name: 'Validation & Testing',
          path: 'features/validation-testing',
        },
      ],
    },
    {
      name: '🚀 Deployment',
      color: '#fecaca',
      children: [
        {
          name: 'Static Export',
          path: 'deployment/static-export',
        },
        {
          name: 'GitHub Pages',
          path: 'deployment/github-pages',
        },
        {
          name: 'Vercel',
          path: 'deployment/vercel',
        },
      ],
    },
    {
      name: '🎨 Examples',
      color: '#d1fae5',
      children: [
        {
          name: 'Personal Wiki',
          path: 'examples/personal-wiki',
        },
        {
          name: 'API Documentation',
          path: 'examples/api-docs',
        },
        {
          name: 'Knowledge Base',
          path: 'examples/knowledge-base',
        },
      ],
    },
    {
      name: 'Secret Demo Page',
      path: 'secret-demo',
      hidden: true,
    },
  ],
  theme: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: '#ffffff',
    text: '#1f2937',
    sidebarBg: '#f9fafb',
    codeBg: '#f3f4f6',
  },
};

export default payload;
