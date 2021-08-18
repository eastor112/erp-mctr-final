import React from 'react'
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { deleteSyllabe } from '../../../helpers/syllabes-helpers';

export const SyllabeCreateControls = ({ pk, token }) => {

  const history = useHistory();

  const handleSave = () => {
    console.log('guardar silabo')
  }


  const handleDelete = () => {
    deleteSyllabe(pk, token).
      then(() => {
        history.push(`${import.meta.env.BASE_URL}panel/syllabes`)
      })
  }

  return (
    <div className="silabo__acciones">

      <button
        className="retornar"
        data-tip data-for='back'
        onClick={() => history.goBack()}
      >
        <i className="fas fa-undo-alt"></i>
      </button>

      <button
        className="guardar"
        data-tip data-for='save'
        onClick={handleSave}
      >
        <i className="fas fa-save"></i>
      </button>



      <button
        className="visualizar"
        data-tip data-for='see'
        onClick={() => history.push(`${import.meta.env.BASE_URL}panel/syllabes/detail/${pk}`)}
      >
        <i className="fas fa-play"></i>
      </button>

      <button
        className="eliminar"
        data-tip data-for='delete'
        onClick={handleDelete}
      >
        <i className="far fa-trash-alt"></i>
      </button>

      <ReactTooltip id='back'>Atrás</ReactTooltip>
      <ReactTooltip id='save'>Guardar</ReactTooltip>
      {/* <ReactTooltip id='download'>Descargar</ReactTooltip> */}
      <ReactTooltip id='see'>Visualizar</ReactTooltip>
      <ReactTooltip id='delete'>Eliminar</ReactTooltip>
    </div>
  )
}
