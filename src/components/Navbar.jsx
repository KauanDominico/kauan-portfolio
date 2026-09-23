import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          Kauan Lopes
        </a>

        <button
          className="navbar__menu"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar