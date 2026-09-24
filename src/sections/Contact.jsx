import './Contact.css'

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__container">

        <div className="contact__eyebrow">
          <span />
          04 / Contato
        </div>

        <div className="contact__content">

          <div className="contact__main">
            <h2 className="contact__title">
              Vamos transformar
              <span> ideias em soluções.</span>
            </h2>

            <p className="contact__description">
              Estou aberto a novas oportunidades, projetos e conexões
              profissionais. Se você acredita que podemos construir
              algo juntos, entre em contato.
            </p>
          </div>

          <div className="contact__actions">

            <a
              href="https://wa.me/92991237816"
              target="_blank"
              rel="noreferrer"
              className="contact__button contact__button--primary"
            >
              Entrar em contato (WhatsApp)
              <span>↗</span>
            </a>

            <div className="contact__links">

              <a
                href="mailto:kauandominico2909@gmail.com"
              >
                E-mail
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact