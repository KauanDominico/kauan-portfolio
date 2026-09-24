import './Projects.css'

function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="projects__container">

        <div className="projects__header">
          <p className="projects__eyebrow">
            03 / Projetos
          </p>

          <h2 className="projects__title">
            Projetos que transformam
            <span> ideias em soluções.</span>
          </h2>

          <p className="projects__intro">
            Uma seleção de projetos desenvolvidos para explorar tecnologia,
            resolver problemas e transformar necessidades em experiências
            digitais funcionais.
          </p>
        </div>

        <div className="projects__grid">

          <article className="project-card project-card--featured">
            <div className="project-card__top">
              <span className="project-card__number">
                01
              </span>

              <span className="project-card__status">
                Em desenvolvimento
              </span>
            </div>

            <div className="project-card__body">
              <p className="project-card__category">
                Aplicação Web
              </p>

              <h3 className="project-card__title">
                Projeto em destaque
              </h3>

              <p className="project-card__description">
                Projeto desenvolvido para demonstrar a aplicação prática
                de tecnologia, organização de informações e construção de
                uma experiência digital funcional.
              </p>
            </div>

            <div className="project-card__footer">
              <div className="project-card__tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <span className="project-card__arrow">
                ↗
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-card__top">
              <span className="project-card__number">
                02
              </span>

              <span className="project-card__status">
                Em desenvolvimento
              </span>
            </div>

            <div className="project-card__body">
              <p className="project-card__category">
                Sistema
              </p>

              <h3 className="project-card__title">
                Projeto em desenvolvimento
              </h3>

              <p className="project-card__description">
                Solução criada para praticar análise, estruturação de
                funcionalidades e desenvolvimento de sistemas.
              </p>
            </div>

            <div className="project-card__footer">
              <div className="project-card__tags">
                <span>JavaScript</span>
                <span>API</span>
              </div>

              <span className="project-card__arrow">
                ↗
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-card__top">
              <span className="project-card__number">
                03
              </span>

              <span className="project-card__status">
                Planejado
              </span>
            </div>

            <div className="project-card__body">
              <p className="project-card__category">
                Produto Digital
              </p>

              <h3 className="project-card__title">
                Próximo projeto
              </h3>

              <p className="project-card__description">
                Um novo projeto pensado para explorar conceitos de produto,
                experiência do usuário e desenvolvimento de soluções.
              </p>
            </div>

            <div className="project-card__footer">
              <div className="project-card__tags">
                <span>UX</span>
                <span>Web</span>
              </div>

              <span className="project-card__arrow">
                ↗
              </span>
            </div>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Projects