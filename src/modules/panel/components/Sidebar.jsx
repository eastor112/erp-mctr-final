//react
import React, { useEffect, useState } from 'react'

//third
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isAdminToggle } from '../../../actions/auth-actions'

//local
import { SidebarCopyright } from './SidebarCopyright'
import { SidebarMenu } from './SidebarMenu'
import { SidebarProfile } from './SidebarProfile'
import { SiderbarButton } from './SiderbarButton'



//component
export const Sidebar = () => {

  const dispatch = useDispatch()
  const { user, photoURL, displayName, isAdmin } = useSelector(state => state.auth);


  const handleAdminview = () => {
    dispatch(isAdminToggle(!isAdmin))
  }

  return (
    <div className="panel__sidebar">

      <div className="sidebar__top">

        <SidebarProfile
          photoURL={photoURL}
          displayName={displayName}
          department={user.schoolInfo.department}
          director={user.director}
          professor={user.professor}
          student={user.student}
          school={user.schoolInfo.school}
          category={user.category}

        />

        <SidebarMenu adminView={isAdmin} />
      </div>

      <div className="sidebar__bottom">


        <SiderbarButton
          director={user.director}
          boss={user.boss}
          adminView={isAdmin}
          handleAdminview={handleAdminview}
          director={user.director}
        />

        <SidebarCopyright />

      </div>

    </div>
  )
}