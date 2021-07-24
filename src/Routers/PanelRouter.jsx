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
import { Sidebar } from '../modules/panel/components/Sidebar';
import { PanelMainScreen } from '../modules/panel/main/PanelMainScreen';


//component
export const PanelRouter = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem('lastpath', pathname);
  }, [pathname])


  return (
    <>
      <HeaderPanel />
      <Sidebar />

      <Switch>
        <Route exact path='/panel/:location/:syllabe_action/:pk'>
          <PanelMainScreen />
        </Route>

        <Route exact path='/panel/:location/:syllabe_action'>
          <PanelMainScreen />
        </Route>

        <Route exact path='/panel/:location'>
          <PanelMainScreen />
        </Route>

        <Route path='/panel'>
          <PanelMainScreen />
        </Route>
      </Switch>
    </>

  );
}
