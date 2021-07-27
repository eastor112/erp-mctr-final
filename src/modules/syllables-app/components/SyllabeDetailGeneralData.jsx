import React from 'react'
import { SyllabeDetailHoursTable } from './SyllabeDetailHoursTable'
import { SyllabeDetailProfessorsTable } from './SyllabeDetailProfessorsTable'

export const SyllabeDetailGeneralData = ({
  area,
  faculty,
  department,
  school,
  campus,
  year,
  semester,
  cycle,
  code,
  section,
  credits,
  prerequisite,
  startdate,
  finishdate,
  totalweeks,
  type,
  regime,
  units,
  theoryhours,
  practicehours,
  laboratoryhours,
  principalprofessor,
  assistantprofessors }) => {


  const weekPerUnit = units?.map((unit) => unit.durationweeks)


  return (
    <section className="silabo__datos">
      {
        weekPerUnit
        &&
        <>
          <h3>1. DATOS DE IDENTIFICACIÓN</h3>

          <div className="datos__contenido">

            <p><span className="datos__subtitulo">1.1. Area:</span>
              {
                area === 'tecnologica'
                  ?
                  'Ciencias básicas y tecnológicas'
                  :
                  area === 'general'
                    ?
                    'Estudios generales'
                    :
                    'No definido'
              }
            </p>

            <p><span className="datos__subtitulo">1.2. Facultad:</span> {faculty.substring(11)}</p>
            <p><span className="datos__subtitulo">1.3. Departamento académico:</span> {department.substring(16)}</p>
            <p><span className="datos__subtitulo">1.4. Programa de estudios:</span> {school.substring(10)}</p>
            <p><span className="datos__subtitulo">1.5. Sede:</span> {campus.substring(5)} </p>

            <p>
              <span className="datos__subtitulo">1.6. Año - Semestre académico:</span>
              {year} - {(semester === 1) ? 'I' : (semester === 2) ? 'II' : 'Niv'}
            </p>

            <p><span className="datos__subtitulo">1.7. Ciclo:</span> {cycle} </p>
            <p><span className="datos__subtitulo">1.8. Código de la experiencia curricular:</span> {code}</p>

            <p>
              <span className="datos__subtitulo">1.9. Sección/grupo:</span>
              {section === 'a' ? 'A' : (section === 'b') ? 'B' : 'Única'}
            </p>

            <p><span className="datos__subtitulo">1.10. Créditos:</span>{credits}</p>

            <div>
              <p><span className="datos__subtitulo">1.11. Requisito(s):</span></p>
              <ul className="requisitos">
                {
                  prerequisite
                  &&
                  prerequisite.map((prereq) => {
                    return <li key={prereq.id} >{prereq.code} - {prereq.name}</li>
                  })
                }
              </ul>
            </div>

            <p>
              <span className="datos__subtitulo">1.12. Inicio - Término:</span>
              {startdate?.split("-").reverse().join("-")} - {finishdate?.split("-").reverse().join("-")}
            </p>

            <p><span className="datos__subtitulo">1.13. Tipo:</span> {type}</p>
            <p><span className="datos__subtitulo">1.14. Régimen:</span> {regime}</p>
            <p><span className="datos__subtitulo">1.15. Organización semestral del tiempo (semanas):</span> {totalweeks} semanas</p>

            <SyllabeDetailHoursTable
              weekPerUnit={weekPerUnit}
              theoryhours={theoryhours}
              practicehours={practicehours}
              laboratoryhours={laboratoryhours}
              totalweeks={totalweeks}
            />

            <p><span className="datos__subtitulo">1.16. Docente / equipo docente(s):</span></p>

            <SyllabeDetailProfessorsTable
              principalprofessor={principalprofessor}
              assistantprofessors={assistantprofessors}
            />
          </div>

        </>
      }

    </section>

  )
}