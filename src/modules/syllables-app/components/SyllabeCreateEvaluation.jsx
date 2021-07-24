import React from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'

export const SyllabeCreateEvaluation = () => {

  const valorDefecto1 = `-La evaluación por competencias se caracteriza por ser progresiva, formativa y auténtica por lo que es de procesos e integral, y se orienta a asegurar el logro de los aprendizajes esperados, capacidades y competencias respectivas.\n
  -Se evalúan las evidencias concretas a través de las cuales los estudiantes demuestran haber logrado aprendizajes (exposiciones orales, presentación de trabajos escritos, ensayos, exposiciones, mapas conceptuales, infografías, maquetas, etc.) y sirven para recoger información, tomar decisiones oportunas e informar a los propios estudiantes y autoridades respectivas de las acciones de mejora.\n
  -Las pruebas de evaluación se rendirán en las fechas señaladas por el docente y no podrán ser reprogramadas fuera de la fecha determinada.`

  const valorDefecto2 = `PF = (PU1 + PU2 + PU3)/3`

  const valorDefecto3 = `El sistema de calificación es vigesimal (0-20). La nota aprobatoria es 11, en el promedio promocional el medio punto (0.5) favorece al estudiante. La asistencia es obligatoria, tener más del 30% de inasistencia injustificada es causal de inhabilitación`

  return (
    <>

      <div className="evaluacion__titulo">
        <h3>EVALUACIÓN</h3>
        <SyllabeCreateRevision />
      </div>
      <div className="container__evaluacion">
        <div className="descripcion__titulo">
          <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
          <h4>DESCRIPCIÓN</h4>
        </div>
        <div className="principios">
          <h5>Principios y procedimientos</h5>
          <textarea name="principios" id="" cols="90" rows="5" defaultValue={valorDefecto1}>

          </textarea>
        </div>
        <div className="detalle">
          <h5>Detalle: </h5>
          <textarea name="principios" id="" cols="90" rows="5" defaultValue={valorDefecto2}></textarea>
        </div>
        <div className="criterios">
          <h5>Criterios para la promoción: </h5>
          <textarea name="criterios" id="" cols="90" rows="5" defaultValue={valorDefecto3}></textarea>
        </div>
      </div>


    </>
  )
}
