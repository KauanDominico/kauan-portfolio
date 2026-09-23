import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'SISCME — Sistema de Gestão de CME',
      category: 'Análise e Implantação',
      description:
        'Atuação na evolução e implantação do sistema SISCME, participando do levantamento de requisitos, parametrização, testes, treinamento e suporte aos clientes.',
      skills: [
        'Requisitos',
        'Implantação',
        'Testes',
        'Documentação',
        'Treinamento',
      ],
    },
    {
      title: 'Digitalização de processos hospitalares',
      category: 'Melhoria de Processos',
      description:
        'Participação na transformação de processos que anteriormente eram realizados de forma manual, contribuindo para a digitalização e melhoria da operação através do sistema.',
      skills: [
        'Processos',
        'Análise',
        'Requisitos',
        'Melhoria contínua',
      ],
    },
    {
      title: 'Portfólio Pessoal',
      category: 'Projeto Pessoal',
      description:
        'Desenvolvimento deste portfólio para apresentar minha experiência profissional, projetos e conhecimentos na área de tecnologia.',
      skills: [
        'React',
        'Vite',
        'CSS',
        'Git',
        'GitHub',
      ],
    },
  ]

  return (
    <section id="projetos" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <p className="projects__eyebrow">Projetos</p>

          <h2 className="projects__title">
            Projetos e soluções que participei.
          </h2>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-card__category">
                {project.category}
              </p>

              <h3 className="project-card__title">
                {project.title}
              </h3>

              <p className="project-card__description">
                {project.description}
              </p>

              <div className="project-card__skills">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects