import './assets/css/how_we_do_it.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  faMagnifyingGlass,
  faDiagramNext,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

function HowWeDoIt() {
  return (
    <article className="container our-process-main">
      <div className="our-process is-align-content-center">NUESTRO PROCESO</div>
      <p className="slogan">
        Con nuestra gran experiencia y variedad de soluciones.
        <br />
        Ahorra tiempo y dinero mientras tus procesos progresan y continúan
        mejorando.
      </p>
      <div className="columns all-process-container">
        <div className="column is-one-third">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <div className="process-card">
              <div className="process-icon">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="3x"
                  style={{ color: '#B9CDCB' }}
                />
              </div>
              <div className="process-title">1. Analizar</div>
              <p className="process-description px-2">
                parturient montes, montes, nascetur ridiculus mus. Cras mattis
                consectetur fermentum.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="column is-one-third">
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div className="process-card">
              <div className="process-icon">
                <FontAwesomeIcon
                  icon={faDiagramNext}
                  size="3x"
                  style={{ color: '#FCAC89' }}
                />
              </div>
              <div className="process-title">2. Proyectar</div>
              <p className="process-description px-2">
                parturient montes, montes, nascetur ridiculus mus. Cras mattis
                consectetur fermentum.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="column is-one-third">
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div className="process-card">
              <div className="process-icon">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="3x"
                  style={{ color: '#9E8CB6' }}
                />
              </div>
              <div className="process-title">3. Optimizar</div>
              <p className="process-description px-2">
                parturient montes, montes, nascetur ridiculus mus. Cras mattis
                consectetur fermentum.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </article>
  );
}

export default HowWeDoIt;
