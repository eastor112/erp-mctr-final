import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState)

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  }

  //Para manejo de entradas
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }

  //Para manejo de archivos
  const handleInputFileChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.files[0]
    });
  }

  //Para actualizar todos los campos de usuario
  const allUpdateFields = (user) => {
    setFormValues({
      ...user
    })
  }



  return {
    formValues,
    handleInputChange,
    handleInputFileChange,
    allUpdateFields,
    setFormValues,
    reset
  }
}