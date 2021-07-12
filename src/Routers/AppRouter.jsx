//react
import React, { useEffect, useState } from 'react'

//third
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomeScreen } from '../modules/home/HomeScreen';
import { LoginScreen } from '../modules/login/LoginScreen';

//local
import { PanelRouter } from './PanelRouter';
import firebase from '../firebase/firebase-config'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth-actions';
import PrivateRoute from './PrivateRoute';



//component
export const AppRouter = () => {
  const [waiting, setWaiting] = useState(false);
  const { isAuthenticated } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  useEffect(() => {
    setWaiting(true);

    firebase.auth().onAuthStateChanged((user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
      setWaiting(false);
    });
  }, [])

  if (waiting) {
    return <h2>Espere...</h2>
  }

  return (
    <Router>
      <Switch>

        <Route path="/login">
          <LoginScreen />
        </Route>

        <PrivateRoute
          path="/panel"
          component={PanelRouter}
          isAuthenticated={isAuthenticated}
        />

        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  )
}
