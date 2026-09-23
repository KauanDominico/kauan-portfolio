import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <p className="hero__eyebrow">
          Analista de Sistemas
        </p>

        <h1 className="hero__title">
          Transformo necessidades de negócio
          <span> em soluções digitais.</span>
        </h1>

        <p className="hero__description">
          Experiência com levantamento de requisitos, implantação de sistemas,
          suporte, testes, documentação e relacionamento com clientes.
        </p>

        <div className="hero__actions">
          <a href="#projetos" className="hero__button hero__button--primary">
            Ver projetos
          </a>

          <a href="#contato" className="hero__button hero__button--secondary">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero