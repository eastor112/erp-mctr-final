import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuTopPanel = () => {
  return (
    <ul className="panel__menu__top">
      <li><NavLink to="/panel" exact activeClassName="seleccionado">Panel</NavLink></li>
      <li><NavLink to="/panel/syllabes" activeClassName="seleccionado">Silabos</NavLink></li>
      <li><NavLink to="/panel" exact>Evaluación</NavLink></li>
      <li><NavLink to="/panel" exact>Carga horaria</NavLink></li>
      <li><NavLink to="/panel" exact>Plan de estudios</NavLink></li>
      <li><NavLink to="/panel" exact>SIGCUNT</NavLink></li>
    </ul>
  )
}
