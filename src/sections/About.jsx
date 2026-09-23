import './About.css'

function About() {
  return (
    <section id="sobre" className="about">
      <div className="about__container">
        <div className="about__header">
          <p className="about__eyebrow">Sobre mim</p>

          <h2 className="about__title">
            Tecnologia, negócio e pessoas no mesmo processo.
          </h2>
        </div>

        <div className="about__content">
          <p>
            Sou profissional de tecnologia com experiência em análise de
            sistemas, levantamento de requisitos, implantação de soluções e
            suporte a clientes.
          </p>

          <p>
            Ao longo da minha experiência, participei de projetos envolvendo
            entendimento de necessidades, definição de requisitos, testes,
            documentação, treinamento e acompanhamento de sistemas.
          </p>

          <p>
            Gosto de entender o problema antes de pensar na solução,
            conectando as necessidades do negócio com soluções que sejam
            práticas para quem realmente vai utilizá-las.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About