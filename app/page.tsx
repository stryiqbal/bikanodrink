'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import { products } from '@/data/products';

const flavourDescriptions: Record<string, { title: string; description: string }> = {
  thandai: {
    title: 'The Green Elixir',
    description: "Our Cream Pistachio drink uses only the finest roasted green pistachios and aromatic spices. Known for their rich nuttiness and vibrant color, these ingredients are expertly blended within hours of preparation to preserve every drop of nutrient-rich goodness. It's not just a drink, it's an authentic royal heritage experience.",
  },
  coffee: {
    title: 'The Coffee Awakening',
    description: "Our Cream Coffee uses only the finest hand-selected coffee beans. Known for their deep aroma and bold flavor, these beans are freshly roasted and brewed within hours to preserve every drop of energizing goodness. It's not just coffee, it's a rich morning awakening experience.",
  },
  chocolate: {
    title: 'The Chocolate Indulgence',
    description: "Our Cream Chocolate uses only the finest rich cocoa beans. Known for their velvety smoothness and deep flavor, these ingredients are carefully processed to preserve every drop of comforting goodness. It's not just chocolate, it's a pure indulgence experience.",
  },
  badam: {
    title: 'The Almond Classic',
    description: "Our Cream Almond milk uses only the finest premium almonds. Known for their natural creaminess and rich flavor, these almonds are freshly pressed to preserve every drop of nutrient-rich goodness. It's not just milk, it's a wholesome liquid gold experience.",
  },
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartAdded, setCartAdded] = useState(false);
  const reduceMotion = useReducedMotion();
  const product = products[currentIndex];
  const flavourDescription = flavourDescriptions[product.id];
  const changeProduct = (index: number) => setCurrentIndex((index + products.length) % products.length);
  useEffect(() => { window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); setCartAdded(false); }, [currentIndex, reduceMotion]);

  return <main id="top" style={{ '--flavour-accent': product.palette.accent } as CSSProperties}>
    <Navbar product={product} />
    <div id="flavours" className="relative">
      <AnimatePresence mode="wait">
        <motion.div key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .45 }}>
          <ProductBottleScroll product={product} />
          <section id="story" className="overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: product.palette.surface }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .65 }} className="mx-auto grid max-w-[1240px] items-center gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-16">
              <div className="max-w-xl">
                <h2 className="text-4xl font-medium leading-[1.04] tracking-[-.055em] md:text-6xl">{flavourDescription.title}</h2>
                <p className="mt-6 text-base leading-[1.85] text-[#56564d] md:text-lg">{flavourDescription.description}</p>
                <div id="health-benefits" className="mt-8 flex flex-wrap gap-2">{product.features.map((feature) => <span key={feature} style={{ borderColor: product.palette.border, color: product.palette.accent }} className="rounded-full border px-4 py-2 text-xs font-medium">{feature}</span>)}</div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(48,35,20,.12)]" style={{ backgroundColor: product.palette.section }}>
                <Image src={`/bahanbaku/${product.name}.png`} alt={product.detailsSection.imageAlt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
              </div>
            </motion.div>
            <div className="mx-auto mt-10 flex max-w-[1240px] items-center justify-between border-t pt-7" style={{ borderColor: product.palette.border }}>
              <button onClick={() => changeProduct(currentIndex - 1)} style={{ borderColor: product.palette.border }} className="min-h-11 rounded-full border px-5 text-xs uppercase tracking-[.14em] transition hover:brightness-90" aria-label="Previous flavour">&larr; <span className="ml-2 hidden sm:inline">Previous</span></button>
              <button onClick={() => changeProduct(currentIndex + 1)} style={{ borderColor: product.palette.border }} className="min-h-11 rounded-full border px-5 text-xs uppercase tracking-[.14em] transition hover:brightness-90" aria-label="Next flavour"><span className="mr-2 hidden sm:inline">Next</span>&rarr;</button>
            </div>
          </section>
          <section id="shop" className="px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: product.palette.section }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }} className="mx-auto grid max-w-[1240px] gap-5 rounded-[28px] p-5 shadow-[0_20px_70px_rgba(28,36,35,.06)] md:grid-cols-[.95fr_1.05fr] md:gap-8 md:p-8 lg:p-12" style={{ backgroundColor: product.palette.surface }}>
              <div className="order-2 flex flex-col justify-center px-2 py-5 md:order-2 md:px-3 md:py-8">
                <span className="text-[11px] font-semibold uppercase tracking-[.2em]" style={{ color: product.palette.accent }}>Purchase</span>
                <p className="mt-4 text-5xl font-semibold tracking-[-.06em] text-[#20211f] md:text-6xl" style={{ color: product.palette.accent }}>&#8377;120</p>
                <p className="mt-2 text-sm text-[#666a68]">per 300ml bottle</p>
                <div className="mt-7 flex flex-wrap gap-2.5">{product.buyNowSection.processingParams.map((tag) => <span key={tag} style={{ borderColor: product.palette.border }} className="rounded-full border bg-white/80 px-4 py-2.5 text-xs font-medium text-[#303431]">{tag}</span>)}</div>
                <div className="my-7 border-t" style={{ borderColor: product.palette.border }} />
                <div className="grid gap-5">
                  <div className="flex items-start gap-3"><span style={{ backgroundColor: product.palette.soft, color: product.palette.accent }} className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-semibold" aria-hidden="true">&#10003;</span><p className="pt-1 text-sm leading-relaxed text-[#555a58]">Next-day delivery available in metro cities. Chilled packaging ensures peak freshness.</p></div>
                  <div className="flex items-start gap-3"><span style={{ backgroundColor: product.palette.soft, color: product.palette.accent }} className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-semibold" aria-hidden="true">&#10003;</span><p className="pt-1 text-sm leading-relaxed text-[#555a58]">100% Satisfaction Guarantee. Not happy? We will replace it, no questions asked.</p></div>
                </div>
                <button type="button" onClick={() => setCartAdded(true)} className="mt-8 min-h-14 w-full rounded-2xl bg-[#171817] px-6 text-base font-semibold text-white transition hover:bg-[#30322f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd683d]">{cartAdded ? 'Added to Cart \u2713' : 'Add to Cart \u2014 \u20b9 120'}</button>
                <p aria-live="polite" className="sr-only">{cartAdded ? `${product.name} added to cart.` : ''}</p>
              </div>
              <div className="order-1 flex min-h-[340px] flex-col items-center justify-center rounded-[22px] px-7 py-12 text-center md:order-1 md:min-h-[480px] md:px-12" style={{ backgroundColor: `color-mix(in srgb, ${product.palette.surface} 75%, white)` }}>
                <div className="relative aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-2xl">
                  <Image src={`/purchase/${product.name}.png`} alt={`Bikanodrink ${product.name} purchase`} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
                </div>
                <p className="mt-7 max-w-md text-sm leading-relaxed text-[#777b79] md:text-base">Our proprietary extraction technology retains 99.9% of nutrients. Pure nature, amplified by science.</p>
              </div>
            </motion.div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-3">
      <div className="pointer-events-auto flex w-[min(88vw,440px)] items-center justify-between gap-1 overflow-x-auto rounded-full border border-white/25 bg-black/55 p-1.5 shadow-[0_10px_40px_rgba(30,34,23,.28)] backdrop-blur-2xl" aria-label="Choose a flavour">
        {products.map((item, index) => <button key={item.id} onClick={() => changeProduct(index)} aria-pressed={index === currentIndex} style={index === currentIndex ? { backgroundColor: product.palette.accent } : undefined} className={`flex min-h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full px-2.5 text-[11px] font-semibold transition ${index === currentIndex ? 'text-white' : 'text-white hover:bg-white/10'}`}>{item.name}</button>)}
      </div>
    </div>
    <div className="pointer-events-none fixed inset-y-0 left-4 z-30 hidden items-center md:flex">
      <button onClick={() => changeProduct(currentIndex - 1)} aria-label="Previous flavour" style={{ backgroundColor: product.palette.accent }} className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full border border-white/70 text-lg text-white shadow-lg transition hover:scale-105 hover:brightness-90">&lt;</button>
    </div>
    <div className="pointer-events-none fixed inset-y-0 right-4 z-30 hidden items-center md:flex">
      <button onClick={() => changeProduct(currentIndex + 1)} aria-label="Next flavour" style={{ backgroundColor: product.palette.accent }} className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full border border-white/70 text-lg text-white shadow-lg transition hover:scale-105 hover:brightness-90">&gt;</button>
    </div>
    <Footer product={product} />
  </main>;
}
