import { Link } from 'react-router-dom'
import estilo from '../styles/header.module.css'
import { FaRocket } from 'react-icons/fa'

function Header() {
  return (
    <header className={estilo.header}>
      <Link to='/' style={{ marginLeft: '2%', padding: '15px' }}>
        <div style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaRocket /> 
          <span >Piloto de avaliações</span>
        </div>
      </Link>
      <nav className={ estilo.menu }>
        <Link to='/' style={{ color: 'white' }}><span>Avaliar</span></Link>
        <Link to='/avaliacoes' style={{ color: 'white' }}><span>Avaliações</span></Link>
      </nav>
    </header>
  )
}

export default Header
