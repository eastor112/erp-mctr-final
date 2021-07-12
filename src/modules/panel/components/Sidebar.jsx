import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="panel__sidebar">
      <div className="sidebar__top">
        <div className="sidebar__perfil">
          <figure>
            {/* <img src={datosUsuario ? datosUsuario.foto_perfil : null} alt="" /> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz7O8rCY21ol0EiHmOZ2LIoiLoKOm3yhHrgkARBIXRqWx9zQKZBFV4LrN4ZbBFi94UJs&usqp=CAU" />
          </figure>
          <h3 className="perfil__nombre">
            {/* {
              datosUsuario ? datosUsuario.nombres.split(' ').slice(-2, -1) + " " + datosUsuario.apellido_paterno : null
            } */}
            Emerson Maximo Asto Rodriguez
          </h3>
          {/* <p className="perfil__departamento">{datosUsuario ? datosUsuario.departamento : null}</p>
          <p className="perfil__categoria">{datosUsuario ? datosUsuario.tipo_usuario : null}</p> */}
          <p>texto 1</p>
          <p>texto 2</p>
        </div>

        <ul className="sidebar__menu">

          <li>
            <NavLink to='/panel' activeClassName="seleccionado">
              <i className="fas fa-th-large"></i>Panel de control
            </NavLink>
          </li>

          <li>
            <NavLink to='/panel/profile' activeClassName="seleccionado">
              <i className="fas fa-user-circle"></i>Perfil de usuario
            </NavLink>
          </li>
          {/* className="no-visible" */}
          <li>
            <NavLink to='/panel/users' activeClassName="seleccionado">
              <i className="fas fa-users"></i>Cuentas de usuario
            </NavLink>
          </li>

          <li>
            <NavLink to='/' >
              <i className="fas fa-sign-out-alt"></i>Salir
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__acciones">
          <button className="acciones__administrador">
            IR A VISTA ADMINISTRADOR
          </button>
          <button className="acciones__usuario no-activo">
            IR A VISTA USUARIO
          </button>
        </div>

        <div className="sidebar__copyright">
          <small className="copyright__autor">Diseñado y elaborado por <a href="https://eastor112.github.io/"
            target="_blank" rel='noreferrer'>eastor112</a></small>
          <small className="copyright__simbolo">Copyright 2021 <i className="fa fa-copyright" aria-hidden="true"></i></small>
        </div>
      </div>

    </div>
  )
}
