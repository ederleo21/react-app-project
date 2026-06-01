function CampoInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  error = '',
  required = false,
}) {
  const idError = `${id}-error`
  const hayError = Boolean(error)

  return (
    <div className="campo">
      <label className="campo__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`campo__input${hayError ? ' campo__input--error' : ''}`}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={hayError}
        aria-describedby={hayError ? idError : undefined}
      />
      {hayError && (
        <span className="campo__error" id={idError} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default CampoInput
