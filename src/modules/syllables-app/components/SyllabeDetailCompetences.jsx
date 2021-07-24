import React from 'react'

export const SyllabeDetailCompetences = () => {
  return (
    <section className="silabo__competencias">
      <h3>3. COMPETENCIAS GENERALES</h3>
      <div className="competencias__generales">
        <div className="competencia">
          <p><span>Competencia general 1(CG1): </span>Demuestra compromiso e iniciativa para promover el desarrollo
            ético, social, cultural y ambiental mediante la práctica de actividades artísticas, culturales, sociales
            y deportivas.
          </p>
        </div>
        <div className="competencia">
          <p><span>Competencia general 2 (CG2): </span> Desarrolla su pensamiento crítico, aplicado en la solución
            de problemas en un contexto globalizado, haciendo uso de la tecnología de la información.</p>
        </div>
      </div>

      <div className="competencias__unidades">
        <div className="competencia__unidad">
          <p><span>Unidad competencia (UC1): </span>Se desenvuelve eficazmente como miembro o líder de equipos
            diversos.</p>
        </div>
        <div className="competencia__unidad">
          <p><span>Unidad competencia (UC2): </span>Crea, selecciona y utiliza técnicas, recursos y herramientas
            modernas de la ingeniería, incluyendo la predicción y el modelamiento, con la comprensión de sus
            limitaciones para aplicarlas en la solución de problemas.</p>
        </div>
      </div>
    </section>
  )
}
