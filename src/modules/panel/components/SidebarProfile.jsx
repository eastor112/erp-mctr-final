import React from 'react'
import { capitalizeString, shortNameDepartment } from '../../../helpers/general-helpers'

export const SidebarProfile = ({ photoURL, displayName, department, category, director, professor, student, school, media }) => {

  return (
    <div className="sidebar__perfil">
      <figure>
        <img
          src={(media.profile === '') ? photoURL : import.meta.env.VITE_MEDIA_URL + media.profile}
          alt=""
        />
      </figure>
      <h3 className="perfil__nombre">
        {
          displayName
        }
      </h3>
      <div className="perfil__categoria">
        {
          director ?
            <>
              <p className="perfil__departamento">{shortNameDepartment(department)}</p>
              Director
            </>
            :
            professor ?
              <>
                <p className="perfil__departamento">{shortNameDepartment(department)}</p>
                Docente {capitalizeString(category)}
              </>
              :
              student ?
                <>
                  <p className="perfil__departamento">{school}</p>
                  Estudiante
                </>
                :
                'Externo'
        }
      </div>
    </div>
  )
}
