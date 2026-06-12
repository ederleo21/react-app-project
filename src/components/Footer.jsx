import '../styles/Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const anioActual = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__contenido">
        <p className="footer__marca">Academia Dev</p>
        <nav className="footer__nav" aria-label="Enlaces del pie de página">
          <a href="#registro" className="footer__enlace">
            Inscripción
          </a>
          <a href="#" className="footer__enlace">
            Cursos
          </a>
          <a href="#" className="footer__enlace">
            Contacto
          </a>
        </nav>
        <p className="footer__copy">
          © {anioActual} Academia Dev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
