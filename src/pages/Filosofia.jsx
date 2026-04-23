import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>Menos es más</h1>
        <p>
          Descubre el arte milenario del bonsái, donde la paciencia se transforma en belleza 
          y cada pequeña rama cuenta una historia de dedicación y armonía con la naturaleza.
        </p>
        <Link to="/reservas" className="cta-button">
          Reserva un taller
        </Link>
      </div>
    </div>
  )
}

export default Home
