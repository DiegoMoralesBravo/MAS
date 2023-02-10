import React from 'react'
import { useContext } from "react";
import { context } from '../../context/context'

export const Login = ({ setVisibleOther, setVisibleSelf }) => {

  const { setUser, setVisibleLogIn } = useContext(context);

  const signUp = (e) => {
    setVisibleSelf(false)
    setVisibleOther(true)
  }

  const login = (e) => {
    e.preventDefault()
    console.log('Entre')
    setUser('Diego')
    setVisibleSelf(false)
  }

  return (
    <>
      <div className='form-container-container'>
        <h1 className='tittle-form'>Login</h1>
        <div className='form-container'>
          <form>
            <input className='input-form'
              type="email"
              placeholder="Email"
              autoSave='false'
            />
            <input className='input-form'
              type="password"
              placeholder="Password"
              
            />
            <a href="#" onClick={() => { }}>
              Forgot password?
            </a>
            <button className='button-form' onClick={(e) => login(e)} >Login</button>
            <p>Not a member? <a href="#" onClick={() => signUp()}>
              Signup
            </a></p>
          </form>
        </div>
      </div>
    </>
  )
}
