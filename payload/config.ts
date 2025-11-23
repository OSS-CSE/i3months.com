import { Payload } from '@/lib/payload/types';

/**
 * Main payload configuration for the landing page
 * This defines the site structure, navigation, and theme
 */
export const payload: Payload = {
  global: {
    title: 'Joonmo Jeong - Software Engineer',
    description: 'Software Engineer Joonmo Jeong. Interested in Robust Architecture.',
    favicon: '/favicon.ico',
    baseUrl: 'https://i3months.com',
    seo: {
      openGraph: {
        title: 'Joonmo Jeong - Software Engineer',
        description: 'Software Engineer Joonmo Jeong. Interested in Robust Architecture.',
        images: [
          {
            url: '/og-image.svg',
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
