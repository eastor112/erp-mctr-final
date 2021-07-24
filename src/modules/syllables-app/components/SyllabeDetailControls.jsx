import React from 'react'

export const SyllabeDetailControls = () => {
  return (
    <div className="silabo__acciones">
      <button className="retornar" onClick={() => hist.goBack()}>
        <i className="fas fa-undo-alt"></i>
      </button>
      <button className="descargar" onClick={() => hist.push('/panel/silabos/detalle')}>
        <i className="fa fa-download" aria-hidden="true"></i>
      </button>
      <button className="editar" onClick={() => hist.push('/panel/silabos/crear')}>
        <i className="far fa-edit"></i>
      </button>
      <button className="revisar" onClick={() => hist.push('/panel/silabos/crear')}>
        <i className="far fa-check-square"></i>
      </button>
      <button className="eliminar" onClick={() => hist.push('/panel/silabos')}>
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  )
}
