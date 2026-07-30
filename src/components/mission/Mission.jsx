import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Misión',
    text: 'Proveer soluciones integrales en automatización industrial con los mejores productos y el servicio más confiable del mercado, superando siempre las expectativas de nuestros clientes.',
  },
  {
    title: 'Visión',
    text: 'Ser la empresa distribuidora de equipos industriales más reconocida en el Bajío y el norte del país, siendo referente en calidad, asesoría técnica y compromiso con el cliente.',
  },
  {
    title: 'Valores',
    text: 'Honestidad, compromiso, excelencia, trabajo en equipo y responsabilidad son los pilares que guían cada una de nuestras acciones y decisiones empresariales.',
  },
];

export default function Mission() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestra empresa
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary dark:text-white">
            Nosotros
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: 'spring', damping: 20 }}
              className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700"
            >
              <div className="w-10 h-1 bg-accent rounded-full mb-4" />
              <h2 className="font-display text-2xl font-bold text-primary dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
