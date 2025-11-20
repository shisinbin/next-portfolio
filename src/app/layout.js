import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '@/assets/styles/globals.css';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  title: {
    template: '%s • shisinbin',
    default: 'Dev Portfolio • shisibin',
  },
  description:
    'Portfolio of a web developer building React + Next.js projects',
  openGraph: {
    title: 'shisinbin.dev',
    description: 'Web developer portfolio',
    url: 'https://shisinbin.dev',
    siteName: 'shisinbin.dev',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shisinbin.dev',
    description: 'Web developer portfolio',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={clsx(mainFont.variable, monoFont.variable)}
      suppressHydrationWarning={true}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
