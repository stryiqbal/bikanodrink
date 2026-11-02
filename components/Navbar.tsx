'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';

export default function Navbar({ product }: { product: Product }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <header style={{ backgroundColor: scrolled ? `color-mix(in srgb, ${product.palette.surface} 82%, transparent)` : 'transparent' }} className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-black/10 shadow-sm backdrop-blur-2xl' : 'border-transparent'}`}>
    <nav className="relative mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 md:px-12" aria-label="Main navigation">
      <a href="#top" className="flex items-center" aria-label="Bikanodrink home">
        <Image src="/logo/logo.svg" alt="Bikanodrink" width={133} height={77} className="h-10 w-auto object-contain" priority />
      </a>
      <div className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 whitespace-nowrap text-[11px] font-medium uppercase tracking-[.14em] lg:flex xl:gap-9 ${scrolled ? 'text-black' : 'text-white'}`}><a href="#flavours" className="transition hover:text-[var(--flavour-accent)]">Flavours</a><a href="#story" className="transition hover:text-[var(--flavour-accent)]">Our story</a><a href="#health-benefits" className="transition hover:text-[var(--flavour-accent)]">Health benefits</a><a href="#shop" className="transition hover:text-[var(--flavour-accent)]">Shop</a></div>
      <a href="#find-us" className={`rounded-full px-5 py-3 text-[10px] font-semibold uppercase tracking-[.16em] shadow-[0_5px_22px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 ${scrolled ? 'bg-black text-white hover:bg-[#222222]' : 'bg-white text-[#171717] hover:bg-white/90'}`}>Order now</a>
    </nav>
  </header>;
}
