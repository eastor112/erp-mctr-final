import React from 'react'
import { useParams } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { PanelProfileScreen } from '../profile/PanelProfileScreen'
import { PanelUsersScreen } from '../users/PanelUsersScreen'
import { MainContainerPanel } from '../components/MainContainerPanel'
import { SyllabesList } from '../../syllables-app/SyllabesList'

export const PanelMainScreen = () => {

  const { location } = useParams();

  return (
    <>
      <div className="panel__container">

        <Sidebar />

        <main className="panel__main">
          {
            !location && <MainContainerPanel />
          }

          {
            location === 'users' && <PanelUsersScreen />
          }

          {
            location === 'profile' && <PanelProfileScreen />
          }

          {
            location == 'syllabes' && <SyllabesList />
          }

        </main>
      </div>
    </>
  )
}
