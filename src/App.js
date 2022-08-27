import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

function App() {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0()
  if(isAuthenticated){
    console.log('token', getAccessTokenSilently())
  }
  return isLoading ? (
    <p>Loading....</p>
  ) : (
    <div className="App">
      <div className="not-authenticated">
        {!isAuthenticated && (
          <h1>You need to be authenticated to view this page</h1>
        )}
      </div>
      <div className="loginButtons">
        <LoginButton />
        <LogoutButton />
      </div>

      {isAuthenticated && (
        <>
          <h2>Welcome {user.nickname}!!!</h2>
          <Profile />
        </>
      )}
    </div>
  )
}

export default App
