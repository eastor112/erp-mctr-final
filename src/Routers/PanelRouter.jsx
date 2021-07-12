//react
import React from 'react'
//third
import {
  Switch,
  Route
} from "react-router-dom";
import { HeaderPanel } from '../modules/panel/components/HeaderPanel';
//local
import { PanelMainScreen } from '../modules/panel/main/PanelMainScreen';
import { SyllabesAppRouter } from './SyllabesAppRouter';


//component
export const PanelRouter = () => {


  return (
    <>
      <HeaderPanel />

      <Switch>
        <Route exact path='/panel/syllabes'>
          <SyllabesAppRouter />
        </Route>

        <Route path='/panel/:location'>
          <PanelMainScreen />
        </Route>

        <Route path='/panel'>
          <PanelMainScreen />
        </Route>
      </Switch>
    </>

  );
}
