import { Link } from 'react-router-dom'
import estilo from '../styles/header.module.css'
import { FaRocket } from 'react-icons/fa'

function Header() {
  return (
    <header className={estilo.header}>
      <Link to='/' style={{ marginLeft: '2%' }}>
        <div style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaRocket /> 
          <span>Piloto de avaliações</span>
        </div>
      </Link>
      <nav className={ estilo.menu }>
        <Link to='/' style={{ color: 'white' }}>Avaliar</Link>
        <Link to='/avaliacoes' style={{ color: 'white' }}>Avaliações</Link>
      </nav>
    </header>
  )
}

export default Header
