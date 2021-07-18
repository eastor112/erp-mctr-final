import React from 'react'

export const ProfileGeneralFields = ({
  names,
  fathername,
  mothername,
  email,
  typeuser,
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



        {/* Escuela */}
        <div>
          <label htmlFor="school">Escuela a la que brinda servicios:</label>
          <select
            name="school"
            id="school"
            value={school}
            onChange={handleInputChange}
          >

            <option value=''> No especificado </option>
            {
              state.schools.length > 0 && (
                state.schools.map((schoolObj) => {
                  return <option value={schoolObj.id} key={schoolObj.id}> {schoolObj.name} </option>
                })
              )
            }
          </select>
        </div>


        {/* Tipo de usuario */}
        <div>
          <label htmlFor="typeuser">Tipo de usuario:</label>
          <select
            id='typeuser'
            name="typeuser"
            onChange={handleInputChange}
            value={typeuser}
          >
            <option value='externo'> externo </option>
            <option value="estudiante">Estudiante</option>
            <option value="docente">Docente</option>
            <option value="director">Director</option>

          </select>
        </div>





        {/* Número movil */}
        <div>
          <label htmlFor="mobilenumber">Numero de celular:</label>
          <input
            id='mobilenumber'
            type="number"
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
