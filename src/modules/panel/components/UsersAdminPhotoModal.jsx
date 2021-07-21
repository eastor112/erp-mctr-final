import React from 'react'

export const UsersAdminPhotoModal = ({ profile }) => {
  return (
    <figure>
      <img
        src={
          (profile === '')
            ?
            '/assets/profile.jpg'
            :
            import.meta.env.VITE_MEDIA_URL + profile
        }
        alt=""
      />
    </figure>
  )
}
