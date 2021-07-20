import React, { useEffect, useState } from 'react'

export const ProfileStudentFields = ({
  codestudent,
  graduate,
  handleInputChange,
}) => {

  const [state, setState] = useState(graduate ? '1' : '0')

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


  return (
    <>
      <h4>Datos de estudiante</h4>
      <div className='perfil__form__estudiante'>
        <div>
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

        <div>
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
