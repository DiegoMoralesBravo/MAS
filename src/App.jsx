import { Router } from './router/Router'
import { context } from './context/context'
import { useState } from 'react'
import { Modal } from './components/Modal'
import { Login } from './components/Login/Login'
import { SignUp } from './components/SignUp/SignUp'

function App() {
  const [user, setUser] = useState('')
  const [visibleLogIn, setVisibleLogIn] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState(false);
  return (
    <div className="App">
      <context.Provider value={{
        setUser,
        user,
        setVisibleLogIn,
        setVisibleSignUp
      }}>
        <Router />
        {visibleLogIn && (
          <Modal
            componente={<Login setVisibleOther={setVisibleSignUp} setVisibleSelf={setVisibleLogIn} />}
            setVisible={setVisibleLogIn}
          />
        )}
        {visibleSignUp && (
          <Modal
            componente={<SignUp setVisibleOther={setVisibleLogIn} setVisibleSelf={setVisibleSignUp} />}
            setVisible={setVisibleSignUp}
          />
        )}
      </context.Provider>
    </div>
  )
}

export default App
