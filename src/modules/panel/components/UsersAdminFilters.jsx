import React from 'react'

export const UsersAdminFilters = () => {
  return (
    <section className="admin__filtros">
      <div className="izquierda">
        <div className="ordenar">
          <label htmlFor="ordenar">Facultad:</label>
          <select name="" id="facultad">
            <option value="2">Todas</option>
            <option value="2">Ingeniería</option>
            <option value="2">Ciencias Fisicas y Matemáticas</option>
            <option value="2">Ingeniería Química</option>
          </select>
        </div>
        <div>
          <label htmlFor="departamento">Departamento:</label>
          <select name="" id="departamento">
            <option value="2">Todos</option>
            <option value="2">Mecánica y energía</option>
            <option value="2">Mecatrónica</option>
            <option value="2">Industrial</option>
          </select>
        </div>
      </div>
      <div className="derecha">
        <div className="busqueda">
          <input type="text" placeholder="buscar" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </section>
  )
}
