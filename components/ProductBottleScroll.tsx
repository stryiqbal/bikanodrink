'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Product } from '@/data/products';

function ProductTextOverlays({ product, progress }: { product: Product; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const sections = [product.section1, product.section2, product.section3];
  const ranges: [number, number, number, number][] = [[-.01, 0, .2, .32], [.28, .38, .55, .67], [.62, .72, .9, 1]];
  return <div className="pointer-events-none absolute inset-0 z-10">
    {sections.map((section, i) => {
      const [a, b, c, d] = ranges[i];
      const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
      const y = useTransform(progress, [a, b, c, d], [26, 0, 0, -20]);
      return <motion.div key={section.title} style={{ opacity, y }} className={`absolute top-[40%] w-[min(90%,620px)] px-7 md:px-0 ${i === 0 ? 'left-0 right-0 top-[35%] mx-auto text-center md:top-[38%]' : i === 1 ? 'left-[7%] top-[34%] w-[min(82%,420px)] text-left md:left-[12%] md:top-[34%] md:w-[min(38vw,420px)]' : 'right-[7%] top-[34%] w-[min(82%,420px)] text-right md:right-[12%] md:top-[34%] md:w-[min(38vw,420px)]'}`}>
        <h1 className={`text-balance font-semibold tracking-[-.045em] text-white drop-shadow-lg ${i === 0 ? 'text-5xl leading-[.96] md:text-7xl' : 'text-4xl leading-[1.04] md:text-[3.25rem]'}`}>{i === 0 ? product.name : section.title}</h1>
        {section.subtitle && <p className={`mt-3 max-w-lg text-sm leading-relaxed text-white/90 drop-shadow md:mt-2 ${i === 0 ? 'mx-auto text-2xl font-light tracking-[-.025em] md:text-3xl' : `max-w-sm md:mt-4 md:text-base ${i === 2 ? 'ml-auto' : ''}`}`}>{i === 0 ? product.subName : section.subtitle}</p>}
        {i === 0 && <div className="mx-auto mt-6 flex w-fit items-center gap-4 text-left text-white drop-shadow md:mt-7">
          <span className="text-xl font-semibold tracking-tight md:text-2xl">₹120</span>
          <span className="h-10 w-px bg-white/45" aria-hidden="true" />
          <span className="text-[11px] leading-[1.65] text-white/90 md:text-xs">{product.features.map((feature) => <span key={feature} className="block">{feature}</span>)}</span>
        </div>}
      </motion.div>;
    })}
  </div>;
}

export default function ProductBottleScroll({ product }: { product: Product }) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const topLineOpacity = useTransform(scrollYProgress, [0, .025], [1, 0]);
  const progressRef = useRef(0);
  useEffect(() => scrollYProgress.on('change', (value) => { progressRef.current = value; }), [scrollYProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let alive = true;
    let lastFrame = -1;
    const frames: HTMLImageElement[] = [];
    const draw = () => {
      if (!alive) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) { raf = requestAnimationFrame(draw); return; }
      const targetW = Math.round(width * ratio), targetH = Math.round(height * ratio);
      if (canvas.width !== targetW || canvas.height !== targetH) { canvas.width = targetW; canvas.height = targetH; }
      const frameIndex = Math.min(149, Math.max(0, Math.round(progressRef.current * 149)));
      const img = frames[frameIndex];
      if (img?.complete && img.naturalWidth && frameIndex !== lastFrame) {
        ctx.clearRect(0, 0, targetW, targetH);
        const scale = Math.max(targetW / img.naturalWidth, targetH / img.naturalHeight);
        const w = img.naturalWidth * scale, h = img.naturalHeight * scale;
        ctx.drawImage(img, (targetW - w) / 2, (targetH - h) / 2, w, h);
        lastFrame = frameIndex;
      }
      raf = requestAnimationFrame(draw);
    };
    for (let i = 0; i < 150; i++) {
      const img = new Image();
      img.src = `${product.folderPath}/frame_${String(i + 1).padStart(3, '0')}.jpg`;
      img.onload = () => { if (i === 0) draw(); };
      frames.push(img);
    }
    const resize = new ResizeObserver(() => { lastFrame = -1; });
    resize.observe(section);
    draw();
    return () => { alive = false; cancelAnimationFrame(raf); resize.disconnect(); frames.forEach((img) => { img.onload = null; }); };
  }, [product]);

  return <section ref={sectionRef} className="relative h-[400vh]" aria-label={`${product.name} product story`}>
    <div className="sticky top-0 h-[100svh] overflow-hidden" style={{ background: product.gradient }}>
      <div className="absolute inset-0 opacity-[.16]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,.55) 1px,transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-label={`${product.name} drink can animation`} />
      <motion.div aria-hidden="true" style={{ opacity: topLineOpacity, backgroundColor: product.palette.accent }} className="pointer-events-none absolute inset-x-0 top-0 z-20 h-2 shadow-[0_0_10px_rgba(244,196,106,.45)]" />
      <div aria-hidden="true" style={{ backgroundColor: product.palette.accent }} className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2 shadow-[0_0_10px_rgba(244,196,106,.45)]" />
      <ProductTextOverlays product={product} progress={scrollYProgress} />
    </div>
  </section>;
}
