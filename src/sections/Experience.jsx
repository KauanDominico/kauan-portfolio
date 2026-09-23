import './Experience.css'

function Experience() {
  const experiences = [
    {
  period: '2026 — Atual',
  company: 'i_mais',
  role: 'Suporte Técnico N1',
  description:
    'Atuação com atendimento e suporte técnico a clientes, diagnóstico de problemas de conectividade, configuração de roteadores, suporte remoto e acompanhamento de chamados.',
  skills: [
    'Suporte Técnico N1',
    'Diagnóstico de problemas',
    'Conectividade',
    'Configuração de roteadores',
    'Suporte remoto',
    'Atendimento ao cliente',
    'Automação de atendimento',
  ],
},
    {
      period: '2023 — 2026',
      company: 'Grupo Bringel',
      role: 'Analista de Sistemas',
      description:
        'Atuação em projetos de implantação e evolução de sistemas, realizando levantamento de requisitos, entendimento de processos, testes, documentação, treinamento e suporte aos clientes.',
      skills: [
        'Levantamento de requisitos',
        'Implantação de sistemas',
        'Testes e homologação',
        'Documentação',
        'Treinamento',
        'Suporte ao cliente',
      ],
    },
    {
      period: '2025',
      company: 'R2DA',
      role: 'Estagiário de Tecnologia',
      description:
        'Atuação com levantamento e análise de requisitos para sistemas, apoiando a documentação de necessidades e validação de soluções.',
      skills: [
        'Requisitos',
        'Análise de sistemas',
        'Documentação',
        'Validação',
      ],
    },
    {
      period: 'Experiência anterior',
      company: 'SEDA-AM',
      role: 'Jovem Aprendiz',
      description:
        'Atuação com testes de desempenho e usabilidade, suporte a usuários e atividades relacionadas à manutenção e configuração de computadores.',
      skills: [
        'Testes',
        'Suporte',
        'Hardware',
        'Usabilidade',
      ],
    },
  ]

  return (
    <section id="experiencia" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <p className="experience__eyebrow">Experiência</p>

          <h2 className="experience__title">
            Experiência profissional
          </h2>
        </div>

        <div className="experience__list">
          {experiences.map((experience) => (
            <article
              className="experience__item"
              key={`${experience.company}-${experience.role}`}
            >
              <div className="experience__period">
                {experience.period}
              </div>

              <div className="experience__content">
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience__skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience