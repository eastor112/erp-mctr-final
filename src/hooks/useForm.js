import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState)

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  }

  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    });
  }

  const handleInputFileChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.files[0]
    });
  }

  return [
    state,
    handleInputChange,
    handleInputFileChange,
    reset
  ]
}