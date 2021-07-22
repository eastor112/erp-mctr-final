import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState)

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  }

  //Para manejo de entradas
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    });
  }

  //Para manejo de archivos
  const handleInputFileChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.files[0]
    });
  }

  //Para actualizar todos los campos de usuario
  const allUpdateFields = (user) => {
    setState({
      ...user
    })
  }



  return [
    state,
    handleInputChange,
    handleInputFileChange,
    allUpdateFields,
    reset
  ]
}