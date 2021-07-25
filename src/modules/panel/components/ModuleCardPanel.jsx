import React from 'react'
import { useHistory } from 'react-router-dom';

export const ModuleCardPanel = ({
  img,
  title,
  description,
  url,
  enable }) => {

  const history = useHistory();

  const handleClick = () => {
    history.push(import.meta.env.BASE_URL + url)
  }
  return (
    <div className={enable ? 'card__modulo' : 'card__modulo disable'}>

      <figure>
        <img src={import.meta.env.BASE_URL + img} alt="" />
      </figure>
      {
        enable
          ?
          <i className="fas fa-check-double"></i>
          :
          <i className="fas fa-exclamation-triangle"></i>
      }

      <h3>{title}</h3>
      <p>
        {description}
      </p>

      <button
        onClick={handleClick}
        disabled={!enable}
      >
        INGRESAR
      </button>
    </div>
  )
}
