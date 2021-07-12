import React from 'react'
import { HeaderPanel } from '../components/HeaderPanel'
import { Sidebar } from '../components/Sidebar'

export const PanelProfileScreen = () => {
  return (
    <>

      <h1>USER PROFILE</h1>
      {/* {
            datosUsuario &&
            <>
              <h3 className="perfil__usuario__titulo">PERFIL DE {`${datosUsuario.nombres} ${datosUsuario.apellido_paterno} ${datosUsuario.apellido_materno}`.toUpperCase()}</h3>
              <form className="perfil__form" action="">
                <label htmlFor="">Foto de perfil: <input type="file" /></label>

                <input type="text" placeholder="Nombres" value={datosUsuario.nombres} />
                <input type="text" placeholder="Apellido paterno" value={datosUsuario.apellido_paterno} />
                <input type="text" placeholder="Apellido materno" value={datosUsuario.apellido_materno} />
                <input type="email" placeholder="Email institucional" value={datosUsuario.email_unitru} />

                <select name="select">
                  <option value="value0" defaultValue>{datosUsuario.tipo_usuario}</option>
                  <option value="value1">Jefe de práctica</option>
                  <option value="value2">Docente auxiliar</option>
                  <option value="value3">Docente asociado</option>
                  <option value="value4">Docente principal</option>
                </select>
                <input type="number" placeholder="Código docente  ó matrícula estudiante" value={datosUsuario.codigo} />
                <input type="text" placeholder="Cargo administrativo (opcional)" value={datosUsuario.cargo} />
                <input type="text" placeholder="Facultad a la que pertenece" value={'Facultad de ' + datosUsuario.facultad} />
                <input type="text" placeholder="Departamento al que pertenece" value={'Departamento de ' + datosUsuario.departamento} />
                <input type="text" placeholder="Escuela a la que pertenece" value={'Escuela académico profesional de ' + datosUsuario.escuela} />
                <input type="text" placeholder="Profesión" value={datosUsuario.profesion} />

                <select name="select">
                  <option value="value0" defaultValue>{datosUsuario.grado_academico}</option>
                  <option value="value1">Estudiante</option>
                  <option value="value2">Bachiller</option>
                  <option value="value3">Titulado o licenciado</option>
                  <option value="value4">Magister</option>
                  <option value="value5">Doctor</option>
                  <option value="value6">Philosophie Doctor</option>
                </select>
                <label htmlFor="">Firma digital: <input type="file" /></label>
                <button type="submit">
                  <i className="fa fa-save" aria-hidden="true"></i>
                  &nbsp;&nbsp;GUARDAR CAMBIOS
                </button>
              </form>
            </>
          } */}

    </>
  )
}
