import React from 'react'
import { SyllabeDetailHoursTable } from './SyllabeDetailHoursTable'
import { SyllabeDetailProfessorsTable } from './SyllabeDetailProfessorsTable'

export const SyllabeDetailGeneralData = () => {
  return (
    <section className="silabo__datos">

      <h3>1. DATOS DE IDENTIFICACIÓN</h3>

      <div className="datos__contenido">
        <p><span className="datos__subtitulo">1.1. Area:</span> Ciencias básicas y tecnológicas</p>
        <p><span className="datos__subtitulo">1.2. Facultad:</span> Ingeniería</p>
        <p><span className="datos__subtitulo">1.3. Departamento académico:</span> Mecánica y energía</p>
        <p><span className="datos__subtitulo">1.4. Programa de estudios:</span> Ingeniería Mecatrónica</p>
        <p><span className="datos__subtitulo">1.5. Sede:</span> Trujillo </p>
        <p><span className="datos__subtitulo">1.6. Año - Semestre académico:</span> 2021-I</p>
        <p><span className="datos__subtitulo">1.7. Ciclo:</span> VI</p>
        <p><span className="datos__subtitulo">1.8. Código de la experiencia curricular:</span> ECM-VI5</p>
        <p><span className="datos__subtitulo">1.9. Sección/grupo:</span> A</p>
        <p><span className="datos__subtitulo">1.10. Créditos:</span> 4</p>

        <div>
          <p><span className="datos__subtitulo">1.11. Requisito(s):</span></p>
          <ul className="requisitos">
            <li>Análisis matemático IV</li>
            <li>Resistencia de materiales</li>
          </ul>
        </div>

        <p><span className="datos__subtitulo">1.12. Inicio - Término:</span> 15/05/21 - 15/09/21</p>
        <p><span className="datos__subtitulo">1.13. Tipo:</span> Específico</p>
        <p><span className="datos__subtitulo">1.14. Régimen:</span> Obligatorio</p>
        <p><span className="datos__subtitulo">1.15. Organización semestral del tiempo (semanas):</span> 15 semanas</p>

        <SyllabeDetailHoursTable />

        <p><span className="datos__subtitulo">1.16. Docente / equipo docente(s):</span></p>

        <SyllabeDetailProfessorsTable />
      </div>

    </section>
  )
}
