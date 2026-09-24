import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="navbar__container">
        <a href="#" className="navbar__logo" aria-label="Kauan Lopes - início">
          Kauan Lopes
        </a>

        <button
          className="navbar__menu"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          id="menu-principal"
          className={`navbar__links ${
            menuOpen ? 'navbar__links--open' : ''
          }`}
        >
          <a href="#sobre" onClick={handleLinkClick}>
            Sobre
          </a>

          <a href="#experiencia" onClick={handleLinkClick}>
            Experiência
          </a>

          <a href="#projetos" onClick={handleLinkClick}>
            Projetos
          </a>

          <a href="#contato" onClick={handleLinkClick}>
            Contato
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar