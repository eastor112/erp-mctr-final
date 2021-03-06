//react
import React, { useState } from 'react'

//third
import { useDispatch } from 'react-redux'


//local
import { startGoogleLogin } from '../../actions/auth-actions'


//component
export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [isLogging, setIsLogging] = useState(false);

  const handleLoginGoogle = () => {
    localStorage.clear();

    dispatch(startGoogleLogin());
    setIsLogging(true);
  }


  return (
    <main className="login__vista">
      <figure className="portada">
        <img src={import.meta.env.BASE_URL + "assets/electronico.jpg"} alt="" />
      </figure>

      <div className="identificate">
        <figure>
          <img src={import.meta.env.BASE_URL + "assets/logo_mecatronica.png"} alt="" />
        </figure>
        <h1>Bienvenido al ERP de Ingeniería Mecatrónica</h1>
        <p>Identifiquese usando su correo:</p>

        <button
          className="ingresar"
          onClick={handleLoginGoogle}
          disabled={isLogging}
        >
          <img src={import.meta.env.BASE_URL + "assets/icon__google.png"} alt="" />
          &nbsp;&nbsp; Ingresa con Google
        </button>
      </div>
    </main>
  )
}
