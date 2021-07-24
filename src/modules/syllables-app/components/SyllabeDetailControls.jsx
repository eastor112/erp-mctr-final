import React from 'react'
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

export const SyllabeDetailControls = () => {
  const history = useHistory();

  const handlePrint = () => {
    console.log('Imprimir sílabo');
  }

  return (
    <div className="silabo__acciones">

      <button
        className="retornar"
        onClick={() => history.goBack()}
        data-tip data-for='back'
      >
        <i className="fas fa-undo-alt"></i>
      </button>


      <button
        className="descargar"
        onClick={handlePrint}
        data-tip data-for='download'
      >
        <i className="fa fa-download" aria-hidden="true"></i>
      </button>


      <button
        className="editar"
        onClick={() => history.push('/panel/syllabes/update')}
        data-tip data-for='edit'
      >
        <i className="far fa-edit"></i>
      </button>


      <button
        className="revisar"
        onClick={() => console.log('revisar sílabo')}
        data-tip data-for='review'
      >
        <i className="far fa-check-square"></i>
      </button>


      <button
        className="eliminar"
        onClick={() => console.log('eliminar sílabo')}
        data-tip data-for='delete'
      >
        <i className="far fa-trash-alt"></i>
      </button>


      <ReactTooltip id='back'>Atrás</ReactTooltip>
      <ReactTooltip id='download'>Descargar</ReactTooltip>
      <ReactTooltip id='edit'>Editar</ReactTooltip>
      <ReactTooltip id='review'>Revisar</ReactTooltip>
      <ReactTooltip id='delete'>Eliminar</ReactTooltip>
    </div>
  )
}
