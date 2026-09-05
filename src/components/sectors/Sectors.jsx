import { motion } from 'framer-motion';

import manufactura from '../../assets/sectors/manufactura.jpg';
import energia from '../../assets/sectors/energia.jpg';
import mineria from '../../assets/sectors/mineria.jpg';
import construccion from '../../assets/sectors/construccion.jpg';
import quimica from '../../assets/sectors/quimica.jpg';
import agricultura from '../../assets/sectors/agricultura.jpg';
import imprenta from '../../assets/sectors/imprenta.jpg';
import plantas from '../../assets/sectors/plantas.jpg';
import alimentos from '../../assets/sectors/alimentos.jpg';
import materiales from '../../assets/sectors/materiales.jpg';

const sectors = [
  { img: manufactura, name: 'Manufactura y Automotriz' },
  { img: energia, name: 'Generación de Energía' },
  { img: mineria, name: 'Minería y Metalurgia' },
  { img: construccion, name: 'Construcción y Minero-Cementera' },
  { img: quimica, name: 'Química y Farmacéutica' },
  { img: agricultura, name: 'Agricultura' },
  { img: imprenta, name: 'Imprenta' },
  { img: plantas, name: 'Plantas Tratadoras' },
  { img: alimentos, name: 'Alimentos y Bebidas' },
  { img: materiales, name: 'Manejo de Materiales' },
];

export default function Sectors() {
  return (
    <section id="sectores" className="min-h-screen flex items-center py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 20 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Dónde trabajamos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4">
            Sectores y segmentos industriales
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Brindamos soluciones a una amplia variedad de industrias, adaptando nuestros
            productos y servicios a cada sector productivo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: 'spring', damping: 20 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-default"
            >
              <img
                src={sector.img}
                alt={sector.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />

              {/* Accent ring on hover */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-accent/0 group-hover:ring-accent/60 transition-all duration-300" />

              <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-sm sm:text-base leading-snug drop-shadow-lg">
                {sector.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
