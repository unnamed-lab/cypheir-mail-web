import type { Metadata } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { WebVitals } from './web-vitals';
import '@/styles/css/global.css'; // Styling
import { Footer } from '@/components/layout';

const webData = {
  title: 'Cypheir Creative: An Open-Source Hub for Designers & Devs 🌐🎨💻',
  desc: `Connect, create, and grow at Cypheir Creative—where designers and developers unite to innovate and share in an open-source world.`,
  siteName: 'Cypheir Creative',
  url: 'https://www.cypheir.xyz',
  img: {
    url: 'https://res.cloudinary.com/dbeh9dzsh/image/upload/v1713341461/cypheir_creative/thumb/thumbnail_main_yabey9.png',
    alt: 'Connect, create, and grow at Cypheir Creative—where designers and developers unite to innovate and share in an open-source world.',
    width: 800,
    height: 600,
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.svg',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  creator: '@unnamedcodes',
  keywords: [
    'cypheir',
    'cypheir creative',
    'nextjs',
    'developers',
    'cypher',
    'cipher',
    'unnamed',
    'color',
    'colour',
    'palette',
    'colour palette',
    'colour palatte',
    'cypheir-color-scheme',
  ],
};

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const siteURL = webData.url;
  return {
    title: webData.title,
    description: webData.desc,
    alternates: {
      canonical: `${siteURL}/${!id ? '' : id}`,
    },
    openGraph: {
      title: webData.title,
      description: webData.desc,
      url: webData.url,
      siteName: webData.siteName,
      images: {
        url: webData.img.url,
        alt: webData.img.alt,
        width: webData.img.width,
        height: webData.img.height,
      },

      locale: 'en_UK',
      type: 'website',
    },
    // robots: webData.robots,
    twitter: {
      card: 'summary_large_image',
      title: webData.title,
      description: webData.desc,
      creator: webData.creator,
      images: webData.img, // Must be an absolute URL
    },
    keywords: webData.keywords,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link
            rel="icon"
            href={
              'https://res.cloudinary.com/dbeh9dzsh/image/upload/v1713345413/cypheir_creative/static/favicon_mn9bzz.ico' ||
              './favicon.ico'
            }
            sizes="any"
          />
        </Head>
        {/* <WebVitals /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
