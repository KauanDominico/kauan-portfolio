```jsx
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <span className="footer__logo">
            KL
          </span>

          <span className="footer__name">
            Kauan Lopes
          </span>
        </div>

        <p className="footer__copyright">
          © 2026 Kauan Lopes. Todos os direitos reservados.
        </p>

        <div className="footer__links">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="#inicio">
            Voltar ao topo ↑
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
```
