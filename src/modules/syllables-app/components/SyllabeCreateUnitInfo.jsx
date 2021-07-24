import React from 'react'

export const SyllabeCreateUnitInfo = () => {
  return (
    <>
      <div className="unidad__titulo">
        <div>
          <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <h4>UNIDAD 2</h4>
      </div>

      <div>
        <input type="text" placeholder="Escriba el tema de la unidad" />
      </div>
    </>
  )
}
