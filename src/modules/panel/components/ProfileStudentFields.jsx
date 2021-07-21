import React, { useState } from 'react'
import { useBooleanFields } from '../../../hooks/useBooleanField'

export const ProfileStudentFields = ({
  codestudent,
  graduate,
  handleInputChange,
}) => {

  const [state, handleChange] = useBooleanFields(graduate, handleInputChange);

  return (
    <>
      <h4>Datos de estudiante</h4>
      <div className='perfil__form__estudiante'>
        <div className='admin__user__modal__field'>
          <label htmlFor="codestudent">Código de estudiante</label>
          <input
            type="text"
            placeholder='Escriba...'
            id='codestudent'
            name='codestudent'
            value={codestudent}
            onChange={handleInputChange}
          />
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="graduate">Estado</label>
          <select
            id="graduate"
            name="graduate"
            value={state}
            onChange={handleChange}
          >
            <option value="1">Egresado</option>
            <option value="0">Estudios no concluidos</option>
          </select>
        </div>

      </div>
    </>
  )
}
