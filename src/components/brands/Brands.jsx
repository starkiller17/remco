import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useInView, animate } from 'framer-motion';

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

// Featured brands — core authorized distributorships
const featuredBrands = [
  { src: baldor, alt: 'Baldor', desc: 'Motores eléctricos industriales' },
  { src: abb, alt: 'ABB', desc: 'Automatización y control' },
  { src: dodge, alt: 'Dodge', desc: 'Transmisión de potencia' },
  { src: nord, alt: 'Nord', desc: 'Motorreductores y variadores' },
  { src: lsElectric, alt: 'LS Electric', desc: 'Variadores de frecuencia y PLCs' },
  { src: brAutomation, alt: 'B&R Automation', desc: 'Automatización avanzada' },
  { src: wago, alt: 'Wago', desc: 'Conexiones y control industrial' },
  { src: lapp, alt: 'Lapp', desc: 'Cables y conectores industriales' },
];

// All remaining brands for the marquee rows
const marqueeRow1 = [
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
];

const marqueeRow2 = [
  { src: gates, alt: 'Gates' },
  { src: zsgGroup, alt: 'ZSG Group' },
  { src: ina, alt: 'INA' },
  { src: hiwin, alt: 'Hiwin' },
  { src: thk, alt: 'THK' },
  { src: nsk, alt: 'NSK' },
  { src: rexroth, alt: 'Rexroth' },
  { src: transtecno, alt: 'Transtecno' },
  { src: sewEurodrive, alt: 'SEW-Eurodrive' },
  { src: sumitomo, alt: 'Sumitomo' },
  { src: leeson, alt: 'Leeson' },
  { src: marathonElectric, alt: 'Marathon Electric' },
  { src: weg, alt: 'WEG' },
  { src: kbElectronics, alt: 'KB Electronics' },
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

// CSS-powered marquee row
function MarqueeRow({ brands, reverse = false, speed = 35 }) {
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 z-10 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 z-10 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent" />

      <div
        className="flex gap-10 sm:gap-14 w-max"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.alt}-${i}`}
            className="group flex-shrink-0 flex items-center justify-center w-28 sm:w-36 h-14 sm:h-16 px-3"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              loading="lazy"
              className="max-h-10 sm:max-h-12 max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply dark:mix-blend-normal dark:invert dark:brightness-200 dark:contrast-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <section id="marcas" className="py-24 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with animated counter */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20 }}
            className="mb-4"
          >
            <p
              className="font-display text-7xl sm:text-8xl font-bold text-accent leading-none"
              style={{ textShadow: '0 0 40px rgba(0, 180, 216, 0.3)' }}
            >
              <AnimatedCounter to={40} duration={2} />
              <span>+</span>
            </p>
          </motion.div>

          {/* Divider */}
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
              Distribuidores autorizados
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              Representamos a los fabricantes líderes en automatización industrial, motores,
              transmisión de potencia y control de movimiento.
            </p>
          </motion.div>
        </div>

        {/* Featured brands — 3 showcase cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {featuredBrands.map((brand, i) => (
            <motion.div
              key={brand.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, type: 'spring', damping: 20 }}
              whileHover={{
                y: -6,
                boxShadow: '0 8px 30px rgba(0, 180, 216, 0.2)',
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="group relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-white/10 p-8 sm:p-10 text-center"
            >
              {/* Accent top border */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div className="flex items-center justify-center h-20 mb-5">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-16 max-w-full object-contain mix-blend-multiply dark:mix-blend-normal dark:invert dark:brightness-200 dark:contrast-75 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-1">
                {brand.alt}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {brand.desc}
              </p>

              {/* Distribuidor autorizado badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Distribuidor autorizado
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dual marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-1"
      >
        <MarqueeRow brands={marqueeRow1} speed={40} />
        <MarqueeRow brands={marqueeRow2} reverse speed={45} />
      </motion.div>
    </section>
  );
}
