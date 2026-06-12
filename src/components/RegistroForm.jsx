import { useState } from 'react'
import CampoInput from './CampoInput.jsx'
import { validarCampo, validarFormulario } from '../utils/validaciones.js'
import '../styles/RegistroForm.css'

const ESTADO_INICIAL = {
  nombre: '',
  apellidos: '',
  email: '',
  fechaNacimiento: '',
}

const CAMPOS = [
  {
    id: 'nombre',
    label: 'Nombre',
    type: 'text',
    placeholder: 'Ej. María',
    autoComplete: 'given-name',
  },
  {
    id: 'apellidos',
    label: 'Apellidos',
    type: 'text',
    placeholder: 'Ej. García López',
    autoComplete: 'family-name',
  },
  {
    id: 'email',
    label: 'Correo electrónico',
    type: 'email',
    placeholder: 'correo@ejemplo.com',
    autoComplete: 'email',
  },
  {
    id: 'fechaNacimiento',
    label: 'Fecha de nacimiento',
    type: 'date',
    placeholder: '',
    autoComplete: 'bday',
  },
]

function RegistroForm() {
  const [datos, setDatos] = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setDatos((previo) => ({ ...previo, [name]: value }))
    if (enviado) setEnviado(false)
    if (errores[name]) {
      setErrores((previo) => ({ ...previo, [name]: validarCampo(name, value) }))
    }
  }

  const manejarBlur = (evento) => {
    const { name, value } = evento.target
    setErrores((previo) => ({ ...previo, [name]: validarCampo(name, value) }))
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    const nuevosErrores = validarFormulario(datos)
    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true)
      setDatos(ESTADO_INICIAL)
    } else {
      setEnviado(false)
    }
  }

  return (
    <section className="registro" id="registro" aria-labelledby="registro-titulo">
      <div className="contenedor registro__contenedor">
        <div className="registro__intro">
          <h2 id="registro-titulo" className="registro__titulo">
            Inscríbete en la academia
          </h2>
          <p className="registro__descripcion">
            Completa tus datos para reservar tu plaza en el próximo curso. Todos
            los campos son obligatorios.
          </p>
        </div>

        <form className="formulario" onSubmit={manejarEnvio} noValidate>
          {CAMPOS.map((campo) => (
            <CampoInput
              key={campo.id}
              id={campo.id}
              label={campo.label}
              type={campo.type}
              placeholder={campo.placeholder}
              autoComplete={campo.autoComplete}
              value={datos[campo.id]}
              onChange={manejarCambio}
              onBlur={manejarBlur}
              error={errores[campo.id]}
              required
            />
          ))}

          <button className="formulario__boton" type="submit">
            Reservar mi plaza
          </button>

          {enviado && (
            <p className="formulario__mensaje" role="status">
              ¡Gracias! Tu inscripción se ha registrado correctamente.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default RegistroForm
