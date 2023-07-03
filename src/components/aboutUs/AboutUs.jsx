import './assets/css/about_us.css';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container about-us-container">
        <p className="about-us-title">ACERCA DE NOSOTROS</p>
        Olvida los tiempos de espera
        <div className="columns">
          <div className="column is-half">
            <p className="has-text-justified">
              REMCO engloba una amplia gama de productos destinados a cumplir
              los requerimientos{' '}
              <b>eléctrico, electrónico y de transmisión de potencia</b> para la
              <b>industria</b> en <b>general</b> con equipos monofásicos y
              trifásicos en CA & NEMA/IEC, media tensión, uso inversor, motor AC
              de imán permanente &ldquo;SyMax&rdquo;, con freno, para
              ventiladores-bombas; en el caso de la <b>alimenticia</b> con
              productos lavables; en la <b>química</b> y productos a prueba de
              explosión y severy duty.
            </p>
          </div>
          <div className="column is-half"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
