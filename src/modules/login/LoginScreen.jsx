//react
import React, { useEffect, useState } from 'react'

//third
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//local
import { startGoogleLogin } from '../../actions/auth-actions'

//component
export const LoginScreen = () => {

  const history = useHistory()

  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.auth);

  const [waiting, setWaiting] = useState(false);

  const handleLoginGoogle = () => {
    setWaiting(true);
    dispatch(startGoogleLogin());
  }

  useEffect(() => {
    setWaiting(false);
    if (uid) {
      const lastpath = localStorage.getItem('lastpath');

      if (lastpath) {
        history.push(lastpath);
      } else {
        history.replace('/panel');
      }
    }
  }, [uid])


  return (
    <main className="login__vista">
      <figure className="portada">
        <img src={"/assets/electronico.jpg"} alt="" />
      </figure>

      <div className="identificate">
        <figure>
          <img src={"/assets/logo_mecatronica.png"} alt="" />
        </figure>
        <h1>Bienvenido al ERP de Ingeniería Mecatrónica</h1>
        <p>Identifiquese usando su correo:</p>

        <button
          className="ingresar"
          onClick={handleLoginGoogle}
          disabled={waiting}
        >
          <img src={"./assets/icon__google.png"} alt="" />
          &nbsp;&nbsp; Ingresa con Google
        </button>
      </div>
    </main>
  )
}
