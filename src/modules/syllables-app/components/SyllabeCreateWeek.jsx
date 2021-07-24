import React from 'react'

export const SyllabeCreateWeek = () => {
  return (
    <>
      <div className="semana__titulo">
        <div>
          <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <h5>SEMANA 1</h5>
      </div>

      <div className="container__semana">
        <div>
          <h6>Contenidos:</h6>
          <textarea name="contenidos" id="" cols="90" rows="5"></textarea>
        </div>
        <div>
          <h6>Estrategias didácticas:</h6>
          <textarea name="estrategias" id="" cols="90" rows="5"></textarea>
        </div>
        <div>
          <h6>Evidencias de desempeño:</h6>
          <textarea name="evidencias" id="" cols="90" rows="5"></textarea>
        </div>
        <div>
          <h6>Instrumentos de evaluación:</h6>
          <textarea name="instrumentos" id="" cols="90" rows="5"></textarea>
        </div>
      </div>
    </>
  )
}
