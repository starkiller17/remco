import { useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import logoREMCO from '../navbar/assets/img/remco_logo.png';
import './assets/error.css';

export default function Error() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <img className="remco-logo" src={logoREMCO} alt="Logo REMCO" />
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <p className="zoom-area">
        <i>{error.statusText || error.message}</i>
      </p>

      <a
        href="/"
        className="more-link is-flex is-align-items-center is-justify-content-start"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faCircleLeft}
          size="2x"
          style={{ color: '#FFFF' }}
        />{' '}
        <span className="ml-4">Regresar</span>
      </a>
    </div>
  );
}
