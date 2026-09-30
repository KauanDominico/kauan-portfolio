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
                Produto Digital
              </p>

              <h3 className="project-card__title">
                Onflow
              </h3>

              <p className="project-card__description">
                Solução voltada à otimização do processo de onboarding e da
                jornada dos primeiros 90 dias de integração. Atuação no ciclo
                completo do projeto, desde o levantamento de requisitos e
                desenho de processos até a definição de regras, documentação,
                viabilidade e desenvolvimento.
              </p>
            </div>

            <div className="project-card__footer">
              <div className="project-card__tags">
                <span>Requisitos</span>
                <span>Processos</span>
                <span>Next.js</span>
                <span>Supabase</span>
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
                Projeto profissional
              </span>
            </div>

            <div className="project-card__body">
              <p className="project-card__category">
                Sistema de Gestão
              </p>

              <h3 className="project-card__title">
                SISCME
              </h3>

              <p className="project-card__description">
                Atuação na evolução do SISCME, participando do levantamento
                e análise de requisitos, parametrização, implantação, testes,
                homologação, documentação e acompanhamento das demandas junto
                às equipes envolvidas.
              </p>
            </div>

            <div className="project-card__footer">
              <div className="project-card__tags">
                <span>Requisitos</span>
                <span>Implantação</span>
                <span>Testes</span>
                <span>Homologação</span>
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
                Projeto profissional
              </span>
            </div>

            <div className="project-card__body">
              <p className="project-card__category">
                Sistema
              </p>

              <h3 className="project-card__title">
                Sistema de Proposta Comercial
              </h3>

              <p className="project-card__description">
                Participação no desenvolvimento de um sistema voltado à
                gestão de propostas comerciais, atuando no levantamento de
                requisitos, reuniões de alinhamento, acompanhamento das
                demandas, definição de funcionalidades e gestão das
                integrações necessárias.
              </p>
            </div>

            <div className="project-card__footer">
              <div className="project-card__tags">
                <span>Requisitos</span>
                <span>Projetos</span>
                <span>Integrações</span>
                <span>Homologação</span>
              </div>

              <span className="project-card__arrow">
                ↗
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-card__top">
              <span className="project-card__number">
                04
              </span>

              <span className="project-card__status">
                Em desenvolvimento
              </span>
            </div>

            <div className="project-card__body">
              <p className="project-card__category">
                Produto Digital
              </p>

              <h3 className="project-card__title">
                Portfólio Pessoal
              </h3>

              <p className="project-card__description">
                Projeto desenvolvido para apresentar minha experiência
                profissional, projetos e atuação em Tecnologia da Informação,
                unindo organização de conteúdo, experiência do usuário e
                desenvolvimento de uma aplicação web.
              </p>
            </div>

            <div className="project-card__footer">
              <div className="project-card__tags">
                <span>React</span>
                <span>Vite</span>
                <span>JavaScript</span>
                <span>CSS</span>
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