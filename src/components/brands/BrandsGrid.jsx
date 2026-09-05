import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useInView, animate, AnimatePresence } from 'framer-motion';

import rexnord from '../../assets/brands/rexnord.png';
import linkBelt from '../../assets/brands/link-belt.png';
import tsubaki from '../../assets/brands/tsubaki.png';
import reginaChain from '../../assets/brands/regina-chain.png';
import intralox from '../../assets/brands/intralox.png';
import goulds from '../../assets/brands/goulds.png';
import pedrollo from '../../assets/brands/pedrollo.png';
import ebara from '../../assets/brands/ebara.png';
import ksb from '../../assets/brands/ksb.png';
import altamira from '../../assets/brands/altamira.png';
import grundfos from '../../assets/brands/grundfos.png';
import translink from '../../assets/brands/translink.png';
import jasonIndustrial from '../../assets/brands/jason-industrial.png';
import martinSprocket from '../../assets/brands/martin-sprocket.png';
import timken from '../../assets/brands/timken.png';
import skf from '../../assets/brands/skf.png';
import fag from '../../assets/brands/fag.png';
import falk from '../../assets/brands/falk.png';
import koyo from '../../assets/brands/koyo.png';
import gates from '../../assets/brands/gates.png';
import zsgGroup from '../../assets/brands/zsg-group.png';
import ina from '../../assets/brands/ina.png';
import hiwin from '../../assets/brands/hiwin.png';
import thk from '../../assets/brands/thk.png';
import nsk from '../../assets/brands/nsk.png';
import rexroth from '../../assets/brands/rexroth.png';
import abb from '../../assets/brands/abb.png';
import baldor from '../../assets/brands/baldor.png';
import lsElectric from '../../assets/brands/ls-electric.png';
import transtecno from '../../assets/brands/transtecno.png';
import sewEurodrive from '../../assets/brands/sew-eurodrive.png';
import sumitomo from '../../assets/brands/sumitomo.png';
import leeson from '../../assets/brands/leeson.png';
import marathonElectric from '../../assets/brands/marathon-electric.png';
import weg from '../../assets/brands/weg.png';
import nord from '../../assets/brands/nord.png';
import lapp from '../../assets/brands/lapp.png';
import wago from '../../assets/brands/wago.png';
import dodge from '../../assets/brands/dodge.png';
import kbElectronics from '../../assets/brands/kb-electronics.png';
import brAutomation from '../../assets/brands/br-automation.png';

const allBrands = [
  { src: baldor, alt: 'Baldor' },
  { src: abb, alt: 'ABB' },
  { src: dodge, alt: 'Dodge' },
  { src: rexnord, alt: 'Rexnord' },
  { src: linkBelt, alt: 'Link-Belt' },
  { src: tsubaki, alt: 'Tsubaki' },
  { src: reginaChain, alt: 'Regina Chain' },
  { src: intralox, alt: 'Intralox' },
  { src: goulds, alt: 'Goulds' },
  { src: pedrollo, alt: 'Pedrollo' },
  { src: ebara, alt: 'Ebara' },
  { src: ksb, alt: 'KSB' },
  { src: altamira, alt: 'Altamira' },
  { src: grundfos, alt: 'Grundfos' },
  { src: translink, alt: 'Translink' },
  { src: jasonIndustrial, alt: 'Jason Industrial' },
  { src: martinSprocket, alt: 'Martin Sprocket' },
  { src: timken, alt: 'Timken' },
  { src: skf, alt: 'SKF' },
  { src: fag, alt: 'FAG' },
  { src: falk, alt: 'Falk' },
  { src: koyo, alt: 'Koyo' },
  { src: gates, alt: 'Gates' },
  { src: zsgGroup, alt: 'ZSG Group' },
  { src: ina, alt: 'INA' },
  { src: hiwin, alt: 'Hiwin' },
  { src: thk, alt: 'THK' },
  { src: nsk, alt: 'NSK' },
  { src: rexroth, alt: 'Rexroth' },
  { src: lsElectric, alt: 'LS Electric' },
  { src: transtecno, alt: 'Transtecno' },
  { src: sewEurodrive, alt: 'SEW-Eurodrive' },
  { src: sumitomo, alt: 'Sumitomo' },
  { src: leeson, alt: 'Leeson' },
  { src: marathonElectric, alt: 'Marathon Electric' },
  { src: weg, alt: 'WEG' },
  { src: nord, alt: 'Nord' },
  { src: lapp, alt: 'Lapp' },
  { src: wago, alt: 'Wago' },
  { src: kbElectronics, alt: 'KB Electronics' },
  { src: brAutomation, alt: 'B&R Automation' },
];

// Animated counting number
function AnimatedCounter({ to, duration = 2 }) {
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, motionVal, to, duration]);

  return <span ref={ref}>{display}</span>;
}

// Individual logo card with hover tooltip
function BrandCard({ brand, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.03, type: 'spring', damping: 20, stiffness: 200 }}
      whileHover={{
        scale: 1.08,
        boxShadow: '0 0 24px rgba(0, 180, 216, 0.35)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group aspect-square bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-neutral-200/60 dark:border-white/10 rounded-xl cursor-pointer overflow-visible"
      style={{ isolation: 'isolate' }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
        <img
          src={brand.src}
          alt={brand.alt}
          loading="lazy"
          className="max-h-10 sm:max-h-12 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply dark:mix-blend-normal dark:invert dark:brightness-200 dark:contrast-75"
        />
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-accent/50" />

      {/* Brand name tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <span className="whitespace-nowrap bg-primary dark:bg-neutral-800 text-white text-[10px] font-medium px-2 py-1 rounded-md shadow-lg">
              {brand.alt}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Brands() {
  // Duplicated list for seamless CSS marquee loop
  const marqueeList = [...allBrands, ...allBrands];

  return (
    <section id="marcas" className="py-24 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          {/* Animated counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20 }}
            className="mb-4"
          >
            <p className="font-display text-7xl sm:text-8xl font-bold text-accent leading-none"
              style={{ textShadow: '0 0 40px rgba(0, 180, 216, 0.3)' }}
            >
              <AnimatedCounter to={40} duration={2} />
              <span>+</span>
            </p>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.1 }}
            className="h-px w-24 bg-gradient-to-r from-accent to-accent-light mx-auto mb-6 origin-center"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20, delay: 0.2 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Nuestras marcas
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4">
              Distribuidores de las mejores marcas
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              Representamos a los fabricantes líderes en automatización industrial, motores,
              transmisión de potencia y control de movimiento.
            </p>
          </motion.div>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 sm:gap-3 mb-16">
          {allBrands.map((brand, i) => (
            <BrandCard key={brand.alt} brand={brand} index={i} />
          ))}
        </div>
      </div>

      {/* CSS-powered bottom marquee accent strip */}
      <div className="relative overflow-hidden hidden sm:block">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent" />

        <div
          className="flex gap-8 w-max"
          style={{ animation: 'marquee-scroll 30s linear infinite' }}
        >
          {marqueeList.map((brand, i) => (
            <div
              key={`marquee-${brand.alt}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-20 h-10"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                loading="lazy"
                className="max-h-8 max-w-full object-contain opacity-25 mix-blend-multiply dark:mix-blend-normal dark:invert dark:brightness-150"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
