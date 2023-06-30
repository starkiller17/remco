import workInProgress from './assets/img/work_in_progress.svg';
import './assets/css/intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="columns">
        <div className="column is-half is-full-mobile animate__animated animate__bounceInLeft">
          <h1 className="is-size-5-mobile is-size-4-touch">
            Excediendo sus Expectativas, Trabajando en Conjunto.
          </h1>
          <p className="is-size-5-mobile is-size-4-touch">
            Ayudamos a las empresas a cumplir la visión de sus procesos,
            asesoría, implementeación y servicio personalizados.
          </p>
        </div>
        <div className="column is-half animate__animated animate__bounceInRight">
          <img src={workInProgress} alt="Work in Progress" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
