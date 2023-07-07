import './assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <svg viewBox="0 -20 700 110" preserveAspectRatio="none">
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
      <div className="footer-content">
        <div className="container">
          <div className="columns px-5">
            <div className="column is-one-third">
              <div className="is-flex is-align-items-center is-justify-content-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="2x"
                  style={{ color: '#FFFF' }}
                />{' '}
                <span className="footer-text">(444) 101 85 69</span>
              </div>
            </div>
            <div className="column is-one-third">
              fermentum tortor. Etiam vitae mi sed ex tempus ornare. Aenean nisl
              eros, lobortis sed ligula vel, volutpat rutrum sapien. Nam
              facilisis ullamcorper odio quis bibendum. Sed sodales aliquam
              felis sed pharetra. Vivamus eget viverra mi. Quisque felis nibh,
              aliquet vitae quam ac, varius ultrices arcu. Vivamus in risus
              lacinia, suscipit erat eget, suscipit velit. Nunc porta leo et
              enim volutpat, ac malesuada ligula varius. Maecenas aliquet mi
              tellus, in vestibulum lorem condimentum quis. Nulla ac sem eu
              turpis condimentum rutrum a vel nisi. Proin pulvinar augue a nunc
              malesuada, ultrices pharetra dui tristique. Integer lobortis et
              leo a interdum. Aenean semper rutrum ligula vel elementum. Donec
              suscipit sagittis leo, vel sagittis dolor maximus sit amet. Aenean
              rhoncus, quam gravida rutrum ultricies, orci eros lacinia nibh, eu
              porttitor magna mauris id risus. Aenean nec tortor facilisis,
              placerat felis vitae, dignissim eros. Vestibulum sed pharetra
              justo. Maecenas convallis mauris vitae libero dictum imperdiet sed
              tincidunt tellus. Sed non semper ex. Donec congue semper arcu.
              Cras molestie diam a pretium fringilla. Sed elementum ornare nisi
              quis finibus. Aliquam erat volutpat. Maecenas blandit non erat
              quis molestie. Nullam nisi leo, posuere quis venenatis non,
              posuere id lacus. Cras libero quam, fermentum et pulvinar vitae,
              convallis nec orci. Sed a ligula non ipsum ultricies suscipit sit
              amet id massa. Aliquam iaculis hendrerit semper. Sed quis egestas
              ante. Cras id mattis tortor, sit amet pellentesque ex. Vestibulum
              porttitor volutpat leo, nec congue dolor ultrices in. Nunc porta
              ligula eleifend enim varius varius. Donec at viverra nisl.
              Maecenas mattis nulla eu tortor posuere maximus.
            </div>
            <div className="column is-one-third">
              fermentum tortor. Etiam vitae mi sed ex tempus ornare. Aenean nisl
              eros, lobortis sed ligula vel, volutpat rutrum sapien. Nam
              facilisis ullamcorper odio quis bibendum. Sed sodales aliquam
              felis sed pharetra. Vivamus eget viverra mi. Quisque felis nibh,
              aliquet vitae quam ac, varius ultrices arcu. Vivamus in risus
              lacinia, suscipit erat eget, suscipit velit. Nunc porta leo et
              enim volutpat, ac malesuada ligula varius. Maecenas aliquet mi
              tellus, in vestibulum lorem condimentum quis. Nulla ac sem eu
              turpis condimentum rutrum a vel nisi. Proin pulvinar augue a nunc
              malesuada, ultrices pharetra dui tristique. Integer lobortis et
              leo a interdum. Aenean semper rutrum ligula vel elementum. Donec
              suscipit sagittis leo, vel sagittis dolor maximus sit amet. Aenean
              rhoncus, quam gravida rutrum ultricies, orci eros lacinia nibh, eu
              porttitor magna mauris id risus. Aenean nec tortor facilisis,
              placerat felis vitae, dignissim eros. Vestibulum sed pharetra
              justo. Maecenas convallis mauris vitae libero dictum imperdiet sed
              tincidunt tellus. Sed non semper ex. Donec congue semper arcu.
              Cras molestie diam a pretium fringilla. Sed elementum ornare nisi
              quis finibus. Aliquam erat volutpat. Maecenas blandit non erat
              quis molestie. Nullam nisi leo, posuere quis venenatis non,
              posuere id lacus. Cras libero quam, fermentum et pulvinar vitae,
              convallis nec orci. Sed a ligula non ipsum ultricies suscipit sit
              amet id massa. Aliquam iaculis hendrerit semper. Sed quis egestas
              ante. Cras id mattis tortor, sit amet pellentesque ex. Vestibulum
              porttitor volutpat leo, nec congue dolor ultrices in. Nunc porta
              ligula eleifend enim varius varius. Donec at viverra nisl.
              Maecenas mattis nulla eu tortor posuere maximus.
            </div>
          </div>
        </div>
      </div>
      <div className="column is-mobile is-centered copyright">
        © 2015 Reductores, Motores y Controles SLP SA de CV.
      </div>
    </footer>
  );
}

export default Footer;
