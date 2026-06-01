import '../styles/InfoSection.css'

const CARACTERISTICAS = [
  {
    id: 'practico',
    titulo: 'Aprendizaje práctico',
    texto: 'Construye proyectos reales desde la primera clase y crea tu portafolio.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'mentores',
    titulo: 'Mentores expertos',
    texto: 'Aprende de profesionales en activo que te acompañan en cada paso.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 14a5 5 0 100-10 5 5 0 000 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 21a8 8 0 0116 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'certificado',
    titulo: 'Certificado oficial',
    texto: 'Obtén un certificado verificable al completar tu formación.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 15a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14l-1 7 4-2 4 2-1-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function InfoSection() {
  return (
    <section className="info" aria-labelledby="info-titulo">
      <div className="contenedor">
        <h2 id="info-titulo" className="info__titulo">
          ¿Por qué estudiar con nosotros?
        </h2>
        <ul className="info__lista">
          {CARACTERISTICAS.map((item) => (
            <li className="info__tarjeta" key={item.id}>
              <span className="info__icono">{item.icono}</span>
              <h3 className="info__tarjeta-titulo">{item.titulo}</h3>
              <p className="info__tarjeta-texto">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default InfoSection
