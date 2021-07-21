import React from 'react'
import { onlyNameImage } from '../../../helpers/general-helpers';


export const UsersAdminSignatureConfirm = ({ signature }) => {
  return (
    <p>
      {
        (signature === '')
          ?
          <small className='highlight_not_ok'>
            <i className="fas fa-times-circle"></i>
            El usuario aun no ha guardado una firma
          </small>

          :
          <small className='highlight_ok'>
            <i className="fas fa-check-circle"> </i>
            Firma: {onlyNameImage(signature)}
          </small>
      }
    </p>
  )
}
