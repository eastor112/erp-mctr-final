import React from 'react'

export const SyllabeDetailBibliography = ({ resources }) => {

  return (
    <section className="silabo__bibliografia">
      <h3>7. BIBLIOGRAFÍA</h3>

      <table>

        <thead>
          <tr>
            <th>REFERENCIA</th>
            <th>ENLACE VIRTUAL O LUGAR</th>
          </tr>
        </thead>

        <tbody>
          {
            resources.map((resource) => {
              return (
                <tr key={resource.id} className="referencia">
                  <td>
                    {resource.reference} {resource.principalresource && <small>(Libro texto)</small>}
                  </td>
                  <td className="lugar">
                    {resource.location}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}
