import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { startGoogleLogout } from '../../../actions/auth-actions';


export const SidebarMenu = ({ adminView }) => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startGoogleLogout());
  }


  return (
    <ul className="sidebar__menu">
      <li>
        <NavLink exact to='/panel' activeClassName="seleccionado">
          <i className="fas fa-th-large"></i>Panel de control
        </NavLink>
      </li>

      <li>
        <NavLink to='/panel/profile' activeClassName="seleccionado">
          <i className="fas fa-user-circle"></i>Perfil de usuario
        </NavLink>
      </li>

      {
        adminView &&
        (
          <li>
            <NavLink to='/panel/users' activeClassName="seleccionado">
              <i className="fas fa-users"></i>Cuentas de usuario
            </NavLink>
          </li>
        )
      }

      <button
        className='logout'
        onClick={handleLogout}
      >
        <li><i className="fas fa-sign-out-alt"></i>Salir</li>
      </button>

    </ul>
  )
}
