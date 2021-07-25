import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuTopPanel = () => {
  return (
    <ul className="panel__menu__top">
      <li><NavLink to={import.meta.env.BASE_URL + "panel"} exact activeClassName="seleccionado" >Panel</NavLink></li>
      <li><NavLink to={import.meta.env.BASE_URL + "panel/syllabes"} activeClassName="seleccionado" >Silabos</NavLink></li>
      <li><NavLink to={import.meta.env.BASE_URL + "panel/undefined1"} exact className='disabled'>Evaluación</NavLink></li>
      <li><NavLink to={import.meta.env.BASE_URL + "panel/undefined2"} exact className='disabled'>Carga horaria</NavLink></li>
      <li><NavLink to={import.meta.env.BASE_URL + "panel/undefined3"} exact className='disabled'>Plan de estudios</NavLink></li>
      <li><NavLink to={import.meta.env.BASE_URL + "panel/undefined4"} exact className='disabled'>SIGCUNT</NavLink></li>
    </ul>
  )
}
