import React from 'react'

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export const SyllabeDetailDate = ({ visadate }) => {

  const date = visadate?.split('-');

  return (
    <section className="silabo__fecha">
      {
        visadate
        &&
        <h4>Trujillo, {`${date[2]} de ${months[+date[1] - 1]} de ${date[0]}`}</h4>
      }
    </section>
  )
}
