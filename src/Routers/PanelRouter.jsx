//react
import React from 'react'
//third
import {
  Switch,
  Route
} from "react-router-dom";
//local
import { PanelMainScreen } from '../modules/panel/main/PanelMainScreen';
import { PanelProfileScreen } from '../modules/panel/profile/PanelProfileScreen';
import { PanelUsersScreen } from '../modules/panel/users/PanelUsersScreen';
import { SyllabesAppRouter } from './SyllabesAppRouter';


//component
export const PanelRouter = () => {
  return (
    <Switch>
      <Route path='/panel/syllabes'>
        <SyllabesAppRouter />
      </Route>

      <Route path='/panel/users'>
        <PanelUsersScreen />
      </Route>

      <Route path='/panel/profile'>
        <PanelProfileScreen />
      </Route>

      <Route path='/panel'>
        <PanelMainScreen />
      </Route>
    </Switch>
  );
}
