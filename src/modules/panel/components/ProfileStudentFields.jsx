import React from 'react'

export const ProfileStudentFields = () => {
  return (
    <>
      <h4>Datos de estudiante:</h4>
      <div className='perfil__form__estudiante'>
        <div>
          <label htmlFor="codestudent">Código de estudiante</label>
          <input
            type="text"
            id='codestudent'
            name='codestudent'
            placeholder='Escriba...'
          />
        </div>

        <div>
          <label htmlFor="graduate">Estado</label>
          <select name="graduate" id="graduate">
            <option value="1">Egresado</option>
            <option value="0">Estudios no concluidos</option>
          </select>
        </div>

      </div>
    </>
  )
}
