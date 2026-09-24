import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <span className="hero__glow hero__glow--one"></span>
        <span className="hero__glow hero__glow--two"></span>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Analista de Sistemas
          </p>

          <h1 className="hero__title">
            Transformo{' '}
            <span className="hero__word">necessidades</span>{' '}
            de negócio em
            <strong> soluções digitais.</strong>
          </h1>

          <p className="hero__description">
            Experiência com levantamento de requisitos, implantação de
            sistemas, testes, documentação, suporte e relacionamento com
            clientes.
          </p>

          <div className="hero__actions">
            <a
              href="#projetos"
              className="hero__button hero__button--primary"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="hero__button hero__button--secondary"
            >
              Entre em contato
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-grid"></div>

          <div className="hero__photo">
            <div className="hero__photo-placeholder">
              <span>KL</span>
            </div>
          </div>

          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Disponível para oportunidades
          </div>

          <div className="hero__line hero__line--one"></div>
          <div className="hero__line hero__line--two"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero