import React from 'react'
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

export const SyllabeCreateControls = ({ pk }) => {

  const history = useHistory();

  const handleSave = () => {
    console.log('guardar silabo')
  }

  const handlePrint = () => {
    console.log('Imprimir sílabo');
  }

  const handleDelete = () => {
    console.log('Borrar sílabo')
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
        className="descargar"
        data-tip data-for='download'
        onClick={handlePrint}
      >
        <i className="fa fa-download" aria-hidden="true"></i>
      </button>

      <button
        className="visualizar"
        data-tip data-for='see'
        onClick={() => history.push(`/panel/syllabes/detail/${pk}`)}
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
      <ReactTooltip id='download'>Descargar</ReactTooltip>
      <ReactTooltip id='see'>Visualizar</ReactTooltip>
      <ReactTooltip id='delete'>Eliminar</ReactTooltip>
    </div>
  )
}
