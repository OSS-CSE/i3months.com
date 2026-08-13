import { Payload } from '@/lib/payload/types';

/**
 * Site configuration.
 *
 * Navigation is written out below rather than discovered: this is a personal
 * site, not a wiki, so every page but the landing page is reachable only by
 * the links the landing page draws. See `content/configuration/navigation.md`
 * in the upstream project for the automatic alternative.
 */
export const payload: Payload = {
  global: {
    title: 'Joonmo Jeong - Software Engineer',
    description: 'Software Engineer Joonmo Jeong. Interested in Robust Architecture.',
    favicon: '/images/icons/favicon.svg',
    /**
     * The pages are written in Korean, so the interface speaks it too — the
     * search box, the contents rail and the previous/next links.
     */
    lang: 'ko',
    baseUrl: 'https://i3months.com',
    /**
     * Opaque digests, as this site has always published. Switching to 'path'
     * would give readable URLs but break every address already shared.
     */
    urlStrategy: 'hash',
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
        title: 'Joonmo Jeong - Software Engineer',
        description: 'Software Engineer Joonmo Jeong. Interested in Robust Architecture.',
        images: ['/images/og/og-image.svg'],
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
          name: 'Kakao Tech Campus Top Performance',
          path: 'awards/kakao-tech-campus-top-performance',
          hidden: true,
        },
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
