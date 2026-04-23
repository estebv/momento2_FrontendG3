import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ZENITH BONSAI
        </Link>
        
        <div className="navbar-menu">
          <Link 
            to="/filosofia" 
            className={`navbar-link ${location.pathname === '/filosofia' ? 'active' : ''}`}
          >
            Filosofía
          </Link>
          <Link 
            to="/galeria" 
            className={`navbar-link ${location.pathname === '/galeria' ? 'active' : ''}`}
          >
            Galería
          </Link>
          <Link 
            to="/reservas" 
            className={`navbar-link ${location.pathname === '/reservas' ? 'active' : ''}`}
          >
            Reservas
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
