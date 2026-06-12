import '../styles/InfoSection.css'

const CARACTERISTICAS = [
  {
    id: 'practico',
    titulo: 'Aprendizaje práctico',
    texto: 'Construye proyectos reales desde la primera clase y crea tu portafolio.',
    icono: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Monitor */}
        <rect x="6" y="6" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M6 26h36" stroke="currentColor" strokeWidth="2.2" />
        <path d="M18 32h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 32v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 38h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* Code lines */}
        <path d="M14 14l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 22h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
        <path d="M24 18h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.4" />
        {/* Decorative dot */}
        <circle cx="35" cy="10" r="1.5" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
  {
    id: 'mentores',
    titulo: 'Mentores expertos',
    texto: 'Aprende de profesionales en activo que te acompañan en cada paso.',
    icono: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Main person */}
        <circle cx="24" cy="15" r="6" stroke="currentColor" strokeWidth="2.2" />
        <path d="M12 38a12 12 0 0124 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* Left person (smaller) */}
        <circle cx="10" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
        <path d="M3 34a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        {/* Right person (smaller) */}
        <circle cx="38" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
        <path d="M31 34a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        {/* Star badge */}
        <path d="M24 5l1.1 2.2 2.4.4-1.7 1.7.4 2.4L24 10.5l-2.2 1.2.4-2.4-1.7-1.7 2.4-.4L24 5z" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'certificado',
    titulo: 'Certificado oficial',
    texto: 'Obtén un certificado verificable al completar tu formación.',
    icono: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Document */}
        <rect x="10" y="4" width="28" height="34" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
        {/* Text lines */}
        <path d="M17 13h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M17 18h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.5" />
        <path d="M17 23h7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.35" />
        {/* Seal circle */}
        <circle cx="33" cy="33" r="9" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="33" cy="33" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        {/* Checkmark inside seal */}
        <path d="M29.5 33l2.5 2.5 4-4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Ribbon */}
        <path d="M28 41l-2 5 4-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        <path d="M38 41l2 5-4-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
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
