import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faBolt, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faGears,
    colorClass: 'text-orange-400',
    bgClass: 'bg-orange-50 dark:bg-orange-900/20',
    iconBgClass: 'bg-orange-100 dark:bg-orange-900/40',
    title: 'Automatización Industrial',
    description:
      'Diseño e implementación de proyectos de automatización para optimizar sus procesos productivos con tecnología de vanguardia.',
  },
  {
    icon: faBolt,
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-50 dark:bg-purple-900/20',
    iconBgClass: 'bg-purple-100 dark:bg-purple-900/40',
    title: 'Selección de Productos',
    description:
      'Simplificamos su cadena de adquisiciones con nuevas soluciones en refacciones, equipos e insumos industriales, seleccionando el equipo ideal dentro de nuestra amplia gama de las mejores marcas.',
  },
  {
    icon: faLightbulb,
    colorClass: 'text-teal-500',
    bgClass: 'bg-teal-50 dark:bg-teal-900/20',
    iconBgClass: 'bg-teal-100 dark:bg-teal-900/40',
    title: 'Asesoría Especializada',
    description:
      'Más de 25 años de experiencia nos respaldan para brindarle la mejor asesoría técnica en cada etapa.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white dark:bg-neutral-900">
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
            Lo que hacemos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4">
            Tú tienes el qué y el porqué de tus procesos.
            <br />
            Nosotros te ayudamos con el como...
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Soluciones integrales en automatización industrial con el respaldo de las marcas líderes del sector.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', damping: 20 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
              className={`${service.bgClass} rounded-2xl p-8 border border-neutral-100 dark:border-neutral-800 group cursor-default`}
            >
              <div
                className={`${service.iconBgClass} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
              >
                <FontAwesomeIcon icon={service.icon} className={`${service.colorClass} text-2xl`} />
              </div>
              <h3 className="font-semibold text-xl text-neutral-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-justify">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center flex flex-wrap gap-4 justify-center"
        >
          <a
            href="mailto:remco.slp@outlook.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Enviar correo
          </a>
          <a
            href="https://wa.me/5214442696923"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
