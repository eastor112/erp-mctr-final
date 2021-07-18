import React from 'react'

export const ProfileStudentFields = ({
  codestudent,
  graduate,
  handleInputChange,
}) => {

  console.log(graduate);
  if (graduate) {
    const asdf = '1'
  }
  else {
    asdf = '0'
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
            value={graduate}
            onChange={handleInputChange}
          >
            <option value="1">Egresado</option>
            <option value="0">Estudios no concluidos</option>
          </select>
        </div>

      </div>
    </>
  )
}
