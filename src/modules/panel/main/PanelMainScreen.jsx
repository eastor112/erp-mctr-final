import React from 'react'
import { useParams } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { PanelProfileScreen } from '../profile/PanelProfileScreen'
import { PanelUsersScreen } from '../users/PanelUsersScreen'
import { MainContainerPanel } from '../components/MainContainerPanel'
import { SyllabeDetailScreen } from '../../syllables-app/SyllabeDetailScreen'
import { SyllabesListScreen } from '../../syllables-app/SyllabesListScreen'
import { SyllabeCreateScreen } from '../../syllables-app/SyllabeCreateScreen'

export const PanelMainScreen = () => {

  const { location, syllabe_action } = useParams();


  return (
    <div className="panel__container">

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
        {
          (location == 'syllabes' && syllabe_action == 'create') && <SyllabeCreateScreen />

        }
        {
          (location == 'syllabes' && syllabe_action == 'update') && <SyllabeCreateScreen />
        }
      </main>
    </div>
  )
}
