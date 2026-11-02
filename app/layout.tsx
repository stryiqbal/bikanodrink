import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
export const metadata: Metadata = {
  title: 'Bikanodrink | Signature Flavours',
  description: 'Meet Bikanodrink: Badam, Chocolate, Coffee and Thandai. Find your new favourite flavour.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={outfit.variable}>{children}</body></html>;
}
