import React from 'react'

export const SyllabeDetailEvaluation = () => {
  return (
    <section className="silabo__evaluacion">
      <h3>5. SISTEMA DE EVALUACIÓN</h3>

      <div className="evaluacion__legal">
        <h5>Base legal:</h5>
        <ul>
          <li>Reglamento de normas generales de evaluación y aprendizaje con el enfoque en competencias, de los
            estudiantes de pregrado UNT.
          </li>
        </ul>
      </div>

      <div className="evaluacion__principios">
        <h5>Pricipios y procedimientos:</h5>
        <ul>
          <li>
            La evaluación por competencias se caracteriza por ser progresiva, formativa y auténtica por lo que es de
            procesos e integral, y se orienta a asegurar el logro de los aprendizajes esperados, capacidades y
            competencias respectivas.
          </li>
          <li>
            Se evalúan las evidencias concretas a través de las cuales los estudiantes demuestran haber logrado
            aprendizajes (exposiciones orales, presentación de trabajos escritos, ensayos, exposiciones, mapas
            conceptuales, infografías, maquetas, etc.) y sirven para recoger información, tomar decisiones oportunas
            e
            informar a los propios estudiantes y autoridades respectivas de las acciones de mejora.
          </li>
          <li>
            Las pruebas de evaluación se rendirán en las fechas señaladas por el docente y no podrán ser
            reprogramadas
            fuera de la fecha determinada.
          </li>
        </ul>
      </div>
      <div className="evaluacion__detalle">
        <h5>Detalle:</h5>
        <pre>
          {
            `
                La evaluación de las unidades [1] y [2] se realizará con la siguiente ecuación:
                PU=0.15*PI + 0.20*PP + 0.65*EE
                Donde:
                PI: Promedio informes o trabajos (Inx), evaluados con la rúbrica [1]
                PP: Promedio de prácticas realizadas (Px), evaluados con la rúbrica [2]
                EE: Examen escrito (Ex)
                  `
          }
        </pre>
      </div>

      <div className="evaluacion__criterios">
        <h5>Criterios para la promoción:</h5>
        <ul>
          <li>El sistema de calificación es vigesimal (0-20). La nota aprobatoria es 11, en el promedio promocional
            el medio punto (0.5) favorece al estudiante. La asistencia es obligatoria, tener más del 30% de
            inasistencia injustificada es causal de inhabilitación</li>
        </ul>
      </div>

      <div className="evaluacion__reportes">
        <h5>Nivel de logros:</h5>
        <ul>
          <li><span className="nivel__logro">Nivel de inicio: </span> Necesita reforzar las capacidades terminales
            previstas en coordinación con Dirección de Escuela y/o Estudios Generales, según corresponda. (0-10).
          </li>
          <li><span className="nivel__logro">Nivel en proceso: </span> Requiere fortalecer la mayoría de las capacidades
            terminales. (11-13)
          </li>
          <li><span className="nivel__logro">Nivel intermedio: </span> Muestra un nivel de dominio adecuado en las
            capacidades terminales en la experiencia curricular. (14-17)
          </li>
          <li><span className="nivel__logro">Nivel avanzado: </span> Posee un alto nivel de dominio de las capacidades
            terminales de la experiencia curricular (18-20)
          </li>
        </ul>
      </div>
    </section>
  )
}
