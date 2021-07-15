import React from 'react'

export const ProfileGeneralFields = ({
  names,
  fathername,
  mothername,
  email,
  accesslevel,
  mobilenumber,
  school,
  handleInputChange,
  state }) => {
  return (
    <>
      <h4>Información general</h4>
      <div className='perfil__form__general'>

        {/* Nombres */}
        <div>
          <label htmlFor="names">Nombres:</label>
          <input
            id='names'
            type="text"
            placeholder="Escriba..."
            name='names'
            onChange={handleInputChange}
            value={names}
            autoComplete='off'
          />
        </div>


        {/* Apellido paterno */}
        <div>
          <label htmlFor="fathername">Apellido paterno:</label>
          <input
            id='fathername'
            type="text"
            placeholder="Escriba..."
            name='fathername'
            onChange={handleInputChange}
            value={fathername}
            autoComplete='off'
          />
        </div>


        {/* Apellido Materno */}
        <div>
          <label htmlFor="mothername">Apellido materno:</label>
          <input
            id='mothername'
            type="text"
            placeholder="Escriba..."
            name='mothername'
            onChange={handleInputChange}
            value={mothername}
            autoComplete='off'
          />
        </div>


        {/* Escuela */}
        <div>
          <label htmlFor="school">Escuela a la que brinda servicios:</label>
          <select
            name="school"
            id="school"
            value={school}
            onChange={handleInputChange}
          >
            {
              state.schools.length > 0 && (
                state.schools.map((schoolObj) => {
                  return <option value={schoolObj.id} key={schoolObj.id}> {schoolObj.name} </option>
                })
              )
            }
          </select>
        </div>


        {/* Nivel de acceso */}
        <div>
          <label htmlFor="accesslevel">Nivel de acceso:</label>
          <select
            id='accesslevel'
            name="accesslevel"
            onChange={handleInputChange}
            value={accesslevel}
            disabled
            readOnly
          >
            <option value="estudiante">Estudiante</option>
            <option value="docente">Docente</option>
            <option value="director">Director</option>
          </select>
        </div>


        {/* Email */}
        <div>
          <label htmlFor="email">Email institucional:</label>
          <input
            id='email'
            type="email"
            placeholder="Escriba..."
            name='email'
            onChange={handleInputChange}
            value={email}
            autoComplete='off'
            readOnly
            disabled
          />
        </div>


        {/* Número movil */}
        <div>
          <label htmlFor="mobilenumber">Numero de celular:</label>
          <input
            id='mobilenumber'
            type="text"
            placeholder="Escriba..."
            name='mobilenumber'
            onChange={handleInputChange}
            value={mobilenumber}
            autoComplete='off'
          />
        </div>


        {/* Foto perfil */}
        <div>
          <label htmlFor="photo">Foto perfil: </label>
          <input id='photo' type="file" />
        </div>


        {/* Firma */}
        <div>
          <label htmlFor="">Firma para la exportación de documentos: </label>
          <input type="file" />
        </div>

        <div></div>

      </div>
    </>
  )
}