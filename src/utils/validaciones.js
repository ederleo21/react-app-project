const PATRON_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function estaVacio(valor) {
  return valor.trim() === ''
}

export function esEmailValido(valor) {
  return PATRON_EMAIL.test(valor.trim())
}

export function tieneLongitudMinima(valor, minimo = 2) {
  return valor.trim().length >= minimo
}

export function tieneEdadMinima(valor, edadMinima = 18) {
  if (!valor) return false
  const fecha = new Date(valor)
  if (Number.isNaN(fecha.getTime())) return false

  const hoy = new Date()
  let edad = hoy.getFullYear() - fecha.getFullYear()
  const diferenciaMes = hoy.getMonth() - fecha.getMonth()
  if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < fecha.getDate())) {
    edad -= 1
  }

  return edad >= edadMinima
}

export function validarCampo(nombre, valor) {
  switch (nombre) {
    case 'nombre':
    case 'apellidos':
      if (estaVacio(valor)) return 'Este campo es obligatorio.'
      if (!tieneLongitudMinima(valor)) return 'Debe tener al menos 2 caracteres.'
      return ''
    case 'email':
      if (estaVacio(valor)) return 'El correo es obligatorio.'
      if (!esEmailValido(valor)) return 'Introduce un correo electrónico válido.'
      return ''
    case 'fechaNacimiento':
      if (estaVacio(valor)) return 'La fecha de nacimiento es obligatoria.'
      if (!tieneEdadMinima(valor)) return 'Debes tener al menos 18 años.'
      return ''
    default:
      return ''
  }
}

export function validarFormulario(datos) {
  const errores = {}
  Object.keys(datos).forEach((nombre) => {
    const mensaje = validarCampo(nombre, datos[nombre])
    if (mensaje) errores[nombre] = mensaje
  })
  return errores
}
