import React from 'react'

export const SyllabeFilters = () => {
  return (
    <div className="silabos__filtros">
      <div className="izquierda">
        <div className="ciclo">
          <label htmlFor="ciclo">Ciclo:</label>
          <select name="" id="ciclo">
            <option value="0">Todos</option>
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
            <option value="8">VIII</option>
            <option value="9">IX</option>
            <option value="10">X</option>
          </select>
        </div>

        <div className="semestre">
          <label htmlFor="semestre">Semestre:</label>
          <select name="" id="semestre">
            <option value="0">Todos</option>
            <option value="1">Nivelación</option>
            <option value="2">I</option>
            <option value="3">II</option>
          </select>
        </div>

        <div className="ordenar">
          <label htmlFor="ordenar">Ordenar por:</label>
          <select name="" id="ordenar">
            <option value="1">Fecha creación</option>
            <option value="2">Ult fecha de modificación</option>
            <option value="2">Estado</option>
          </select>
        </div>
      </div>

      <div className="derecha">
        <div className="busqueda">
          <input type="text" placeholder="buscar" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <button><a href="./silabo__crear.html">CREAR NUEVO SILABO</a></button>
      </div>
    </div>
  )
}
