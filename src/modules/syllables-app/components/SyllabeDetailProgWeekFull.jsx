import React from 'react'

export const SyllabeDetailProgWeekFull = ({
  capabilities,
  outcomes,
  week,
  numberWeeks }) => {




  return (
    <tr className="semana">
      <td className="capacidades" rowSpan={numberWeeks}>
        <ul>
          {
            capabilities.map((capability) => (
              <li key={capability.id}>
                <span>[{capability.capacity.code}]</span> {capability.capacity.description}
              </li>
            ))
          }
        </ul>
      </td>

      <td className="resultados" rowSpan={numberWeeks}>

        {
          outcomes.map((outcome) => (
            <li key={outcome.id}>{outcome.description}</li>
          ))
        }

      </td>

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
  )
}
