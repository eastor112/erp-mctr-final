import React from 'react'

export const SyllabeDetailProfessorsTable = () => {
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
          <td>Asto Rodriguez Emerson Maximo</td>
          <td>Ingeniero Mecatrónico</td>
          <td>easto@unitru.edu.pe</td>
        </tr>
      </tbody>
    </table>
  )
}
