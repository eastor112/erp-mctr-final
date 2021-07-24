import React from 'react'

export const SyllabeCreateControls = () => {
  return (
    <div className="silabo__acciones">
      <button className="retornar" onClick={() => hist.goBack()}>
        <i className="fas fa-undo-alt"></i>
      </button>
      <button className="guardar" onClick={() => hist.push('/panel/silabos/crear')}>
        <i className="fas fa-save"></i>
      </button>
      <button className="descargar" onClick={() => hist.push('/panel/silabos')}>
        <i className="fa fa-download" aria-hidden="true"></i>
      </button>
      <button className="visualizar" onClick={() => hist.push('/panel/silabos/detalle')}>
        <i className="fas fa-play"></i>
      </button>
      <button className="eliminar">
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  )
}
