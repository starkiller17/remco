import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMobileScreen,
  faEnvelope,
  faLocationDot,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import logoREMCO from '../navbar/assets/img/remco_logo.png';

const contactInfo = [
  {
    icon: faMobileScreen,
    label: 'WhatsApp',
    value: '(444) 269 69 23',
    href: 'https://wa.me/5214442696923',
  },
  {
    icon: faPhone,
    label: 'Teléfono',
    value: '(444) 101 85 69',
    href: 'tel:+524441018569',
  },
  {
    icon: faEnvelope,
    label: 'Correo',
    value: 'remco.slp@outlook.com',
    href: 'mailto:remco.slp@outlook.com',
  },
];

const navLinks = [
  { label: 'Inicio', href: '/#hero' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Nosotros', href: '/nosotros' },
];

const socialLinks = [
  {
    icon: faLocationDot,
    label: 'Ubicación',
    href: 'https://goo.gl/maps/jUryCTD8gJqQ8oJv7',
  },
  {
    icon: faThumbsUp,
    label: 'Facebook',
    href: 'https://www.facebook.com/remcoindustrial',
  },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoREMCO}
              alt="REMCO"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-neutral-400">
              Reductores, Motores y Controles SLP. Distribuidores autorizados de Baldor,
              ABB y Dodge.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Encuéntranos
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                    }
                    className="inline-flex items-center gap-3 text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-4 text-accent shrink-0"
                    />
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Reductores, Motores y Controles SLP SA de CV.
            Todos los derechos reservados.
          </p>
          <p>San Luis Potosí, México</p>
        </div>
      </div>
    </footer>
  );
}
