//react
import React, { useEffect } from 'react'

//third
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

//local
import { HeaderPanel } from '../modules/panel/components/HeaderPanel';
import { PanelMainScreen } from '../modules/panel/main/PanelMainScreen';
import { SyllabesAppRouter } from './SyllabesAppRouter';


//component
export const PanelRouter = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem('lastpath', pathname);
  }, [pathname])


  return (
    <>
      <HeaderPanel />

      <Switch>

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
