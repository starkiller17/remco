import './assets/css/our_services.css';
import automateIcon from './assets/img/automate.svg';

function OurServices() {
  return (
    <article className="container" style={{ marginTop: '670px' }}>
      <div className="columns">
        <div className="column is-one-third">
          <p className="title has-text-center-touch has-text-left-desktop animate__fadeInLeft">
            ¿CÓMO LO HACEMOS?
          </p>
          <h1 className="has-text-center-touch has-text-left-desktop animate__flipInY">
            Tú tienes el qué y el porqué de tus procesos. Nosotros te ayudamos
            con el como.
          </h1>
        </div>
        <div className="column is-two-thirds">
          <div className="columns">
            <div className="column is-one-third">
              <div className="card automate">
                <img src={automateIcon} alt="Automatización" />
                <h3 className="px-3">Proyectos de Automotización</h3>
                <div className="card-content">
                  <div className="content has-text-justified px-3">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum
                    at eros. Donec id elit non mi porta gravida at eget metus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, montes, nascetur ridiculus mus. Cras mattis
                    consectetur fermentum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default OurServices;
