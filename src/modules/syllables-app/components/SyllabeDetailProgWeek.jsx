import React from 'react'

export const SyllabeDetailProgWeek = ({ week }) => {


  return (
    <>
      <tr className="semana">
        <td className="contenidos">
          {
            week.contents
          }
        </td>


        <td className="estrategias">
          {
            week.strategies
          }
        </td>

        <td className="evidencias">
          {
            week.evidences
          }
        </td>

        <td className="instrumentos">
          {
            week.instruments
          }
        </td>

        <td className="semana__fecha">
          <h4>Semana {week.weeknumber}</h4>
          {`\nDel:\n ${week.startweekdate.split("-").reverse().join("/")} 
        al \n ${week.finishweekdate.split("-").reverse().join("/")}`}
        </td>

      </tr>
    </>

  )
}
