import React from 'react'

export const SiderbarButton = ({ director, boss, adminView, handleAdminview }) => {

  return (
    <>
      {
        (director || boss) &&

        <div className="sidebar__acciones">
          {
            !adminView &&
            (
              <button
                className="acciones__administrador"
                onClick={handleAdminview}
              >
                IR A VISTA ADMINISTRADOR
              </button>
            )
          }


          {
            adminView &&
            (
              <button
                className="acciones__usuario"
                onClick={handleAdminview}
              >
                IR A VISTA USUARIO
              </button>
            )
          }

        </div>
      }
    </>
  )
}
