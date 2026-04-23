import { Routes, Route } from 'react-router-dom'
import Filosofia from '../pages/Filosofia'
import Galeria from '../pages/Galeria'
import Reservas from '../pages/Reservas'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filosofia" element={<Filosofia />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  )
}

export default AppRoutes
