//react
import React, { useEffect, useState } from 'react'

//third
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from '../modules/home/HomeScreen';
import { LoginScreen } from '../modules/login/LoginScreen';

//local
import { PanelRouter } from './PanelRouter';
import firebase from '../firebase/firebase-config'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth-actions';
import PrivateRoute from './PrivateRoute';
import { loginOrCreateUserApiHelper } from '../helpers/auth-helpers';
import PublicRoute from './PublicRoute';



//component
export const AppRouter = () => {
  const [waiting, setWaiting] = useState(false);
  const { isAuthenticated } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {

      setWaiting(true);

      if (user?.uid) {
        loginOrCreateUserApiHelper(user.email, user.uid)
          .then((response) => {
            response &&
              dispatch(login(
                user.uid,
                user.email,
                user.displayName,
                user.photoURL,
                response.data.user,
                response.data.token));

            setWaiting(false);
          })

      } else {
        setWaiting(false);
      }

    });
  }, [])

  if (waiting) {
    return <h2>Espere...</h2>
  }



  return (
    <Router>
      <Switch>

        <PublicRoute
          path={import.meta.env.BASE_URL + "login"}
          isAuthenticated={isAuthenticated}
          component={LoginScreen}
        />

        <PrivateRoute
          path={import.meta.env.BASE_URL + "panel"}
          component={PanelRouter}
          isAuthenticated={isAuthenticated}
        />

        <Route path={import.meta.env.BASE_URL} >
          <HomeScreen />
        </Route>

      </Switch>
    </Router>
  )
}
