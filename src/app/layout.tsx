import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adriaan Botha',
  description: 'And this is my portfolio',
  twitter: {
    card: 'summary_large_image',
    site: '@TheDevPhantom',
    creator: '@TheDevPhantom',
    images: [
      {
        url: '/twitter-header.png',
        width: 1200,
        height: 630,
        alt: 'Adriaan Botha'
      }
    ],
    title: 'Adriaan Botha'
  },
  openGraph: {
    type: 'website',
    url: 'https://adriaanbotha.com',
    title: 'Adriaan Botha',
    description: 'And this is my portfolio',
    images: [
      {
        url: '/twitter-header.png',
        width: 1200,
        height: 630,
        alt: 'Adriaan Botha'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
