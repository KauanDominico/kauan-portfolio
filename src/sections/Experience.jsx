import './Experience.css'

function Experience() {
  return (
    <section id="experiencia" className="experience">
      <div className="experience__container">

        <div className="experience__header">
          <p className="experience__eyebrow">
            02 / Experiências
          </p>

          <h2 className="experience__title">
            Experiências
            <span> Profissionais </span>
          </h2>
        </div>

        <div className="experience__timeline">

          <article className="experience__item">
            <div className="experience__marker" />

            <div className="experience__content">
              <div className="experience__top">
                <div>
                  <p className="experience__company">
                    i_mais
                  </p>

                  <h3 className="experience__role">
                    Suporte N1
                  </h3>
                </div>

                <span className="experience__period">
                  Atual
                </span>
              </div>

              <p className="experience__description">
                Atuação em suporte técnico N1, realizando diagnóstico e
                resolução de problemas relacionados à conectividade e
                configuração de equipamentos, além de registro e
                acompanhamento de chamados e suporte remoto.
              </p>

              <div className="experience__tags">
                <span>Suporte N1</span>
                <span>Conectividade</span>
                <span>Suporte remoto</span>
              </div>
            </div>
          </article>

          <article className="experience__item">
            <div className="experience__marker" />

            <div className="experience__content">
              <div className="experience__top">
                <div>
                  <p className="experience__company">
                    Grupo Bringel
                  </p>

                  <h3 className="experience__role">
                    Analista de Sistemas
                  </h3>
                </div>

                <span className="experience__period">
                  2023 — 2026
                </span>
              </div>

              <p className="experience__description">
                Atuação em diferentes projetos e sistemas, participando
                desde o entendimento das necessidades do negócio até o
                acompanhamento do desenvolvimento e entrega das soluções.
                Experiência com levantamento de requisitos, reuniões de
                alinhamento, acompanhamento de demandas, gestão de
                integrações, testes e homologação. Entre os projetos,
                atuação no desenvolvimento e evolução de sistemas de
                proposta comercial e do SISCME.
              </p>

              <div className="experience__tags">
                <span>Requisitos</span>
                <span>Projetos</span>
                <span>Integrações</span>
                <span>Testes</span>
                <span>Jira</span>
              </div>
            </div>
          </article>

          <article className="experience__item">
            <div className="experience__marker" />

            <div className="experience__content">
              <div className="experience__top">
                <div>
                  <p className="experience__company">
                    R2DA
                  </p>

                  <h3 className="experience__role">
                    Estagiário de Tecnologia
                  </h3>
                </div>

                <span className="experience__period">
                  2025
                </span>
              </div>

              <p className="experience__description">
                Apoio no levantamento de requisitos para sistemas de
                cartórios, análise de necessidades e revisão de resultados
                de soluções de extração e reconhecimento de informações.
              </p>

              <div className="experience__tags">
                <span>Requisitos</span>
                <span>Análise</span>
                <span>Testes</span>
              </div>
            </div>
          </article>

          <article className="experience__item">
            <div className="experience__marker" />

            <div className="experience__content">
              <div className="experience__top">
                <div>
                  <p className="experience__company">
                    Samsung
                  </p>

                  <h3 className="experience__role">
                    Jovem Aprendiz
                  </h3>
                </div>

                <span className="experience__period">
                  —
                </span>
              </div>

              <p className="experience__description">
                Atuação com testes de desempenho e usabilidade, suporte
                técnico, instalação e formatação do Windows, configuração
                de periféricos e manutenção básica de computadores.
              </p>

              <div className="experience__tags">
                <span>Testes</span>
                <span>Suporte</span>
                <span>Hardware</span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Experience