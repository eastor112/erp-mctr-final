import React from 'react'

export const SyllabeDetailProfessorsTable = ({
  principalprofessor,
  assistantprofessors }) => {

  return (
    <table className="datos__tabla__docente">
      <thead>
        <tr>
          <th>CONDICIÓN: </th>
          <th>APELLIDOS Y NOMBRES: </th>
          <th>PROFESIÓN: </th>
          <th>EMAIL INSTITUCIONAL: </th>
        </tr>
      </thead>

      <tbody className="">

        <tr>
          <td>Coordinador(a):</td>
          <td>{`${principalprofessor.names} ${principalprofessor.fathername} ${principalprofessor.mothername}`}</td>
          <td>{principalprofessor.career}</td>
          <td>{principalprofessor.email}</td>
        </tr>
        {
          (assistantprofessors?.length > 0)
          &&
          assistantprofessors.map(professor => {
            return (
              <tr key={professor.id}>
                <td>Apoyo:</td>
                <td>{`${professor.names} ${professor.fathername} ${professor.mothername}`}</td>
                <td>{professor.career}</td>
                <td>{professor.email}</td>
              </tr>
            )
          })
        }



      </tbody>


    </table>
  )
}
