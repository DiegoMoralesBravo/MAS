import React from 'react'
import { useContext } from "react";
import { context } from '../../context/context'

export const SignUp = ({ setVisibleOther, setVisibleSelf }) => {
  const { user } = useContext(context);

  const signUp = (e) => {
    e.preventDefault()
    setVisibleSelf(false)
    setVisibleOther(true)
    console.log('Entre')
  }
  return (
    <>
      <div className='form-container-container'>
        <h1 className='tittle-form'>Sign up</h1>
        <div className='form-container'>
          <form onSubmit={(e) => signUp(e)} >
            <input className='input-form'
              type="email"
              placeholder="Email"
              
            />

            <select className='input-form'>
              <option value="" disabled selected>Select your occupation</option>
              <option value="alumno">Student</option>
              <option value="maestro">Teacher</option>
              <option value="maestro">Researcher</option>
              <option value="maestro">Other</option>
            </select>

            <input className='input-form'
              type="password"
              placeholder="Password"
              
            />

            <input className='input-form'
              type="password"
              placeholder="Confirm password"
              
            />
            <button className='button-form'>Sign up</button>
          </form>
        </div>
      </div>
    </>
  )
}
