import './assets/css/about_us.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Face from './assets/img/cara.png';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container about-us-container">
        <p className="about-us-title">ACERCA DE NOSOTROS</p>
        <p className="slogan">
          Olvida los retrasos y tiempos de espera. Contáctanos y deja que tus
          procesos sigan avanzando y creciendo.
        </p>
        <div className="columns">
          <div className="column is-half mb-4">
            <p className="about-us-text has-text-justified">
              Con más de 15 años de experiencia trabajando de la mano con
              productos Baldor, ABB, Dodge, etc y diversas horas en proyectos de
              automatización, me han ayudado a...
            </p>
            <p className="jmr has-text-justified mt-4">
              - Jorge Méndez, Vendedor
            </p>
            <p className="about-us-text has-text-justified mt-6">
              REMCO engloba una amplia gama de productos destinados a cumplir
              los requerimientos{' '}
              <b>eléctrico, electrónico y de transmisión de potencia</b> para la{' '}
              <b>industria</b> en <b>general</b> con equipos monofásicos y
              trifásicos en CA & NEMA/IEC, media tensión, uso inversor, motor AC
              de imán permanente &ldquo;SyMax&rdquo;, con freno, para
              ventiladores-bombas; en el caso de la <b>alimenticia</b> con
              productos lavables; en la <b>química</b> y productos a prueba de
              explosión y severy duty.
            </p>
          </div>
          <div className="column is-half is-flex is-justify-content-center is-align-items-center">
            <AnimationOnScroll animateIn="animate__rotateIn">
              <div className="blob-shape">
                <img src={Face} alt="" />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
