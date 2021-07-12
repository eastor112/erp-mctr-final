import React from 'react'
import { HeaderPanel } from '../components/HeaderPanel'
import { Sidebar } from '../components/Sidebar'

export const PanelUsersScreen = () => {
  return (
    <>
      <HeaderPanel />

      <div className="panel__container">

        <Sidebar />

        <main className="panel__main">

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

          <section className="admin__contenedor__user__card">

            {/* {
              usuarios ?
                usuarios.map((usuario) => {
                  return <CardUser usuario={usuario} />
                }) :
                null
            } */}

          </section>

          <section className="admin__modal__editar ">
            <form className="perfil__form" action="">
              <label htmlFor="permisos"></label>
              <select name="permisos" id="permisos">
                <option value="">Permisos de cuenta</option>
                <option value="">Estudiante</option>
                <option value="">Docente</option>
                <option value="">Director</option>
                <option value="">Administrador</option>
              </select>
              <label htmlFor="">Foto de perfil: <input type="file" /></label>

              <input type="text" placeholder="Nombres" />
              <input type="text" placeholder="Apellido paterno" />
              <input type="text" placeholder="Apellido materno" />
              <input type="email" placeholder="Email institucional" />

              <select name="select">
                <option value="value3" defaultValue>Estudiante</option>
                <option value="value3">Jefe de práctica</option>
                <option value="value3">Profesor auxiliar</option>
                <option value="value2">Profesor asociado</option>
                <option value="value1">Profesor principal</option>
              </select>
              <input type="number" placeholder="Código docente  ó matrícula estudiante" />
              <input type="text" placeholder="Cargo administrativo (opcional)" />
              <input type="text" placeholder="Facultad a la que pertenece" />
              <input type="text" placeholder="Departamento al que pertenece" />
              <input type="text" placeholder="Escuela a la que pertenece" />
              <input type="text" placeholder="Profesión" />

              <select name="select">
                <option value="value1" defaultValue>Estudiante</option>
                <option value="value1">Bachiller</option>
                <option value="value2">Titulado o licenciado</option>
                <option value="value3">Magister</option>
                <option value="value3">Doctor</option>
                <option value="value3">Philosophie Doctor</option>
              </select>
              <label htmlFor="">Firma digital: <input type="file" /></label>
              <button type="submit">
                <i className="fa fa-save" aria-hidden="true"></i>
                &nbsp;&nbsp;GUARDAR CAMBIOS
              </button>
            </form>
          </section>

        </main>

      </div>
    </>
  )
}
