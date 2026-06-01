import '../styles/Footer.css'

function Footer() {
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
          © 2026 Academia Dev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
