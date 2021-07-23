import React from 'react'
import { useParams } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { PanelProfileScreen } from '../profile/PanelProfileScreen'
import { PanelUsersScreen } from '../users/PanelUsersScreen'
import { MainContainerPanel } from '../components/MainContainerPanel'
import { SyllabeDetailScreen } from '../../syllables-app/SyllabeDetailScreen'
import { SyllabesListScreen } from '../../syllables-app/SyllabesListScreen'

export const PanelMainScreen = () => {

  const { location, syllabe_action } = useParams();
  // console.log(location, syllabe_action);

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
            (location == 'syllabes' && !syllabe_action) && <SyllabesListScreen />
          }

          {
            (location == 'syllabes' && syllabe_action == 'detail') && <SyllabeDetailScreen />
          }

        </main>
      </div>
    </>
  )
}
