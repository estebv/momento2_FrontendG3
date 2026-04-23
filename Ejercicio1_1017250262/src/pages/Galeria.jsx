import '../styles/Galeria.css'

const Galeria = () => {
  const bonsais = [
    {
      name: "Arce Japonés",
      description: "Elegancia y delicadeza en cada hoja"
    },
    {
      name: "Pino Negro",
      description: "Fuerza y resistencia en su forma"
    },
    {
      name: "Ficus Retusa",
      description: "Belleza tropical en miniatura"
    },
    {
      name: "Olmo Chino",
      description: "Tradición y sabiduría ancestral"
    }
  ]

  return (
    <div className="galeria-container">
      <div className="galeria-header">
        <h1>Nuestra Colección</h1>
        <p>
          Descubre la belleza y diversidad de nuestros bonsáis cuidadosamente seleccionados. 
          Cada pieza representa años de dedicación y arte, reflejando la perfecta armonía 
          entre naturaleza y paciencia.
        </p>
      </div>
      
      <div className="bonsai-grid">
        {bonsais.map((bonsai, index) => (
          <div key={index} className="bonsai-card">
            <div className="bonsai-image-placeholder">
              <div className="bonsai-icon">🌳</div>
            </div>
            <div className="bonsai-info">
              <h3>{bonsai.name}</h3>
              <p>{bonsai.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Galeria
