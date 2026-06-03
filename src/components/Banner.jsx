import '../styles/Banner.css'

const ESTADISTICAS = [
  { valor: '+5.000', etiqueta: 'estudiantes' },
  { valor: '120', etiqueta: 'cursos' },
  { valor: '4.9 ★', etiqueta: 'valoración' },
]

function Banner() {
  return (
    <header className="banner">
      <div className="contenedor banner__contenido">
        <p className="banner__etiqueta">
          <span className="banner__punto" aria-hidden="true"></span>
          Academia Dev
        </p>
        <h1 className="banner__titulo">
          Aprende desarrollo web y potencia tu futuro
        </h1>
        <p className="banner__subtitulo">
          Cursos prácticos de HTML, CSS y JavaScript impartidos por
          profesionales. Inscríbete hoy y empieza a construir proyectos reales.
        </p>
        <a href="#registro" className="banner__cta">
          Inscríbete gratis
        </a>

        <dl className="banner__stats">
          {ESTADISTICAS.map((item) => (
            <div className="banner__stat" key={item.etiqueta}>
              <dt className="banner__stat-valor">{item.valor}</dt>
              <dd className="banner__stat-etiqueta">{item.etiqueta}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="banner__onda" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,48 C240,80 480,80 720,56 C960,32 1200,16 1440,40 L1440,80 L0,80 Z"
            fill="var(--color-fondo)"
          />
        </svg>
      </div>
    </header>
  )
}

export default Banner
