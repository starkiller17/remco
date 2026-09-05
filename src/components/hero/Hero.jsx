import { motion } from 'framer-motion';
import heroBg from '../navbar/assets/img/header_background.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent-dark/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="text-white">
          <motion.p
            variants={item}
            className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Reductores · Motores · Controles
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Excediendo sus Expectativas,{' '}
            <span className="text-accent-light">Trabajando en Conjunto</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-neutral-200 text-lg leading-relaxed mb-8 max-w-xl text-justify"
          >
            Ayudamos a las empresas a cumplir la visión de sus procesos,
            mediante asesoría, implementeación y servicio personalizados.<br />
            Más de 25 años de experiencia especializada en automatización industrial y más de 30 clientes satisfechos nos respaldan.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5214442696923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Cotizar Ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Nuestros Servicios
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', damping: 20 }}
          className="hidden lg:flex justify-center"
        >
          {/* Decorative stats card */}
          <div className="relative w-full max-w-sm">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '25+', label: 'Años de experiencia' },
                  { value: '30+', label: 'Clientes' },
                  { value: '100%', label: 'Compromiso' },
                  { value: '40+', label: 'Marcas disponibles' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-accent-light">{stat.value}</p>
                    <p className="text-xs text-neutral-300 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating brand badges */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-xl"
            >
              <p className="text-primary font-bold text-sm">Baldor · ABB · B&R · Dodge · NORD · LS Electric</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
