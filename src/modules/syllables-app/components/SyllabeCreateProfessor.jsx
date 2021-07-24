import React from 'react'

export const SyllabeCreateProfessor = () => {
  return (
    <div className="docente__agregado">

      <div className="docente__agregado__titulo">
        <h5>Equipo docente 1:</h5>
        <button><i className="far fa-trash-alt"></i></button>
      </div>

      <div className="apellidos">
        <input type="text" placeholder="Apellido Paterno" />
        <input type="text" placeholder="Apellido Materno" />
      </div>
      <div className="nombre">
        <input type="text" placeholder="Nombres" />
      </div>
      <div className="profesion">
        <input type="text" placeholder="Profesion" />
      </div>
      <div className="email">
        <input type="email" placeholder="email" />
      </div>

      <div className="condicion__docente__agregado">
        <select name="condicion__docente__agregado" id="">
          <option value="">Condicion docente</option>
          <option value="">Equipo docente</option>
          <option value="">Coordinador</option>
        </select>
      </div>
    </div>
  )
}
