import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faDiagramNext, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faMagnifyingGlass,
    title: 'Analizar',
    description:
      'Estudiamos sus necesidades a fondo para entender los requerimientos técnicos y operativos de su proyecto.',
  },
  {
    icon: faDiagramNext,
    title: 'Proyectar',
    description:
      'Diseñamos una solución personalizada, seleccionando los equipos y tecnologías más adecuados para su aplicación.',
  },
  {
    icon: faPaperPlane,
    title: 'Optimizar',
    description:
      'Implementamos la solución y le brindamos seguimiento para garantizar el máximo rendimiento y eficiencia.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 20 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestro proceso
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4">
            Así es como trabajamos
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Un proceso claro y estructurado que le garantiza resultados predecibles y soluciones duraderas.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="hidden md:block absolute top-10 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-0.5 bg-gradient-to-r from-accent to-accent-light origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: 'spring', damping: 20 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle with icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-neutral-900 border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/10">
                    <FontAwesomeIcon icon={step.icon} className="text-accent text-2xl" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-semibold text-xl text-primary dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
