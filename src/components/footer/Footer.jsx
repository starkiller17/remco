import './assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMobileScreen,
  faThumbsUp,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <svg
        className="footer-margin"
        viewBox="0 -20 700 110"
        preserveAspectRatio="none"
      >
        <path
          transform="translate(0, -20)"
          d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
          fill="#4d9dff"
        />
        <path
          d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
          fill="#4942d6"
        />
      </svg>
      <footer className="footer">
        <div className="is-flex is-align-items-center is-justify-content-center footer-content">
          <div className="container">
            <div className="columns px-5">
              <div className="column is-one-third">
                <a
                  href="https://wa.me/5214442696923/?text=Hola,%20estoy%20interesado%20en%20cotizar%20un%20producto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start"
                >
                  <FontAwesomeIcon
                    icon={faMobileScreen}
                    size="2x"
                    style={{ color: '#FFFF' }}
                  />{' '}
                  <span className="footer-text">(444) 269 69 23</span>
                </a>
                <div className="is-flex is-align-items-center is-justify-content-start mt-5">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    style={{ color: '#FFFF' }}
                  />{' '}
                  <span className="footer-text">(444) 101 85 69</span>
                </div>
                <a
                  href="mailto:remco.slp@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start mt-5"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    style={{ color: '#FFFF' }}
                  />{' '}
                  <span className="footer-text">remco.slp@outlook.com</span>
                </a>
              </div>
              <div className="column is-one-third">
                <a
                  href="https://goo.gl/maps/jUryCTD8gJqQ8oJv7"
                  className="footer-link is-flex is-align-items-center is-justify-content-start"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="2x"
                    style={{ color: '#FFFF' }}
                  />{' '}
                  <span className="footer-text">REMCO SLP</span>
                </a>
                <a
                  href="https://www.facebook.com/remcoindustrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start mt-5"
                >
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="2x"
                    style={{ color: '#FFFF' }}
                  />{' '}
                  <span className="footer-text">REMCO</span>
                </a>
              </div>
              <div className="column is-one-third">
                <a
                  href="https://www.facebook.com/remcoindustrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start"
                >
                  <span className="footer-text-navigation">Misión/Visión</span>
                </a>
                <a
                  href="https://www.facebook.com/remcoindustrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start mt-5"
                >
                  <span className="footer-text-navigation">Valores</span>
                </a>
                <a
                  href="https://www.facebook.com/remcoindustrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start mt-5"
                >
                  <span className="footer-text-navigation">
                    Principios Empresariales
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/remcoindustrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start mt-5"
                >
                  <span className="footer-text-navigation">
                    Calidad Laboral
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/remcoindustrial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link is-flex is-align-items-center is-justify-content-start mt-5"
                >
                  <span className="footer-text-navigation">
                    Responsabilidad Empresarial
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-mobile is-centered copyright">
          © 2023 Reductores, Motores y Controles SLP SA de CV.
        </div>
      </footer>
    </>
  );
}

export default Footer;
