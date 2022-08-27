import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()
  const parsedUser = isAuthenticated ? JSON.stringify(user, null, 2) : 'User Not authenticated'
  return (
    <div>
     <textarea readOnly rows="10" cols="50" value={parsedUser}>
      </textarea>
    </div>
  )
}

export default Profile
