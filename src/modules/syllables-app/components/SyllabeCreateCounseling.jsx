import React from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'

export const SyllabeCreateCounseling = () => {
  return (
    <>
      <div className="consejeria__titulo">
        <h3>CONSEJERIA ACADÉMICA</h3>
        <SyllabeCreateRevision />
      </div>

      <div className="container__consejeria">

        <div className="lugar_titulo">
          <div>
            <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
          <h4>LUGAR Y HORA</h4>
        </div>

        <div className="consejeria__dia">
          <select name="dia" id="">
            <option value="">Dia</option>
            <option value="">Lunes</option>
            <option value="">Martes</option>
            <option value="">Miércoles</option>
            <option value="">Jueves</option>
            <option value="">Viernes</option>
          </select>
        </div>
        <div className="consejeria__hora">
          <input type="time" name="inicio" id="" />
          <input type="time" name="termino" id="" />
        </div>
        <div>
          <input type="text" placeholder="Lugar" />
        </div>
      </div>
    </>
  )
}
