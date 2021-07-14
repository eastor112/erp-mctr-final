import React, { useEffect, useMemo, useState } from 'react'
import { capitalizeString, shortNameDepartment } from '../../../helpers/general-helpers'
import { getShoolData } from '../../../helpers/schools-helpers'

export const SidebarProfile = ({ photoURL, displayName, department, category }) => {

  return (
    <div className="sidebar__perfil">
      <figure>
        <img src={photoURL} alt="" />
      </figure>
      <h3 className="perfil__nombre">
        {
          displayName
        }
      </h3>
      <p className="perfil__departamento">{shortNameDepartment(department)}</p>
      <p className="perfil__categoria">Docente {capitalizeString(category)}</p>
    </div>
  )
}
