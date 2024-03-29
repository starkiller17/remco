import './assets/css/our_services.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faGears,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import whatsAppIcon from './assets/img/whatsapp-icon.svg';
import whatsAppIconHover from './assets/img/whatsapp-icon-hover.svg';
import mailIcon from './assets/img/mail-icon.svg';
import mailIconHover from './assets/img/mail-icon-hover.svg';

function OurServices() {
  return (
    <article className="container has-text-center our-services-container">
      <div className="container how-we-do-it">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <p className="title has-text-center">¿CÓMO LO HACEMOS?</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInY">
          <h1 className="has-text-center is-size-3-mobile px-4">
            Tú tienes el qué y el porqué de tus procesos.
            <br />
            Nosotros te ayudamos con el como...
          </h1>
          <div className="column is-mobile is-centered">
            <a
              href="mailto:remco.slp@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mailIcon}
                alt="Mail Icon"
                onMouseOver={(e) => {
                  e.currentTarget.src = mailIconHover;
                  console.log(e.currentTarget.src);
                }}
                onMouseOut={(e) => (e.currentTarget.src = mailIcon)}
              />
            </a>
            <a
              href="https://wa.me/5214442696923/?text=Hola,%20estoy%20interesado%20en%20cotizar%20un%20producto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsAppIcon}
                alt="WhatsApp Icon"
                onMouseOver={(e) => {
                  e.currentTarget.src = whatsAppIconHover;
                  console.log(e.currentTarget.src);
                }}
                onMouseOut={(e) => (e.currentTarget.src = whatsAppIcon)}
              />
            </a>
          </div>
        </AnimationOnScroll>
      </div>
      <div className="columns service-cards">
        <div className="column is-one-third">
          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <div className="card automate pt-2">
              <FontAwesomeIcon
                icon={faGears}
                size="5x"
                style={{ color: '#FCAC89' }}
              />
              <h3 className="px-3">Proyectos de Automotización</h3>
              <div className="card-content">
                <div className="content has-text-justified px-3 service-text">
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  montes, nascetur ridiculus mus. Cras mattis consectetur
                  fermentum.
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="column is-one-third mt-5">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className="card product pt-2">
              <FontAwesomeIcon
                icon={faBolt}
                size="5x"
                style={{ color: '#9E8CB6' }}
              />
              <h3 className="px-3">Selección de Productos</h3>
              <div className="card-content">
                <div className="content has-text-justified px-3 service-text">
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  montes, nascetur ridiculus mus. Cras mattis consectetur
                  fermentum.
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="column is-one-third">
          <AnimationOnScroll animateIn="animate__bounceInRight">
            <div className="card advisory pt-2">
              <FontAwesomeIcon
                icon={faLightbulb}
                size="5x"
                style={{ color: '#B9CDCB' }}
              />
              <h3 className="px-3">Asesoría Especializada</h3>
              <div className="card-content">
                <div className="content has-text-justified px-3 service-text">
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  montes, nascetur ridiculus mus. Cras mattis consectetur
                  fermentum.
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </article>
  );
}

export default OurServices;
