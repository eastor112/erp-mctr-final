import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuTopPanel = () => {
  return (
    <ul className="panel__menu__top">
      <li><NavLink to="/panel" exact activeClassName="seleccionado" >Panel</NavLink></li>
      <li><NavLink to="/panel/syllabes" activeClassName="seleccionado" >Silabos</NavLink></li>
      <li><NavLink to="/panel/undefined1" exact className='disabled'>Evaluación</NavLink></li>
      <li><NavLink to="/panel/undefined2" exact className='disabled'>Carga horaria</NavLink></li>
      <li><NavLink to="/panel/undefined3" exact className='disabled'>Plan de estudios</NavLink></li>
      <li><NavLink to="/panel/undefined4" exact className='disabled'>SIGCUNT</NavLink></li>
    </ul>
  )
}
