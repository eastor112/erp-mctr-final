//react
import React from 'react'

//third
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomeScreen } from '../modules/home/HomeScreen';
import { LoginScreen } from '../modules/login/LoginScreen';

//local
import { PanelRouter } from './PanelRouter';


//component
export const AppRouter = () => {


  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/panel">
          <PanelRouter />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  )
}
