import React from 'react'

const unitsRomans = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X'
]

export const SyllabeDetailHoursTable = ({
  weekPerUnit,
  theoryhours,
  practicehours,
  laboratoryhours,
  totalweeks
}) => {
  const totalHoursTheory = totalweeks * theoryhours;
  const totalHoursPractice = totalweeks * (practicehours + laboratoryhours) - weekPerUnit.length;

  const totalHours = totalweeks * (theoryhours + practicehours + laboratoryhours);

  return (
    <table className="datos__tabla__horas">

      <thead>
        <tr >
          <th className="actividades" rowSpan="2">Actividades</th>
          <th className="horas" rowSpan="2">Total de horas</th>
          <th className="unidades" colSpan={weekPerUnit.length}>Unidades</th>
        </tr>
        <tr>
          {
            weekPerUnit.map((numberWeeks, i) => {
              return <th key={i}>{unitsRomans[i]}</th>
            })
          }
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Teóricas</td>
          <td>{totalHoursTheory}</td>
          {
            weekPerUnit.map((numberWeeks, i) => (
              <td key={i * 2}>{numberWeeks * theoryhours}</td>
            ))
          }
        </tr>

        <tr>
          <td>Prácticas</td>
          <td>{totalHoursPractice}</td>
          {
            weekPerUnit.map((numberWeeks, i) => (
              <td key={i * 3}>{numberWeeks * (practicehours + laboratoryhours) - 1}</td>
            ))
          }
        </tr>

        <tr>
          <td>Retroalimentación</td>
          <td>{weekPerUnit.length}</td>
          {
            weekPerUnit.map((numberWeeks, i) => (
              <td key={i * 4}>1</td>
            ))
          }
        </tr>

        <tr>
          <td>Total horas</td>
          <td>{totalHours}</td>
          {
            weekPerUnit.map((numberWeeks, i) => (
              <td key={i * 5}>{numberWeeks * (theoryhours + practicehours + laboratoryhours)}</td>
            ))
          }
        </tr>
      </tbody>
    </table>
  )
}
