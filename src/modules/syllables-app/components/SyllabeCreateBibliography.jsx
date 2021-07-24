import React from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'

export const SyllabeCreateBibliography = () => {
  return (
    <>
      <div className="bibliografia__titulo">
        <h3>BIBLIOGRAFÍA</h3>
        <SyllabeCreateRevision />
      </div>
      <div className="container__bibliografia">
        <div className="material__titulo">
          <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
          <h4>LIBROS Y MATERIAL ACADEMICO</h4>
        </div>
        <div className="agregar__referencia">
          <button>Agregar referencia</button>
        </div>
        <div className="referencia__agregada">
          <input type="text" placeholder="Referencia" />
          <input type="text" placeholder="Lugar donde se encuentra" />
          <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
        </div>
        <div className="referencia__agregada">
          <input type="text" placeholder="Referencia" />
          <input type="text" placeholder="Lugar donde se encuentra" />
          <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
        </div>
        <div className="referencia__agregada">
          <input type="text" placeholder="Referencia" />
          <input type="text" placeholder="Lugar donde se encuentra" />
          <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
        </div>
      </div>
    </>
  )
}
