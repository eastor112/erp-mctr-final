import React from 'react'

export const SyllabeDetailHoursTable = () => {
  return (
    <table className="datos__tabla__horas">
      <thead>
        <tr >
          <th className="actividades" rowSpan="2">Actividades</th>
          <th className="horas" rowSpan="2">Total de horas</th>
          <th className="unidades" colSpan="3">Unidades</th>
        </tr>
        <tr>
          <th>I</th>
          <th>II</th>
          <th>III</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Teóricas</td>
          <td>32</td>
          <td>12</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Prácticas</td>
          <td>61</td>
          <td>23</td>
          <td>19</td>
          <td>19</td>
        </tr>
        <tr>
          <td>Retroalimentación</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Total horas</td>
          <td colSpan="4">96</td>
        </tr>
      </tbody>
    </table>
  )
}
