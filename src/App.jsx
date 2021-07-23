//react
import React from 'react'
//third
import { Provider } from 'react-redux';
//local
import { AppRouter } from './Routers/AppRouter'
import { store } from './store/store';
import '/src/styles.scss';


//Component
export const App = () => {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
