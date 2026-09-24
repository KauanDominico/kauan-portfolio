import './About.css'

function About() {
  return (
    <section id="sobre" className="about">
      <div className="about__container">

        <div className="about__header">
          <p className="about__eyebrow">
            01 / Sobre
          </p>

          <h2 className="about__title">
            Conectando <span>negócio</span> e tecnologia.
          </h2>
        </div>

        <div className="about__content">

          <p className="about__text">
            Sou Kauan Lopes, profissional de Tecnologia da Informação com
            experiência em levantamento de requisitos, implantação de
            sistemas, homologação, testes, documentação, suporte e
            relacionamento com clientes. Ao longo da minha experiência,
            atuei entendendo necessidades de negócio, organizando
            processos, acompanhando projetos e transformando demandas
            em soluções digitais mais claras e funcionais. Gosto de atuar
            próximo das pessoas e da tecnologia, conectando as necessidades
            do negócio às equipes responsáveis pelo desenvolvimento e
            implementação das soluções.
          </p>

          <div className="about__stats">

            <div className="about__stat">
              <span className="about__stat-number">03+</span>
              <span className="about__stat-label">
                Anos em tecnologia
              </span>
            </div>

            <div className="about__stat">
              <span className="about__stat-number">05</span>
              <span className="about__stat-label">
                Áreas de atuação
              </span>
            </div>

            <div className="about__stat">
              <span className="about__stat-number">01</span>
              <span className="about__stat-label">
                Foco: soluções digitais
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About