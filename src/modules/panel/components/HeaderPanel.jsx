import React from 'react'

export const HeaderPanel = () => {

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <h1>MECATRÓNICA-UNT</h1>
          <figure>
            <img src={import.meta.env.BASE_URL + "assets/logo_unt.png"} alt="" width="50" />
          </figure>
        </div>
        <div className="navbar__logo__derecha">
          <figure>
            <img src={import.meta.env.BASE_URL + "assets/logo_mecatronica.png"} alt="" />
          </figure>
        </div>
      </nav>
    </header>
  )
}
