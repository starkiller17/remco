import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '3', label: 'Marcas autorizadas' },
  { value: 'SLP', label: 'San Luis Potosí' },
  { value: '∞', label: 'Compromiso' },
];

export default function About() {
  return (
    <section id="acerca" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Acerca de nosotros
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-6">
              Más de 15 años de experiencia
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-4">
              Somos distribuidores autorizados de Baldor, ABB y Dodge en San Luis Potosí.
              Nuestra experiencia nos permite ofrecer soluciones confiables en motores
              eléctricos, reductores de velocidad y sistemas de control industrial.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
              Contamos con una extensa gama de productos: motores eléctricos, electrónicos,
              hidráulicos, neumáticos y de transmisión de potencia, respaldados por el
              soporte técnico de las marcas líderes del sector.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-accent pl-6 py-1">
              <p className="text-neutral-600 dark:text-neutral-300 italic leading-relaxed mb-2">
                "Nuestro compromiso es superar las expectativas de nuestros clientes,
                ofreciendo la mejor asesoría técnica y los productos de mayor calidad."
              </p>
              <footer className="text-accent font-semibold text-sm">
                Jorge Méndez — Ejecutivo de Ventas
              </footer>
            </blockquote>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-10 text-white shadow-2xl shadow-primary/30">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-4xl font-bold text-accent-light">{stat.value}</p>
                      <p className="text-xs text-neutral-300 mt-1 leading-tight">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/5 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
