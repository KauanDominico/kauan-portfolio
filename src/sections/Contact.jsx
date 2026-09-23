import './Contact.css'

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <p className="contact__eyebrow">Contato</p>

          <h2 className="contact__title">
            Vamos conversar?
          </h2>

          <p className="contact__description">
            Estou aberto a novas oportunidades, projetos e conexões
            profissionais na área de tecnologia.
          </p>
        </div>

        <div className="contact__links">
          <a href="mailto:kauandominico2909@gmail.com">
            E-mail
          </a>

          <a
            href="https://www.linkedin.com/in/kauanlopesdesouza/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/KauanDominico"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact