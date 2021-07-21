import { useState } from "react"

// initialState -> valor verdadero o false de la base de datos
// handleInputChange -> funcion de modificación en el useForm (CustomHook)
export const useBooleanFields = (initialState, handleInputChange) => {

  const [state, setState] = useState(initialState ? '1' : '0')

  const handleChange = (e) => {
    setState(e.target.value)

    if (e.target.value === '1') {
      handleInputChange({
        target: {
          name: e.target.name,
          value: true,
        }
      })
    } else {
      handleInputChange({
        target: {
          name: e.target.name,
          value: false,
        }
      })
    }
  }

  return [
    state,  // Se conecta al 'value' del campo
    handleChange  // Se conecta al 'onChange'
  ]
}