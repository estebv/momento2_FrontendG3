import { useState } from 'react'
import '../styles/Reservas.css'

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    nivel: 'principiante',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí iría la lógica para enviar el formulario
    alert('Solicitud enviada correctamente. Nos contactaremos pronto.')
    setFormData({
      nombre: '',
      email: '',
      nivel: 'principiante',
      mensaje: ''
    })
  }

  return (
    <div className="reservas-container">
      <div className="reservas-form-container">
        <h1>Reserva un Taller</h1>
        <p>
          Únete a nosotros y descubre el arte milenario del bonsái. 
          Nuestros expertos te guiarán en este viaje de paciencia y belleza.
        </p>
        
        <form onSubmit={handleSubmit} className="reserva-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="nivel">Nivel de experiencia</label>
            <select
              id="nivel"
              name="nivel"
              value={formData.nivel}
              onChange={handleChange}
            >
              <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
              <option value="intermedio">Intermedio (Tengo algo de experiencia)</option>
              <option value="avanzado">Avanzado (Soy practicante regular)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje (Opcional)</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu interés en el bonsái..."
              rows="4"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reservas
