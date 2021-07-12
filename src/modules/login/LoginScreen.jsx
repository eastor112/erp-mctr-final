import React from 'react'

export const LoginScreen = () => {
  return (
    <main className="login__vista">
      <figure className="portada">
        <img src={"./assets/electronico.jpg"} alt="" />
      </figure>

      <div className="identificate">
        <figure>
          <img src={"./logo_mecatronica.png"} alt="" />
        </figure>
        <h1>Bienvenido al ERP de Ingeniería Mecatrónica</h1>
        <p>Identifiquese usando su correo:</p>

        <button className="ingresar" >
          <img src={"./assets/icon__google.png"} alt="" />
          &nbsp;&nbsp; Ingresa con Google
        </button>
      </div>
    </main>
  )
}
