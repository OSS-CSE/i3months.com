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
      twitter: {
        card: 'summary_large_image',
        title: 'eziwiki - Beautiful Documentation Made Easy',
        description:
          'A beautiful, minimal wiki and documentation site generator inspired by Notion and Obsidian',
        images: ['/og-image.svg'],
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
      hidden: true,
      children: [
        {
          name: 'Kakao Tech Campus',
          path: 'experience/kakao-tech-campus',
          hidden: true,
        },
        {
          name: 'IWAZ',
          path: 'experience/iwaz',
          hidden: true,
        },
        {
          name: 'CHIRON SOFT',
          path: 'experience/chiron-soft',
          hidden: true,
        },
      ],
    },
    {
      name: 'Awards',
      hidden: true,
      children: [
        {
          name: 'NTIS Information Utilization',
          path: 'awards/ntis-information-utilization',
          hidden: true,
        },
        {
          name: 'K-Digital Challenge',
          path: 'awards/k-digital-challenge',
          hidden: true,
        },
        {
          name: 'Environmental Data Competition',
          path: 'awards/environmental-data-competition',
          hidden: true,
        },
      ],
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
