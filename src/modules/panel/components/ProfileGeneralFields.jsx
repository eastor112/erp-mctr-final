import React from 'react'
import { onlyNameImage } from '../../../helpers/general-helpers'

export const ProfileGeneralFields = ({
  names,
  fathername,
  mothername,
  email,
  typeuser,
  mobilenumber,
  school,
  media,
  handleInputChange,
  handleInputFileChange,
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
        <div></div>


        {/* Foto perfil */}
        <div>
          <label htmlFor="">Foto perfil: </label>
          {
            (media.signature.length > 0)
            &&
            <img src={`${import.meta.env.VITE_MEDIA_URL}/${media.profile}`} alt="" height='50' />
          }
          <small style={{ color: 'green', fontSize: '12px', alignSelf: 'flex-end' }}>{onlyNameImage(media.profile)}</small>
          <input
            type="file"
            id='photo'
            name='photo'
            accept="image/*"
            onChange={handleInputFileChange}
          />

        </div>


        {/* Firma */}
        <div>
          <label htmlFor="">Firma para la exportación de documentos: </label>
          {
            (media.signature.length > 0)
            &&
            <img src={`${import.meta.env.VITE_MEDIA_URL}/${media.signature}`} alt="" height='50' />
          }
          <small style={{ color: 'green', fontSize: '12px', alignSelf: 'flex-end' }}> {onlyNameImage(media.signature)}</small>
          <input
            type="file"
            id='signature'
            name='signature'
            accept="image/*"
            onChange={handleInputFileChange}
          />
        </div>

      </div>
    </>
  )
}
